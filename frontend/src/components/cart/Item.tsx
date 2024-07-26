import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const Item: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <img
        src="https://via.placeholder.com/100"
        alt="Item"
        style={{ width: 100, height: 100 }}
      />
      <Stack alignItems="center">
        <Typography>name</Typography>
        <Button>Remove</Button>
      </Stack>
    </Box>
  );
};

export default Item;
