import { TextField, Typography } from "@mui/material";
import LandingCards from "./LandingCards";
import LandingButtons from "./LandingButtons";
import { useUserStore } from "../../stores/userStore";
import { useState } from "react";
import Error from "../Error";

type LoginProps = {
  handleBack: () => void;
};

const Login: React.FC<LoginProps> = ({ handleBack }) => {
  const [username, setUsername] = useState("");
  const fetchUser = useUserStore((state) => state.fetchUser);
  const error = useUserStore((state) => state.error);

  const handleLogin = () => {
    if (username) {
      fetchUser(username);
      setUsername("");
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
        Login
      </Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
      />
      <LandingButtons text="Login" onClick={handleLogin} />
      <LandingButtons text="Create an Account" onClick={() => handleBack()} />
      {error && <Error text={error} />}
    </LandingCards>
  );
};

export default Login;
