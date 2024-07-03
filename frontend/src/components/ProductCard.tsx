import { Box, Button, Stack, Typography } from "@mui/material";

// todo: will be dynamic and accept props
const ProductCard: React.FC = () => {
  return (
    <Stack
      bgcolor="tomato"
      alignItems="center"
      spacing={1}
      p={3}
      borderRadius="0.75rem"
    >
      <Typography variant="h4">Product Name</Typography>

      <Box>
        <img src="https://via.placeholder.com/175" alt="product" />
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        gap={1}
      >
        <Button variant="contained" sx={{ width: "40%" }} size="small">
          View
        </Button>
        <Typography variant="h6">$9.99</Typography>
        <Button variant="contained" sx={{ width: "50%" }} size="small">
          Add
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
