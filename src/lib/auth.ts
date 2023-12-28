import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { Session, User } from "@auth/core/types";
import { JWT } from "@auth/core/jwt";

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    GitHubProvider,
    //   ({
    //   profile: (profile) => {
    //     const role =
    //       profile?.email === "frederickhong.5@gmail.com" ? "admin" : "user";
    //     return {
    //       ...profile,
    //       id: String(profile.id),
    //       role,
    //     };
    //   },
    // }),
  ],
  // callbacks: {
  //   session: async ({ session, user }: { session: Session; user: User }) => {
  //     if (user && session.user) {
  //       session.user.role = user.role;
  //     }
  //     return session;
  //   },
  //   jwt: async ({ token, user }: { token: JWT; user: User }) => {
  //     if (user) {
  //       token.role = user.role;
  //     }
  //     return token;
  //   },
  // },
  // session: { strategy: "jwt" },
});
