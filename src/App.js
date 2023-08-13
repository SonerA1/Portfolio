
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles"
import { lightTheme } from "./components/Themes"
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/Main"
import AboutPage from "./components/AboutPage"
import CertificatePage from "./components/CertificatePage"
import ProjectPage from "./components/ProjectPage"
import SkillsPage from "./components/SkillsPage"
import { AnimatePresence } from "framer-motion";
import ContactPage from "./components/ContactPage";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" Component={Main} />
            <Route exact path="/about" Component={AboutPage} />
            <Route exact path="/certificate" Component={CertificatePage} />
            <Route exact path="/project" Component={ProjectPage} />
            <Route exact path="/skills" Component={SkillsPage} />
            <Route exact path="/contact" Component={ContactPage} />
          </Routes>
        </AnimatePresence>

      </ThemeProvider>
    </>
  );
}

export default App;
