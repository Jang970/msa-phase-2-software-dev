import { Card, CardContent } from "@mui/material";
import { indigo } from "@mui/material/colors";

const LandingCards = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Card
      sx={{
        backgroundColor: indigo[400],
        minWidth: { xs: 350, md: 700 },
        p: 2,
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {children}
      </CardContent>
    </Card>
  );
};

export default LandingCards;
