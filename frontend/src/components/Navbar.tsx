import {
  Autocomplete,
  Badge,
  Box,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLocation } from "react-router-dom";

//todo: add links to shirts, pants, jackets, hats products
//todo: search bar
const Navbar: React.FC = () => {
  const location = useLocation();
  const categories = ["shirts", "pants", "jackets", "hats"];

  if (location.pathname === "/" || location.pathname === "/register")
    return null;

  return (
    <Stack
      direction="row"
      gap={2}
      justifyContent="space-around"
      alignItems="center"
      bgcolor="tomato"
      width="100%"
      py={1}
    >
      <Link href="/home">Home</Link>
      {categories.map((category) => (
        <Box key={category}>
          <Link href={`/${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        </Box>
      ))}
      <Autocomplete
        freeSolo
        size="small"
        options={["shirts", "pants", "jackets", "hats"]} // this will be all the products in the database
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
        sx={{
          flexGrow: 1,
          maxWidth: "40rem",
          "& fieldset": { borderRadius: "1rem" },
        }}
      />
      <Link href="/profile">
        <AccountCircleIcon sx={{ width: 30, height: 30 }} />
      </Link>
      <Link href="/cart">
        <Badge badgeContent={0} color="secondary" showZero>
          <ShoppingCartIcon sx={{ width: 30, height: 30 }} />
        </Badge>
      </Link>
    </Stack>
  );
};

export default Navbar;
