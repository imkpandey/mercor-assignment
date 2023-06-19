import {
  Box,
  IconButton,
  InputBase,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  SearchNormal1,
  Calendar2,
  MessageQuestion,
  Notification,
  ArrowDown2,
} from "iconsax-react";
import user from "../assets/user.svg";

const Topbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        pt={1.5}
        px={4}
        height="61px"
      >
        <Box
          display="flex"
          bgcolor="#F5F5F5"
          borderRadius="6px"
          height={45}
          width={400}
        >
          <IconButton sx={{ pl: 3, color: "grey" }}>
            <SearchNormal1 />
          </IconButton>
          <InputBase
            sx={{ ml: 1, mt: 0.5 }}
            placeholder="Search for anything..."
          />
        </Box>
        <Box display="flex" alignItems="center">
          {matches && (
            <Box mx={3}>
              <IconButton>
                <Calendar2 />
              </IconButton>
              <IconButton>
                <MessageQuestion />
              </IconButton>
              <IconButton>
                <Notification />
              </IconButton>
            </Box>
          )}
          <Box display="flex">
            {matches && (
              <Box alignItems="center">
                <Typography variant="subtitle1" color="black">
                  Anima Agrawal
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="grey"
                  textAlign="right"
                  mt="-4px"
                >
                  U.P, India
                </Typography>
              </Box>
            )}
            <Box marginLeft="5px" justifyContent="space-between">
              <IconButton sx={{ mt: "-4px" }}>
                <img src={user} alt="user-logo" />
                &nbsp;
                <ArrowDown2 />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: 1.1 }} />
    </>
  );
};

export default Topbar;
