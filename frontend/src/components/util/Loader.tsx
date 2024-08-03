import { CircularProgress } from "@mui/material";

type LoaderProps = {
  size: number;
};

const Loader: React.FC<LoaderProps> = ({ size }) => {
  return <CircularProgress size={size} />;
};

export default Loader;
