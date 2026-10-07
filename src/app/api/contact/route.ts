import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z
      .string()
      .min(7, 'Phone number must be at least 7 digits')
      .max(25, 'Phone number is too long')
      .regex(/^[\+\d\s\(\)\.\-]+$/, 'Invalid phone number format'),
    city: z.string().min(1, 'Please select a city').optional(),
    otherCity: z.string().optional(),
    subject: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(5, 'Message must be at least 5 characters'),
  })
  .refine(
    (data) => {
      if (data.city === 'Other') {
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
    const validatedData = contactSchema.parse(body);

    console.log('[CONTACT MESSAGE RECEIVED]:', validatedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. We will respond promptly.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0]?.message || 'Invalid input data' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
