import { TextField, Typography } from "@mui/material";
import React from "react";
import LandingCards from "./LandingCards";
import LandingButtons from "./LandingButtons";

type RegisterProps = {
  handleBack: () => void;
};

const Register: React.FC<RegisterProps> = ({ handleBack }) => {
  return (
    <LandingCards>
      <Typography
        sx={{
          typography: {
            xs: "h5",
            md: "h4",
          },
        }}
        color="white"
      >
        Register
      </Typography>
      <TextField label="Username" fullWidth />
      <TextField label="First Name" fullWidth />
      <LandingButtons text="Register" onClick={() => handleBack()} />
      <LandingButtons text="Login" onClick={() => handleBack()} />
    </LandingCards>
  );
};

export default Register;
