import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isOnAuthPage =
        nextUrl.pathname.startsWith("/login") ||
        nextUrl.pathname.startsWith("/register");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Jika belum login, tidak diizinkan masuk ke dashboard
      } else if (isLoggedIn && isOnAuthPage) {
        return Response.redirect(new URL("/dashboard", nextUrl)); // Arahkan user login ke dashboard
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      // Handle relative URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Handle same origin URLs
      if (new URL(url).origin === baseUrl) return url;
      // Default redirect
      return `${baseUrl}/dashboard`;
    },
  },
  trustHost: true, // Add this for production
  providers: [], // Untuk saat ini dikosongkan dulu
} satisfies NextAuthConfig;
