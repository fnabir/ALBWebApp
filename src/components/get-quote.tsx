"use client"

import { useEffect, useRef, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MdRequestQuote } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "./ui/input";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { z } from "zod"
import { CargoLoadOptions, PassengerLoadOptions, ProductOptions, WorkOptions } from "@/lib/arrays";
import { OptionsInterface } from "@/lib/interfaces";
import ReCAPTCHA from "react-google-recaptcha"
import type { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha"
import { addQuoteForm } from "@/lib/utils";

const FormSchema = z.object({
  name: z.string().nonempty("Name is required"),
	address: z.string().nonempty("Project address is required"),
	product: z.string().nonempty("Please select an product type."),
	work: z.string().nonempty("Work type is required"),
	unit: z.string().optional(),
	floor: z.string().optional(),
	person: z.string().optional(),
	shaft: z.string().optional(),
})

type FormData = z.infer<typeof FormSchema>;

export default function GetQuote() {
  const [open, setOpen] = useState<boolean>(false);
  const recaptchaRef = useRef<ReCAPTCHAType | null>(null)
  const [loading, setLoading] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      address: "",
      product: "",
      work: "",
      unit: "1",
      floor: "",
      person: "",
      shaft: ""
    },
  })

  const selectedProduct = form.watch("product")
  const [personLabel, setPersonLabel] = useState("Person/Load")
  const [personPlaceholder, setPersonPlaceholder] = useState("Select Capacity")
  const [personOptions, setPersonOptions] = useState<OptionsInterface[]>(PassengerLoadOptions)
  useEffect(() => {
    if (selectedProduct === "Cargo Lift") {
      setPersonLabel("Load")
      setPersonPlaceholder("Select Load Capacity")
      setPersonOptions(CargoLoadOptions)
    } else {
      setPersonLabel("Person/Load")
      setPersonPlaceholder("Select Capacity")
      setPersonOptions(PassengerLoadOptions)
    }
  }, [selectedProduct]);

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
        await addQuoteForm(data);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="pr-2">
          <MdRequestQuote className="size-6"/> Get Quote
        </Button>
      </DialogTrigger>
      <DialogContent className={"border-2 border-blue-500"}>
        <DialogHeader>
          <DialogTitle>Get Quote</DialogTitle>
          <DialogDescription className="hidden lg:flex">
            Provide as much information you can so we can provide proper quotation.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <InputText form={form} field="name" label="Full Name" required/>
            <InputText form={form} field="address" label="Address" placeholder="Project Address" required/>
            <InputSelect form={form} field="product" label="Product" placeholder="Select Product" options={ProductOptions} required/>
            <InputSelect form={form} field="work" label="Work Type" placeholder="Select Work Type" options={WorkOptions} required/>
            <InputText form={form} field="unit" label="Number of Lift(s)" placeholder="Number of Lift(s)"/>
            <InputText form={form} field="floor" label="Floor/Stop" placeholder="6/6"/>
            <InputSelect form={form} field="person" 
                          label={personLabel} 
                          placeholder={personPlaceholder} 
                          options={personOptions}/>
            <div className="w-contain flex items-center justify-center my-6">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              />
            </div>
            <DialogFooter className={"mt-2 lg:mt-4 flex flex-row justify-center!"}>
              <DialogClose asChild>
                <Button variant="destructive">Close</Button>
              </DialogClose>
              <Button type="reset" variant="accent" onClick={() => form.reset()}>Reset</Button>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>  
      </DialogContent>
    </Dialog>
  )
}

const InputText = (
  {form, field, label, placeholder, description, required}
  : 
  {form: UseFormReturn<FormData>, field:keyof FormData, label:string, placeholder?:string, description?: string, required?:boolean, type?:string}
) => {
  return (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem className="grid-cols-4 gap-y-1">
          <FormLabel className="col-span-1">
            {label}
            {required && <span className="text-red-500 -ml-1.75 -translate-y-1">*</span>}
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

const InputSelect = (
  {form, field, label, placeholder, options, required}
  : 
  {form: UseFormReturn<FormData>, field:keyof FormData, label:string, placeholder?:string, options: OptionsInterface[], required?:boolean}
) => {
  return (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem className="grid-cols-4 gap-y-1">
          <FormLabel className="col-span-1">
            {label}
            {required && <span className="text-red-500 -ml-1.75 -translate-y-1">*</span>}
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className="col-span-3">
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {
                options.map((item, index) => (
                  <SelectItem key={index} value={item.value}>{item.label ?? item.value}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <div className="col-span-1" />
          <FormMessage className="col-span-3"/>
        </FormItem>
      )}
    />
  )
}