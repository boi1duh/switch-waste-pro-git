import React, { Suspense, lazy, useMemo, useEffect, memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import { fixGitHubPagesRouting } from './utils/githubPages';
import { AppProvider, useApp } from './context/AppContext';
import { ROUTE_CONFIG, getRouteComponent } from './config/routing';
import PageLoader from './components/PageLoader';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import type { AppState, RouteConfig, ServicesProps } from './types';

// Lazy load NotFound for fallback
const NotFound = lazy(() => import("./pages/NotFound"));

// AppContent component - the main app logic
const AppContent = memo(() => {
  const { state: { menu: { isOpen, activeMegaMenu }, services, industries }, actions: { toggleMenu, setActiveMegaMenu } } = useApp() as { state: AppState; actions: any };

  // Fix GitHub Pages routing on mount
  useEffect(() => {
    fixGitHubPagesRouting();
  }, []);

  const toggleMegaMenu = useMemo(() => (menu: string | null) => {
    setActiveMegaMenu((prev: string | null) => prev === menu ? null : menu);
  }, [setActiveMegaMenu]);

  const serviceMenuItems = useMemo(() => services.map((s: { title: string }) => s.title), [services]);

  const renderRoute = useMemo(() => (routeElement: React.ReactElement<ServicesProps>) => {
    return React.cloneElement(routeElement, { services, industries });
  }, [services, industries]);

  return (
    <div className="min-h-screen bg-white">
      <Header
        isMenuOpen={isOpen}
        toggleMenu={toggleMenu}
        activeMegaMenu={activeMegaMenu}
        toggleMegaMenu={toggleMegaMenu}
        setActiveMegaMenu={setActiveMegaMenu}
        serviceMenuItems={serviceMenuItems}
        industries={industries}
      />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {ROUTE_CONFIG.map(({ path, component: componentName, exact }: RouteConfig) => {
            const Component = getRouteComponent(componentName);
            return (
              <Route
                key={path}
                path={path}
                index={exact}
                element={renderRoute(<Component />)}
              />
            );
          })}
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
});

AppContent.displayName = 'AppContent';

// AppWithProviders - wraps all providers
const AppWithProviders = () => (
  <HelmetProvider>
    <Router basename={process.env.PUBLIC_URL}>
      <AppContent />
    </Router>
  </HelmetProvider>
);

// Main App component with ErrorBoundary and AppProvider
const App = memo(() => (
  <AppProvider>
    <ErrorBoundary>
      <AppWithProviders />
    </ErrorBoundary>
  </AppProvider>
));

App.displayName = 'App';

export default App;