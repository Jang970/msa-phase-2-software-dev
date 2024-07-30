import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Quantity from "./Quantity";
import DeleteIcon from "@mui/icons-material/Delete";
import { grey } from "@mui/material/colors";

const CartItemCard: React.FC = () => {
  const theme = useTheme();

  const backgroundColor = theme.palette.mode === "light" ? grey[50] : grey[900];

  return (
    <Card sx={{ mt: 2, backgroundColor }}>
      <CardContent>
        <Box display="flex" flexDirection="row" gap={2}>
          <CardMedia
            component="img"
            src="https://via.placeholder.com/100"
            sx={{ height: { xs: 75, md: 100 }, width: { xs: 75, md: 100 } }}
          />
          <Box>
            <Typography variant="h6">Product Name</Typography>
            <Typography variant="body2">$100</Typography>
            <Box display="flex">
              <Quantity />
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItemCard;
