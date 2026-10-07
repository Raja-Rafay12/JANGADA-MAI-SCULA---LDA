import { NextResponse } from 'next/server';
import { z } from 'zod';

const quoteSchema = z
  .object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z
      .string()
      .min(7, 'Phone number must be at least 7 digits')
      .max(25, 'Phone number is too long')
      .regex(/^[\+\d\s\(\)\.\-]+$/, 'Invalid phone number format'),
    city: z.string().min(1, 'Please select a city'),
    otherCity: z.string().optional(),
    emirate: z.string().optional(), // For backward compatibility
    service: z.string().optional(),
    projectSize: z.string().optional(),
    message: z.string().optional(),
    language: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.city === 'Other' || data.emirate === 'Other') {
        return !!(data.otherCity && data.otherCity.trim().length > 0);
      }
      return true;
    },
    {
      message: 'Please specify the city',
      path: ['otherCity'],
    }
  );

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = quoteSchema.parse(body);

    // In production, send via Resend or Nodemailer using env vars:
    // const resendApiKey = process.env.RESEND_API_KEY;
    // const recipientEmail = process.env.NOTIFICATION_EMAIL || 'quotes@jangada-maiuscula.ae';

    console.log('[QUOTE REQUEST RECEIVED]:', validatedData);

    // Simulate reliable dispatch
    return NextResponse.json(
      {
        success: true,
        message: 'Quote request registered successfully. Our landscape team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const msg = error.issues?.[0]?.message || error.errors?.[0]?.message || 'Invalid input data';
      return NextResponse.json({ error: msg }, { status: 400 });
    }
    console.error('Quote API Error:', error?.message || 'Unknown error');
    return NextResponse.json(
      { error: error?.message || 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
