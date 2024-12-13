import { auth } from '@/lib/auth';

export default auth((req) => {
    if (!req.auth && req.nextUrl.pathname !== "/sing-in") {
        const newUrl = new URL("/sign-in", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};