import { TextField, Typography } from "@mui/material";
import LandingCards from "./LandingCards";
import LandingButtons from "./LandingButtons";
import { useUserStore } from "../../stores/userStore";
import { useState } from "react";
import Error from "../util/Error";

type UserFormProps = {
  handleBack: () => void;
  isLogin: boolean;
};

const UserForm: React.FC<UserFormProps> = ({ handleBack, isLogin }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const error = useUserStore((state) => state.error);
  const fetchUser = useUserStore((state) => state.fetchUser);
  const createUser = useUserStore((state) => state.createUser);

  const handleSubmit = () => {
    if (username) {
      if (isLogin) {
        fetchUser(username);
      } else {
        createUser({ id: 0, username, firstName });
      }
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
        {isLogin ? "Login" : "Register"}
      </Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
      />
      {!isLogin && (
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
        />
      )}
      <LandingButtons
        text={isLogin ? "Login" : "Register"}
        onClick={handleSubmit}
      />
      <LandingButtons
        text={isLogin ? "Create an Account" : "Login"}
        onClick={handleBack}
      />
      {error && <Error text={error} />}
    </LandingCards>
  );
};

export default UserForm;
