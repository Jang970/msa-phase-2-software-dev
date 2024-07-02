import { Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <Stack direction="column" alignItems="center" gap={4}>
      <Typography variant="h1">Registration</Typography>
      <Stack bgcolor="beige" width="50%" gap={3} p={6} borderRadius="0.5rem">
        <TextField label="Email" size="small" type="email" required />
        <TextField label="Password" size="small" type="password" required />
        <TextField
          label="Confirm Password"
          size="small"
          type="password"
          required
        />
        <Button variant="contained" fullWidth>
          Register
        </Button>
        <Link to="/">
          <Button variant="contained" fullWidth>
            Back
          </Button>
        </Link>
        {
          // add error text here
        }
      </Stack>
    </Stack>
  );
};

export default Register;
