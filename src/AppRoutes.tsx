import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Index from "./pages/Index";
import Filmes from "./pages/Filmes";
import OtrosProyectos from "./pages/OtrosProyectos";
import Bio from "./pages/About";
import Contacto from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaCookies from "./pages/PoliticaCookies";
import Accesibilidad from "./pages/Accesibilidad";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import { useEffect, useState } from "react";
interface AnimatedRoutesProps {
  hasHydrated: boolean;
}
const AnimatedRoutes = ({ hasHydrated }: AnimatedRoutesProps) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <Index />
            </PageTransition>
          }
        />

        <Route
          path="/filmes"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <Filmes />
            </PageTransition>
          }
        />

        <Route
          path="/filmes/:slug"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <ProjectDetail />
            </PageTransition>
          }
        />

        <Route
          path="/otros-proyectos"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <OtrosProyectos />
            </PageTransition>
          }
        />

        <Route
          path="/otros-proyectos/:slug"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <ProjectDetail />
            </PageTransition>
          }
        />

        <Route
          path="/bio"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <Bio />
            </PageTransition>
          }
        />

        <Route
          path="/contacto"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <Contacto />
            </PageTransition>
          }
        />

        <Route
          path="/politica-de-privacidad"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <PoliticaPrivacidad />
            </PageTransition>
          }
        />

        <Route
          path="/aviso-legal"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <AvisoLegal />
            </PageTransition>
          }
        />

        <Route
          path="/politica-de-cookies"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <PoliticaCookies />
            </PageTransition>
          }
        />

        <Route
          path="/accesibilidad"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <Accesibilidad />
            </PageTransition>
          }
        />

        <Route
          path="*"
          element={
            <PageTransition hasHydrated={hasHydrated}>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const AppRoutes = () => {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes hasHydrated={hasHydrated} />
    </>
  );
};

export default AppRoutes;
