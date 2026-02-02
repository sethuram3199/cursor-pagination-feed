"use client";

import { Box, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Tooltip } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { usePathname, useRouter } from "next/navigation";

const SIDEBAR_WIDTH = 240;
const SIDEBAR_COLLAPSED_WIDTH = 64;

export default function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const pathname = usePathname();
  const router = useRouter();

  const item = (
    <ListItemButton
      selected={pathname === "/activity-log"}
      onClick={() => router.push("/activity-log")}
      sx={{
        justifyContent: collapsed ? "center" : "flex-start",
        px: collapsed ? 1.5 : 2,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: collapsed ? 0 : 2,
          justifyContent: "center",
        }}
      >
        <ListAltIcon />
      </ListItemIcon>

      {!collapsed && <ListItemText primary="Activity Log" />}
    </ListItemButton>
  );

  return (
    <Box
      sx={{
        width: collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,
        transition: "width 0.2s ease",
        borderRight: "1px solid #E5E7EB",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Toggle */}
      <Box display="flex" justifyContent={collapsed ? "center" : "flex-end"} p={1}>
        <IconButton onClick={onToggle} size="small">
          {collapsed ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
        </IconButton>
      </Box>

      {/* Navigation */}
      <List>
        {collapsed ? (
          <Tooltip title="Activity Log" placement="right">
            {item}
          </Tooltip>
        ) : (
          item
        )}
      </List>
    </Box>
  );
}
