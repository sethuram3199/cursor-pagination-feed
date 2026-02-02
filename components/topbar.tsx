"use client";

import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";

export default function TopBar() {
  return (
    <AppBar position="static" elevation={1} color="default">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" fontWeight={600}>
          Cursor Feed
        </Typography>

        {/* User Info */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography fontSize={14}>Demo User</Typography>
          <Avatar sx={{ width: 28, height: 28 }}>DU</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
