export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  // callbacks: {
  //   authorized({ auth, request }) {
  //     const isLoggedIn = auth?.user;
  //     const isOnDashboard = request.nextUrl.pathname.startsWith("/home");
  //     if (isOnDashboard) {
  //       if (isLoggedIn) return true;
  //       return false;
  //     } else if (isLoggedIn) {
  //       return Response.redirect(new URL("/home", request.nextUrl));
  //     }
  //     return true;
  //   },
  // },
};
