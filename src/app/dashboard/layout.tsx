import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="m-2">Dashboard</h1>
      {children}
    </div>
  );
}
