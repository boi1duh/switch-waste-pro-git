import React, { useState, Suspense, useCallback, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from "./components/Header";
import Footer from "./Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import BackToTopButton from "./components/ui/BackToTopButton";
import { INDUSTRIES_DATA, SERVICE_MENU_ITEMS } from "./constants/appData";

// Lazy load all page components for code splitting
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Clients = lazy(() => import("./pages/Clients"));
const Search = lazy(() => import("./pages/Search"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Policies = lazy(() => import("./pages/Policies"));
const CommercialBusinesses = lazy(() => import("./pages/CommercialBusinesses"));
const ComplianceConsulting = lazy(() => import("./pages/ComplianceConsulting"));
const ComplianceTraining = lazy(() => import("./pages/ComplianceTraining"));
const DocumentShredding = lazy(() => import("./pages/DocumentShredding"));
const GeneralWaste = lazy(() => import("./pages/GeneralWaste"));
const HazardousWaste = lazy(() => import("./pages/HazardousWaste"));
const HealthcareFacilities = lazy(() => import("./pages/HealthcareFacilities"));
const IncinerationTreatment = lazy(() => import("./pages/IncinerationTreatment"));
const MedicalWaste = lazy(() => import("./pages/MedicalWaste"));
const PathologicalWaste = lazy(() => import("./pages/PathologicalWaste"));
const PharmaceuticalWaste = lazy(() => import("./pages/PharmaceuticalWaste"));
const Residential = lazy(() => import("./pages/Residential"));
const UniversalWaste = lazy(() => import("./pages/UniversalWaste"));
const ControlledSubstanceWaste = lazy(() => import("./pages/ControlledSubstanceWaste"));
const WasteCollection = lazy(() => import("./pages/WasteCollection"));

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
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/search" element={<Search />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/commercial-businesses" element={<CommercialBusinesses />} />
                <Route path="/compliance-consulting" element={<ComplianceConsulting />} />
                <Route path="/compliance-training" element={<ComplianceTraining />} />
                <Route path="/document-shredding" element={<DocumentShredding />} />
                <Route path="/general-waste" element={<GeneralWaste />} />
                <Route path="/hazardous-waste" element={<HazardousWaste />} />
                <Route path="/healthcare-providers" element={<HealthcareFacilities />} />
                <Route path="/healthcare-facilities" element={<HealthcareFacilities />} />
                <Route path="/incineration-treatment" element={<IncinerationTreatment />} />
                <Route path="/medical-waste" element={<MedicalWaste />} />
                <Route path="/pathological-waste" element={<PathologicalWaste />} />
                <Route path="/pharmaceutical-waste" element={<PharmaceuticalWaste />} />
                <Route path="/residential" element={<Residential />} />
                <Route path="/universal-waste" element={<UniversalWaste />} />
                <Route path="/controlled-substance-waste" element={<ControlledSubstanceWaste />} />
                <Route path="/waste-collection" element={<WasteCollection />} />
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