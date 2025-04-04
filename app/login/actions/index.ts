'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function handleLogin(email: string, password: string) {
  try {
    const response = await fetch('http://localhost:8000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    const cookiesStore = await cookies();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    cookiesStore.set('access_token', data.token);
    console.log('Login successful:', data);

    revalidatePath('/');

    return { success: true };
  } catch (e) {
    console.error(e);
  }
}

export async function handleRegister(
  name: string,
  email: string,
  password: string,
  retype_password: string
) {
  try {
    const response = await fetch('http://localhost:8000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        retype_password,
      }),
    });

    const data = await response.json();
    const cookiesStore = await cookies();

    if (!response.ok) {
      throw new Error(data.message || 'Register failed');
    }
    
    cookiesStore.set('access_token', data.token);
    console.log('Register successful:', data);

    revalidatePath('/');

    return { success: true };
  } catch (e) {
    console.error(e);
  }
}
