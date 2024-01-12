import { sendVirfiyEmail } from "@/app/email/sendEmail"

export async function POST(req) {
  const body = await req.json()
  sendVirfiyEmail(body)
    return new Response(JSON.stringify({message :'done'}) ,{ status: 200})
  }
  