"use client";

import { Typography, Box } from "@mui/material";

export default function ActivityLogPage() {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight={600}>
        Activity Log
      </Typography>

      <Typography mt={1} color="text.secondary">
        Feed will be rendered here.
      </Typography>
    </Box>
  );
}
