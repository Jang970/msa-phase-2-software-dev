import { Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

//todo: this will contain the sign up and login components
const Landing: React.FC = () => {
  return (
    <Stack direction="column" alignItems="center" gap={4}>
      <Typography variant="h1">App Name Here</Typography>
      <Stack bgcolor="beige" width="50%" gap={3} p={6} borderRadius="0.5rem">
        <TextField label="Email" size="small" type="email" required />
        <TextField label="Password" size="small" type="password" required />
        <Stack direction="row" gap={2}>
          <Button variant="contained" sx={{ width: "50%" }}>
            Sign In
          </Button>
          <Link to="/register" style={{ width: "50%" }}>
            <Button variant="contained" fullWidth>
              Register
            </Button>
          </Link>
          {
            // add error text here
          }
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Landing;
