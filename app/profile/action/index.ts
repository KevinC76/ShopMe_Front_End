'use server';

import { cookies } from 'next/headers';

export async function getUserInformation() {
  try {
    const cookiesStorage = await cookies();
    const token = cookiesStorage.get('access_token')?.value;

    const res = await fetch('http://localhost:8000/api/users/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    console.log(data);

    return data.data;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch user information');
  }
}

export async function logOut() {
  try {
    const cookiesStorage = await cookies();
    cookiesStorage.delete('access_token');
  } catch (err) {
    console.error(err);
    throw new Error('Failed to log out');
  }
}
