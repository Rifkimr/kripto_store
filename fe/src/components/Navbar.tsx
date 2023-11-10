import { Pets } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#ECECEC",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
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

const Navbar = () => {
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
        <Box sx={{ display: "flex", columnGap: "10px" }}>
          <Link to="/login">
            <Button variant="outlined">Masuk</Button>
          </Link>
          <Link to="/register">
            <Button variant="contained">Daftar</Button>
          </Link>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
