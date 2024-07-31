import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shirts from "./pages/Shirts";
import Pants from "./pages/Pants";
import Jackets from "./pages/Jackets";
import Hats from "./pages/Hats";
import { createContext, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";

export const ColourModeContext = createContext({
  toggleColourMode: () => {},
});

const App: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode === "dark" ? "dark" : "light";
  });

  const colourMode = useMemo(
    () => ({
      toggleColourMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("themeMode", newMode);
          return newMode;
        });
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
          <ConditionalNavbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/hats" element={<Hats />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
};

const ConditionalNavbar: React.FC = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }

  return <Navbar />;
};

export default App;
