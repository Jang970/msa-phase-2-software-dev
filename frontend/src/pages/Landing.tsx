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
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <Typography
        sx={{
          typography: {
            xs: "h3",
            md: "h1",
          },
        }}
      >
        StyloSpotter
      </Typography>
      {isRegister ? (
        <Register handleBack={handleClick} />
      ) : (
        <Login handleBack={handleClick} />
      )}
    </Stack>
  );
};

export default Landing;
