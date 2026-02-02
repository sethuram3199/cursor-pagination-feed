"use client";

import Sidebar from "@/components/sidebar";
import TopBar from "@/components/topbar";
import { Box } from "@mui/material";
import { useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <TopBar />

      <Box display="flex" flex={1} minHeight={0}>
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />

        <Box flex={1} p={3} overflow="auto">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
