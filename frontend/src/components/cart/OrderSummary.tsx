import { Stack, Box, Typography, Divider, Button } from "@mui/material";

const OrderSummary: React.FC = () => {
  return (
    <Stack height="100%" p={2} justifyContent="center">
      <Box
        flexGrow={1}
        sx={{ display: "flex", gap: 1, flexDirection: "column" }}
      >
        <Typography variant="h4" gutterBottom>
          Order Summary
        </Typography>
        <Divider sx={{ width: "90%" }} />
        <Typography variant="h6">Items: 2</Typography>
      </Box>

      <Box mt={2} sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <Typography>Total: $159.00</Typography>
        <Button variant="contained">Checkout</Button>
      </Box>
    </Stack>
  );
};

export default OrderSummary;
