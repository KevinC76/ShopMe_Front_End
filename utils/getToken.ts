'use server';

import { cookies } from 'next/headers';

export async function getToken() {
  const cookiesStore = await cookies();
  return cookiesStore.get('access_token')?.value;
}
