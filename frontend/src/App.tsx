import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shirts from "./pages/Shirts";
import Pants from "./pages/Pants";
import Jackets from "./pages/Jackets";
import Hats from "./pages/Hats";
import Register from "./pages/Register";
import { createContext, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import NotFound from "./pages/NotFound";

export const ColourModeContext = createContext({
  toggleColourMode: () => {},
});

const App: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colourMode = useMemo(
    () => ({
      toggleColourMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/hats" element={<Hats />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
};

export default App;
