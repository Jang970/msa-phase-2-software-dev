import {
  AppBar,
  Autocomplete,
  Badge,
  Box,
  IconButton,
  Link,
  TextField,
  Toolbar,
  useTheme,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLocation, useNavigate } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ColourModeContext } from "../App";
import { useContext } from "react";

//todo: add links to shirts, pants, jackets, hats products
//todo: search bar
const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const categories = ["shirts", "pants", "jackets", "hats"];

  const theme = useTheme();
  const colourMode = useContext(ColourModeContext);

  if (location.pathname === "/" || location.pathname === "/register")
    return null;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Box
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 5 }}
        >
          <Link href="/home" underline="none" color="inherit">
            Home
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/${category}`}
              underline="none"
              color="inherit"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          ))}
        </Box>
        <Box flexGrow={1}>
          <Autocomplete
            freeSolo
            size="small"
            options={categories}
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
          <IconButton
            color="inherit"
            onClick={() => handleNavigation("/profile")}
          >
            <AccountCircleIcon />
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
