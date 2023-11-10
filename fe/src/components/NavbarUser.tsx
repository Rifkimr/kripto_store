import { Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  Button,
  InputBase,
} from "@mui/material";
import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import SearchIcon from "@mui/icons-material/Search";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#ECECEC",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavbarUser = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/landing-page");
  };

  const user = useSelector((state: RootState) => state.auth);

  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed" sx={{ height: "65px", bgcolor: "white" }}>
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block", color: "black" } }}
        >
          LOGO
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIcon sx={{ color: "grey", float: "right", m: "10px" }} />
        </Search>
        <Box display="flex">
          <Box marginRight={2}>
            <Typography align="right" sx={{ color: "blue", fontSize: "15px" }}>
              Hallo
              {user?.role}
            </Typography>
            <Typography align="right" sx={{ color: "black" }}>
              {user?.username}
            </Typography>
          </Box>
          <Icons>
            <Avatar
              sx={{ width: 40, height: 40 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onClick={() => setOpen(true)}
            />
          </Icons>
        </Box>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{ width: 50, height: 50 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="200px"
        >
          <MenuItem>
            <Avatar
              sx={{ width: 50, height: 50 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </MenuItem>
          <MenuItem>{user?.username}</MenuItem>
          <MenuItem sx={{ fontSize: "15px" }}>{user?.email} </MenuItem>
          <hr />
          <MenuItem
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box display="flex" width="100%">
              <Button onClick={Logout}>
                <PowerSettingsNewIcon sx={{ color: "red" }} />
                <Typography
                  sx={{ color: "red", fontSize: "10", marginLeft: "10px" }}
                >
                  KELUAR
                </Typography>
              </Button>
            </Box>
          </MenuItem>
        </Box>
      </Menu>
    </AppBar>
  );
};

export default NavbarUser;
