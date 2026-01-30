"use client";

import { Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Typography variant="h2" align="center" mt={1}>
        Frontend performance-focused activity feed{" "}
      </Typography>
      Click the Button to Navigate to Activity Log Page
      <Button
        onClick={() => {
          router.push("/activity-log");
        }}
      >
        Click Here
      </Button>
    </>
  );
}
