import { useState } from "react";
import { SnackbarCloseReason } from "@mui/material";

const useSnackbar = (initialState: boolean = false) => {
  const [open, setOpen] = useState(initialState);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return { open, handleOpen, handleClose };
};

export default useSnackbar;
