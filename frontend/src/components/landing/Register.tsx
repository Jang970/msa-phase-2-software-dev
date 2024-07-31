import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LandingCards from "./LandingCards";
import LandingButtons from "./LandingButtons";
import { useUserStore } from "../../stores/userStore";
import Error from "../Error";

type RegisterProps = {
  handleBack: () => void;
};

const Register: React.FC<RegisterProps> = ({ handleBack }) => {
  const createUser = useUserStore((state) => state.createUser);
  const error = useUserStore((state) => state.error);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleCreateUser = () => {
    if (username && firstName) {
      createUser({ id: 0, username, firstName });
      setUsername("");
      setFirstName("");
    }
  };

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
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
      />
      <TextField
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        fullWidth
      />
      <LandingButtons text="Register" onClick={handleCreateUser} />
      <LandingButtons text="Login" onClick={() => handleBack()} />
      {error && <Error text={error} />}
    </LandingCards>
  );
};

export default Register;
