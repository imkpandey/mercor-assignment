import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import linkIcon from "../assets/link.svg";
import editIcon from "../assets/edit.svg";
import addIcon from "../assets/add.svg";
import groupIcon from "../assets/group.svg";
import calendarIcon from "../assets/calendar.svg";
import filterIcon from "../assets/filter.svg";
import arrowIcon from "../assets/arrow-down.svg";
import profileIcon from "../assets/profile-3user.svg";
import pauseIcon from "../assets/pause.svg";
import menuIcon from "../assets/menu.svg";
import Kanban from "./Kanban";

const Canvas = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box display="flex" justifyContent="space-between" pt={4} px={4}>
        <Box
          display="flex"
          flexDirection={matches ? "column" : null}
          alignItems={!matches ? "center" : null}
        >
          <Typography variant="h4" fontWeight="bold">
            Mobile App
          </Typography>
          <Box ml={matches ? -1 : null}>
            <IconButton>
              <img src={editIcon} alt="edit-icon" width={30} height={30} />
            </IconButton>
            <IconButton sx={{ marginLeft: "-8px" }}>
              <img src={linkIcon} alt="link-icon" width={30} height={30} />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton>
            <img src={addIcon} alt="add-icon" width={18} height={18} />
          </IconButton>
          <Typography variant="subtitle2" color="#5030E5">
            Invite
          </Typography>
          <IconButton>
            <img
              src={groupIcon}
              alt="group-icon"
              width={matches ? 100 : 150}
              height={35}
            />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" pt={3} px={4}>
        <Box>
          <Button
            sx={{
              textTransform: "capitalize",
              color: "#787486",
              borderColor: "#787486",
              marginRight: `${!matches ? "5px" : "2px"}`,
            }}
            variant="outlined"
            size="small"
          >
            <img src={filterIcon} alt="filter-icon" width={14} height={14} />
            &nbsp; Filter&nbsp;
            <img src={arrowIcon} alt="arrow-icon" width={14} height={14} />
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
              color: "#787486",
              borderColor: "#787486",
            }}
            variant="outlined"
            size="small"
          >
            <img
              src={calendarIcon}
              alt="calendar-icon"
              width={16}
              height={16}
            />
            &nbsp; Today&nbsp;
            <img src={arrowIcon} alt="arrow-icon" width={16} height={16} />
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" marginLeft="1px">
          <Box>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "#787486",
                borderColor: "#787486",
                marginRight: "10px",
              }}
              variant="outlined"
              size="small"
            >
              <img
                src={profileIcon}
                alt="profile-icon"
                width={14}
                height={14}
              />
              &nbsp;Share
            </Button>
          </Box>
          <Divider orientation="vertical" sx={{ mr: 1 }} />
          <Box display="flex" justifyContent="center">
            <Box
              sx={{
                backgroundColor: "#5030e5",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              <img src={pauseIcon} alt="pause-icon" width={20} height={20} />
            </Box>
            <IconButton sx={{ marginTop: "-3px" }}>
              <img src={menuIcon} alt="menu-icon" width={20} height={20} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Kanban />
    </>
  );
};

export default Canvas;
