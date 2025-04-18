// app\utils\AuthProvider.jsx

"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
export default function AuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
