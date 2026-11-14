'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirectTo: '/dashboard',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Email atau kata sandi salah.';
        default:
          return 'Terjadi kesalahan. Silakan coba lagi.';
      }
    }
    // Wajib dilempar ulang: redirect Next.js bekerja lewat error.
    throw error;
  }
}
