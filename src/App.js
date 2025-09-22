import React, { useState, Suspense, useCallback, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from "./components/Header";
import Footer from "./Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import BackToTopButton from "./components/ui/BackToTopButton";
import { routeConfig } from "./routes/routeConfig";
import { INDUSTRIES_DATA, SERVICE_MENU_ITEMS } from "./constants/appData";

// Lazy load all page components for code splitting
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));

// --- UI Components (Extracted for better organization) ---

/**
 * A skeleton loader component to be displayed while pages are being lazy-loaded.
 * For better organization, this should be in its own file: `src/components/ui/PageLoader.js`
 */
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

// --- Main Application Component ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const toggleMegaMenu = useCallback((menu) => {
    setActiveMegaMenu(prev => prev === menu ? null : menu);
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="min-h-screen bg-white">
            <Header
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}
              activeMegaMenu={activeMegaMenu}
              toggleMegaMenu={toggleMegaMenu}
              setActiveMegaMenu={setActiveMegaMenu}
              serviceMenuItems={SERVICE_MENU_ITEMS}
              industries={INDUSTRIES_DATA}
            />

            <Suspense fallback={<PageLoader />}>
              <Routes>
                {routeConfig.map(({ path, component: Component }) => (
                  <Route 
                    key={path} 
                    path={path} 
                    element={<Component />} />
                ))}
                {/* Add other routes not in the main config */}
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>

            <Footer />
            <BackToTopButton />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;