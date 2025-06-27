"use client";

import React from "react";
import Layout from "./Layout";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    document.body.classList.add("antialiased");
    return () => {
      document.body.classList.remove("antialiased");
    };
  }, []);
  return <Layout>{children}</Layout>;
} 