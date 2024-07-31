import { Button } from "@mui/material";
import { indigo, grey } from "@mui/material/colors";

type LandingButtonsProps = {
  text: string;
  onClick: () => void;
};

const LandingButtons: React.FC<LandingButtonsProps> = ({ text, onClick }) => {
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
      {text}
    </Button>
  );
};

export default LandingButtons;
