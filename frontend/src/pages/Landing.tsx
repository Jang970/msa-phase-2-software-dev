import { Stack, Typography } from "@mui/material";
import Login from "../components/landing/Login";
import Register from "../components/landing/Register";
import { useState } from "react";

const Landing: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleClick = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        mt: 4,
      }}
    >
      <Typography variant="h1">StyloSpotter</Typography>
      {isRegister ? (
        <Register handleBack={handleClick} />
      ) : (
        <Login handleBack={handleClick} />
      )}
    </Stack>
  );
};

export default Landing;
