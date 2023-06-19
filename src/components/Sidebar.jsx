import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  Category,
  Message,
  Profile2User,
  TaskSquare,
  Setting2,
  AddSquare,
} from "iconsax-react";
import { Circle, MoreHoriz } from "@mui/icons-material";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";
import logoIcon from "../assets/logo.svg";
import message from "../assets/message.svg";

const Item = ({ title, icon }) => {
  return (
    <MenuItem icon={icon}>
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        "& .pro-sidebar-inner": {
          background: "white !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          color: "#787486 !important",
          padding: "5px 15px 4px 20px !important",
        },
        "& .pro-inner-item:hover": {
          background: "#EDEAFA !important",
          color: "#000000 !important",
          borderRadius: "8px !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <ArrowRight /> : undefined}
            style={{
              margin: "0 0 15px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex">
                  <img src={logoIcon} alt="Logo" width={150} height={28} />
                </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <ArrowLeft />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Divider/>
          <Box marginY="12px">
            <Item title="Home" icon={<Category />} />
            <Item title="Messages" icon={<Message />} />
            <Item title="Tasks" icon={<TaskSquare />} />
            <Item title="Members" icon={<Profile2User />} />
            <Item title="Settings" icon={<Setting2 />} />
          </Box>
          <Divider variant="middle" sx={{ mt: 2, width: "85%" }} />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop="20px"
            marginLeft="20px"
          >
            {!isCollapsed && (
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                textTransform="uppercase"
                color="grey"
              >
                My projects
              </Typography>
            )}
            <IconButton sx={{ width: 35, marginBottom: 0.5 }}>
              <AddSquare />
            </IconButton>
          </Box>
          <Box>
            <Box
              display="flex"
              justifyContent="space-between"
              bgcolor="#EDEAFA"
              borderRadius="8px"
            >
              <Box display="flex" padding="15px 30px 10px 30px">
                <Circle sx={{ width: "15px", fill: "#7AC555" }} />
                {!isCollapsed && (
                  <Typography color="black" fontWeight="bold" marginLeft="20px">
                    Mobile App
                  </Typography>
                )}
              </Box>
              <IconButton>
                <MoreHoriz sx={{ fill: "black" }} />
              </IconButton>
            </Box>
            <Item
              title="Website Redesign"
              icon={<Circle sx={{ width: "15px", fill: "#FFA500" }} />}
            />
            <Item
              title="Design System"
              icon={<Circle sx={{ width: "15px", fill: "#E4CCFD" }} />}
            />
            <Item
              title="Wireframes"
              icon={<Circle sx={{ width: "15px", fill: "#76A5EA" }} />}
            />
          </Box>
          <Box alignItems="center" justifyContent="center" paddingLeft={4}>
            {!isCollapsed && <img src={message} alt="message" width={200} />}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
