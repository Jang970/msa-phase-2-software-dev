import {
  AppBar,
  Autocomplete,
  Badge,
  Box,
  IconButton,
  Link,
  TextField,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ColourModeContext } from "../App";
import { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";

//todo: add links to shirts, pants, jackets, hats products
//todo: search bar
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const pages = ["home", "shirts", "pants", "jackets", "hats"];

  const theme = useTheme();
  const colourMode = useContext(ColourModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <AppBar enableColorOnDark sx={{ position: { xs: "fixed", md: "static" } }}>
      <Toolbar>
        {isMobile ? (
          <IconButton onClick={() => handleNavigation("/home")} color="inherit">
            <HomeIcon />
          </IconButton>
        ) : (
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                href={`/${page}`}
                underline="none"
                color="inherit"
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            ))}
          </Box>
        )}
        <Box flexGrow={1} ml={2}>
          <Autocomplete
            freeSolo
            size="small"
            options={pages}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: "search" }}
                sx={{
                  "& fieldset": { borderRadius: "1rem" },
                  marginRight: 2,
                }}
              />
            )}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: 2 }}>
          <IconButton onClick={colourMode.toggleColourMode} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton color="inherit" onClick={() => handleNavigation("/cart")}>
            <Badge badgeContent={0} color="secondary" showZero>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
