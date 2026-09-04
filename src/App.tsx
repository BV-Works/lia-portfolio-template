import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Index from "./pages/Index";
import Filmes from "./pages/Filmes";
import OtrosProyectos from "./pages/OtrosProyectos";
import Bio from "./pages/About";
import Contacto from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />

        {/* Filmes */}
        <Route
          path="/filmes"
          element={
            <PageTransition>
              <Filmes />
            </PageTransition>
          }
        />

        {/* Otros proyectos */}
        <Route
          path="/otros-proyectos"
          element={
            <PageTransition>
              <OtrosProyectos />
            </PageTransition>
          }
        />

        {/* Bio */}
        <Route
          path="/bio"
          element={
            <PageTransition>
              <Bio />
            </PageTransition>
          }
        />

        {/* Contacto */}
        <Route
          path="/contacto"
          element={
            <PageTransition>
              <Contacto />
            </PageTransition>
          }
        />

        {/* Project detail */}
        <Route
          path="/work/:slug"
          element={
            <PageTransition>
              <ProjectDetail />
            </PageTransition>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
