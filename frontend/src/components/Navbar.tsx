import { Box, Link, Stack, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

//todo: add links to shirts, pants, jackets, hats products
//todo: search bar
const Navbar: React.FC = () => {
  const location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <Stack direction="row" gap={2} justifyContent="space-around">
      <NavLink to="/home">Home</NavLink>
      <Link href="/product">Product</Link>
      <Box>
        <Typography variant="h6">Search bar here</Typography>
      </Box>
      <Link href="/profile">Profile</Link>
      <Link href="/cart">Cart</Link>
    </Stack>
  );
};

export default Navbar;
