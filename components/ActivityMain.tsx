"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Divider, Skeleton, CircularProgress } from "@mui/material";
import { useCursorFeed } from "./hooks/useCursorFeed";


/**
 * Row-level skeleton (inline for now to avoid extra files)
 */
function ActivityRowSkeleton() {
  return (
    <Box display="flex" gap={2}>
      <Skeleton variant="text" width={80} height={20} />
      <Box flex={1}>
        <Skeleton variant="text" width="30%" height={20} />
        <Skeleton variant="rectangular" height={48} sx={{ borderRadius: 1, mt: 1 }} />
      </Box>
    </Box>
  );
}

export default function ActivityLogPage() {
  const { items, isLoading, fetchNext, hasMore } = useCursorFeed();
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sentinelRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          fetchNext();
        }
      },
      { threshold: 1 },
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [fetchNext, isLoading, hasMore]);

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        Car Activity Log
      </Typography>

      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: 2,
            p: 2,
            mb: 1.5,
          }}
        >
          <Typography fontSize={12} color="text.secondary">
            {new Date(item.timestamp).toLocaleString()}
          </Typography>

          <Typography fontWeight={600}>{item.action}</Typography>

          <Typography fontSize={14}>{item.summary}</Typography>
        </Box>
      ))}

      {isLoading && (
        <Box display="flex" justifyContent="center" py={3}>
          <CircularProgress size={24} />
        </Box>
      )}

      <div ref={sentinelRef} />
    </Box>
  );
}
