import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { theme } from "./components/styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Store } from "./pages/Store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
