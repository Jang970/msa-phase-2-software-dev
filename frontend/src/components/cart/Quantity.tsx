import { Box, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Quantity: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" gap={1} justifyContent="center">
      <IconButton>
        <RemoveIcon />
      </IconButton>
      {
        // quantity should be dynamic
      }
      <Box>1</Box>
      <IconButton>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default Quantity;
