import { TextField, Typography } from "@mui/material";
import LandingCards from "./LandingCards";
import LandingButtons from "./LandingButtons";

type LoginProps = {
  handleBack: () => void;
};

const Login: React.FC<LoginProps> = ({ handleBack }) => {
  return (
    <LandingCards>
      <Typography variant="h4" color="white">
        Login
      </Typography>
      <TextField label="Username" fullWidth />
      <LandingButtons text="Login" onClick={() => handleBack()} />
      <LandingButtons text="Create an Account" onClick={() => handleBack()} />
    </LandingCards>
  );
};

export default Login;
