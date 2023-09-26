import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, Tooltip } from "@mui/material";
import BasicMenu from "./ProfileMenu";

const RightSideBar = () => {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div onClick={() => window.location.reload()}>
        <Tooltip title="Refresh">
          <RefreshIcon color="action" />
        </Tooltip>
      </div>
      <div style={{ margin: "0 20px" }}>
        <Tooltip title="Notification">
          <Badge badgeContent={3} color="success">
            <NotificationsIcon color="action" />
          </Badge>
        </Tooltip>
      </div>
      {/* drop down menu  */}
      <div>
        <BasicMenu />
      </div>
    </div>
  );
};

export default RightSideBar;
