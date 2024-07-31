import { createTheme } from "@mui/material";
import { grey, indigo } from "@mui/material/colors";

const generalComponentStyles = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: grey[400],
        },
        color: "white",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        "&.Mui-focused": {
          color: "white",
        },
        color: "white",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "1rem",
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: grey[200],
    },
    primary: {
      main: indigo[400],
    },
    secondary: {
      main: "#dc004e",
    },
  },
  components: {
    ...generalComponentStyles,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: indigo[400],
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  components: {
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: indigo[400],
    //     },
    //   },
    // },
    ...generalComponentStyles,
  },
});
