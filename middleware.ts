import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token =
    req.cookies.get('token')?.value || req.headers.get('Authorization');
  const pathname = req.nextUrl.pathname;

  console.log('Middleware active! Path:', pathname, 'Token:', token);

  if (!token) {
    console.log('No token found, redirecting...');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*'], // Halaman yang dilindungi
};
