import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('access_token')?.value;
  const pathname = req.nextUrl.pathname;

  console.log('Middleware active! Path:', pathname, 'Token:', token);

  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!token && pathname === '/profile') {
    console.log('No token found, redirecting...');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/login'], // Halaman yang dilindungi
};
