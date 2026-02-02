"use client";

import Sidebar from "@/components/sidebar";
import { Box } from "@mui/material";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box minHeight="100vh">
      <Sidebar />
      <Box pt={8} px={3}>
        {children}
      </Box>
    </Box>
  );
}
