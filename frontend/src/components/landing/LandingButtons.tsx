import { Button } from "@mui/material";
import { indigo, grey } from "@mui/material/colors";
import { useUserStore } from "../../stores/userStore";

type LandingButtonsProps = {
  text: string;
  onClick: () => void;
};

const LandingButtons: React.FC<LandingButtonsProps> = ({ text, onClick }) => {
  const loading = useUserStore((state) => state.loading);
  return (
    <Button
      fullWidth
      sx={{
        borderColor: indigo[200],
        border: 1,
        color: indigo[400],
        backgroundColor: indigo[50],
        "&:hover": { backgroundColor: grey[400] },
      }}
      onClick={() => onClick()}
    >
      {loading ? "Loading..." : text}
    </Button>
  );
};

export default LandingButtons;
