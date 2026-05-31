'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

export async function submitContactForm(formData: FormData): Promise<void> {
  const data = Object.fromEntries(formData);
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    console.error('Validation failed', result.error.flatten().fieldErrors);
    return;
  }

  // Simulate server submission
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Contact form submitted:', result.data);
}
