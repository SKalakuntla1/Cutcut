import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const publicPaths = ['/auth/signin', '/auth/signup', '/'];
  
  // Allow public paths and static files
  if (publicPaths.includes(path) || 
      path.startsWith('/_next/') || 
      path.includes('/api/') ||
      path.includes('.')) {
    return NextResponse.next();
  }

  // Check for Firebase auth session cookie
  const session = request.cookies.get('__session');
  
  if (!session) {
    // Redirect to sign in if no session exists
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}; 