"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Divider, Skeleton } from "@mui/material";

/**
 * Temporary activity type (API-agnostic)
 */
interface ActivityLog {
  id: number;
  time: string;
  user: string;
  action: string;
  description: string;
}

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

export default function ActivityMain() {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<ActivityLog[]>([]);

  /**
   * Simulated fetch (replace later with cursor pagination hook)
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogs([
        {
          id: 1,
          time: "10:12 AM",
          user: "John Doe",
          action: "Updated",
          description: "Patient profile details",
        },
        {
          id: 2,
          time: "09:45 AM",
          user: "Jane Smith",
          action: "Created",
          description: "New lab request",
        },
      ]);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  /**
   * 1️⃣ Initial loading → row skeletons
   */
  if (loading) {
    return (
      <Box display="flex" flexDirection="column" gap={3}>
        {Array.from({ length: 6 }).map((_, i) => (
          <ActivityRowSkeleton key={i} />
        ))}
      </Box>
    );
  }

  /**
   * 2️⃣ Empty state
   */
  if (!loading && logs.length === 0) {
    return (
      <Box mt={6} textAlign="center">
        <Typography color="text.secondary">No activity found</Typography>
      </Box>
    );
  }

  /**
   * 3️⃣ Render activity list
   */
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Typography variant="subtitle2" color="text.secondary">
            Today
          </Typography>
          <Divider flexItem />
        </Box>

        <Box display="flex" flexDirection="column" gap={3}>
          {logs.map((log) => (
            <Box key={log.id} display="flex" gap={2}>
              <Typography variant="caption" color="text.secondary" sx={{ minWidth: 80 }}>
                {log.time}
              </Typography>

              <Box flex={1}>
                <Typography variant="body2" fontWeight={500}>
                  {log.user}
                </Typography>

                <Box
                  mt={0.5}
                  p={1.5}
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2">
                    <strong>{log.action}</strong> — {log.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
