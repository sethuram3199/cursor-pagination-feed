"use client";

import { Box, Skeleton } from "@mui/material";

export default function ActivityRowSkeleton() {
  return (
    <Box display="flex" alignItems="flex-start" gap={2}>
      {/* Timestamp */}
      <Skeleton variant="text" width={80} height={20} />

      {/* Avatar */}
      <Skeleton variant="circular" width={32} height={32} />

      {/* Content */}
      <Box flex={1}>
        <Skeleton variant="text" width="30%" height={20} />
        <Skeleton
          variant="rectangular"
          height={48}
          sx={{ borderRadius: 1, mt: 1 }}
        />
      </Box>
    </Box>
  );
}
