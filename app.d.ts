declare module "@auth/core/types" {
  interface User extends DefaultSession["user"] {
    role?: "admin" | "user";
  }

  interface Session {
    user?: User;
  }
}

export {};
