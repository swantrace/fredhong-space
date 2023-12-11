import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";
import React from "react";

const DashboardHome = async () => {
  const session = await auth();
  console.log("session.user", session?.user);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return <div>DashboardHome</div>;
};

export default DashboardHome;
