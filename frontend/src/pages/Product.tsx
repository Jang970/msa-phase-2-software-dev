import { Box, Button, Stack, Typography } from "@mui/material";

//todo: dynamic
const Product: React.FC = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt={6}
    >
      <Box
        bgcolor="tomato"
        width="70%"
        height="100%"
        p={4}
        borderRadius="0.75rem"
      >
        <Stack direction="row" gap={2}>
          <Box width="50%">
            <img
              src="https://via.placeholder.com/400"
              alt="product"
              width="100%"
              height="100%"
            />
          </Box>
          <Box height="100%" width="50%">
            <Stack direction="column" gap={2} p={2}>
              <Typography variant="h4">Product Name</Typography>
              <Typography variant="h5">Price: $5</Typography>
              <Typography variant="body1">Size: S</Typography>
              <Stack direction="column" gap={1}>
                <Typography variant="h6">Overview</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Stack>
              <Button variant="contained" size="small">
                Add to Cart
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Product;
