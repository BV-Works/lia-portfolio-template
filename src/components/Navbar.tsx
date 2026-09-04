import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Filmes", path: "/filmes" },
  { name: "Otros Proyectos", path: "/otros-proyectos" },
  { name: "Bio", path: "/bio" },
  { name: "Contacto", path: "/contacto" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  // Detect when the user starts scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when the route changes.
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!isMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  // The header is transparent only when at the top
  // and the mobile menu is closed.
  const isTransparent = !isScrolled && !isMenuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b",
          "transition-[background-color,color,border-color] duration-300 ease-out",
          isTransparent
            ? "border-transparent bg-transparent"
            : "border-black/5 bg-white",
        )}
      >
        <nav
          aria-label="Navegación principal"
          className="px-6 md:px-12 lg:px-16"
        >
          <div className="flex items-center justify-between py-4">
            {/* Site identity */}
            <Link
              to="/"
              onClick={closeMenu}
              aria-label="LIA LUGILDE — inicio"
              className={cn(
                "font-logo text-xl font-semibold tracking-tight",
                "transition-colors duration-300",
                isTransparent ? "text-white" : "text-foreground",
                "hover:opacity-70",
                "focus-visible:outline-none focus-visible:ring-2",
                isTransparent
                  ? "focus-visible:ring-white"
                  : "focus-visible:ring-foreground",
                "focus-visible:ring-offset-4",
                isTransparent
                  ? "focus-visible:ring-offset-transparent"
                  : "focus-visible:ring-offset-white",
              )}
            >
              LIA LUGILDE
            </Link>

            {/* Desktop navigation */}
            <ul className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "font-sans text-base font-medium",
                        "transition-colors duration-300",
                        isTransparent ? "text-white" : "text-foreground",
                        "hover:opacity-60",
                        "focus-visible:outline-none focus-visible:ring-2",
                        isTransparent
                          ? "focus-visible:ring-white"
                          : "focus-visible:ring-foreground",
                        "focus-visible:ring-offset-4",
                        isTransparent
                          ? "focus-visible:ring-offset-transparent"
                          : "focus-visible:ring-offset-white",
                        isActive && "opacity-60",
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
              className={cn(
                "flex h-10 w-10 items-center justify-center md:hidden",
                "transition-colors duration-300",
                isTransparent ? "text-white" : "text-foreground",
                "hover:opacity-60",
                "focus-visible:outline-none focus-visible:ring-2",
                isTransparent
                  ? "focus-visible:ring-white"
                  : "focus-visible:ring-foreground",
                "focus-visible:ring-offset-2",
                isTransparent
                  ? "focus-visible:ring-offset-transparent"
                  : "focus-visible:ring-offset-white",
              )}
            >
              {isMenuOpen ? (
                <X size={24} strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <Menu size={24} strokeWidth={1.5} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <nav
              aria-label="Navegación móvil"
              className="flex h-full items-center justify-center px-6"
            >
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;

                  return (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "font-serif text-4xl font-semibold",
                          "transition-opacity hover:opacity-60",
                          "focus-visible:outline-none focus-visible:ring-2",
                          "focus-visible:ring-foreground",
                          "focus-visible:ring-offset-4",
                          "focus-visible:ring-offset-white",
                          isActive ? "opacity-60" : "opacity-100",
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
