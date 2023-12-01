import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend("re_ZuTX2sJU_7ysKAVH7vKDP7tZ6ixd3S4w4");

export async function POST(req: Request) {
    const { name, email, message } = await req.json();
    await resend.sendEmail({
        from: 'Acme <onboarding@resend.dev>',
        to: 'manishkaswan88@gmail.com',
        subject: 'hello world',
        text: JSON.stringify({ name, email, message }),
    });

    return NextResponse.json({
        status: 'ok',
    });
}
