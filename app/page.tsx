"use client";

import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/activity-log");
  };

  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" px={2}>
      <Box width="100%" maxWidth={360} textAlign="center" display="flex" flexDirection="column" gap={3}>
        <Typography variant="h4" fontWeight={600}>
          Welcome
        </Typography>

        <Typography color="text.secondary">Sign in to continue to the activity feed</Typography>

        <Button variant="contained" size="large" onClick={handleLogin}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}
