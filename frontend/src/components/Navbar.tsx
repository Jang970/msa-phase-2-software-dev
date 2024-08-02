import {
  AppBar,
  Autocomplete,
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
import { useContext, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useProductStore } from "../stores/productStore";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const pages = ["home", "shirts", "pants", "jackets", "hats"];
  const products = useProductStore((state) => state.products);

  const theme = useTheme();
  const colourMode = useContext(ColourModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [searchValue, setSearchValue] = useState("");

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleSearchChange = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    if (value) {
      const selectedProduct = products.find(
        (product) => product.name === value
      );
      if (selectedProduct) {
        setSearchValue("");
        navigate(`/products/${selectedProduct.id}`);
      }
    }
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<{}>,
    value: string
  ) => {
    setSearchValue(value);
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
            options={products.map((product) => product.name)}
            onChange={handleSearchChange}
            onInputChange={handleSearchInputChange}
            value={searchValue}
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
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
