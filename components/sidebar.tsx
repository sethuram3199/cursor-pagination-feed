"use client";

import { Drawer, IconButton, List, ListItemButton, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const drawerWidth = 240;

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)} sx={{ position: "fixed", top: 16, left: 16, zIndex: 1201 }}>
        <MenuIcon />
      </IconButton>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        <Box p={2}>
          <List>
            <ListItemButton selected={pathname === "/activity-log"} onClick={() => goTo("/activity-log")}>
              <ListItemText primary="Activity Log" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
