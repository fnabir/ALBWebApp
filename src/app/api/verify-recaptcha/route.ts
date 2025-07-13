import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { token } = body

    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    if (!secretKey) {
      return NextResponse.json({ success: false, message: "Missing secret key" }, { status: 500 })
    }

    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    })

    const result = await recaptchaRes.json()
    
    if (result.success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, errors: result["error-codes"] || [] }, { status: 400 })
    }
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 })
  }
}