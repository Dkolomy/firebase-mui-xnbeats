import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import * as api from "../api";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../state/authorization/authSlice";

const pages = ["Home", "Contact"];
const authorization = ["Login", "Profile", "Logout"];

const Header = () => {
  const isAuth = useSelector((state) => state.authUser.isAuth);
//  console.log(isAuth)
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    api.logoutUser().then((result) => {
      dispatch(logoutUser(result));
    });
    handleCloseUserMenu();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="x1">
          <Toolbar disableGutters>
            {/* <Link to={"/"} style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "black" }} variant="h6" component="a">
                XN
              </Typography>
              <Typography sx={{ color: "red" }} variant="h6" component="a">
                B
              </Typography>
            </Link> */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    component={Link}
                    to={`/${page}`}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page}`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  // aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {!isAuth && (
                  <MenuItem
                    key={authorization[0]}
                    component={Link}
                    to={`/${authorization[0]}`}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">
                      {authorization[0]}
                    </Typography>
                  </MenuItem>
                )}{" "}
                {isAuth && (
                  <MenuItem
                    key={authorization[1]}
                    component={Link}
                    to={`/${authorization[1]}`}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">
                      {authorization[1]}
                    </Typography>
                  </MenuItem>
                )}
                {isAuth && (
                  <MenuItem
                    key={authorization[2]}
                    component={Link}
                    to={`/${authorization[2]}`}
                    onClick={handleLogout}
                  >
                    <Typography textAlign="center">
                      {authorization[2]}
                    </Typography>
                  </MenuItem>
                )}
                {/* {authorization.map((setting) => (
                  <MenuItem
                    key={setting}
                    component={Link}
                    to={`/${setting}`}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
