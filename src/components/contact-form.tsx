"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { z } from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { addContactForm } from "@/lib/utils";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"
import type { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha"

const FormSchema = z.object({
  name: z.string().nonempty("Required").min(3, "Name must contain at least 3 characters"),
  phone: z.string().nonempty("Required").min(11, "Phone number must contain 11 digits").max(11, "Phone number must contain 11 digits"),
  email: z.string().nonempty("Required").email("Invalid email address"),
  subject: z.string().nonempty("Required"),
  message: z.string().nonempty("Required")
})

type FormData = z.infer<typeof FormSchema>;

export default function ContactForm({className} : {className?:string}) {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: ""
    },
  })

  const recaptchaRef = useRef<ReCAPTCHAType | null>(null)
  const [loading, setLoading] = useState(false)
  
  async function onSubmit(data: FormData) {
    if (loading) return
    const token = await recaptchaRef.current?.getValue();
    if (!token) {
      toast.error("Please complete the reCAPTCHA")
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
      })

      if (!response.ok) {
        toast.error("Failed reCAPTCHA verification")
        return
      }

      const result = await response.json()
      if (result.success) {
        await addContactForm(data);
        toast.success("Form submitted successfully!");
        form.reset()
        recaptchaRef.current?.reset()
      } else {
        toast.error("Failed to verify reCAPTCHA. Refresh the page and try again.")
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold">Contact Form</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <InputText form={form} field="name" label="Full Name"/>
            <InputText form={form} field="phone" label="Phone No" placeholder="11-digit mobile number"/>
            <InputText form={form} field="email" label="Email Address" placeholder="user@email.com"/>
            <InputText form={form} field="subject" label="Subject"/>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="grid-cols-4 gap-y-1">
                  <FormLabel className="col-span-1">Message</FormLabel>
                  <FormControl className="col-span-3">
                    <Textarea
                      placeholder="Tell us how we can help you"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <div className="col-span-1" />
                  <FormMessage className="col-span-3"/>
                </FormItem>
              )}
            />
            <div className="w-contain rounded-lg overflow-hidden flex items-center justify-center my-6">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              />
            </div>
            

            <Button type="submit" className="w-full">Submit</Button>
            <div className="text-center text-sm">
              By submitting you agree to our 
              <Link href="/privacu-policy" className="text-blue-800 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-500 pl-0.75">privacy policy</Link></div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

const InputText = (
  {form, field, label, placeholder, description}
  : 
  {form: UseFormReturn<FormData>, field:keyof FormData, label:string, placeholder?:string, description?: string}
) => {
  return (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem className="grid-cols-4 gap-y-1">
          <FormLabel className="col-span-1">
            {label}
          </FormLabel>
          <FormControl className="col-span-3">
            <Input placeholder={placeholder ?? label} {...field} />
          </FormControl>
          {description && <div className="col-span-1" />}
          {description && <FormDescription className="col-span-3">{description}</FormDescription>}
          <div className="col-span-1" />
          <FormMessage className="col-span-3"/>
        </FormItem>
      )}
    />
  )
}