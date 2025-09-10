import React, { useState, Suspense, lazy, useMemo, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load all page components for code splitting
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Clients = lazy(() => import("./pages/Clients"));
const MedicalWaste = lazy(() => import("./pages/MedicalWaste"));
const PharmaceuticalWaste = lazy(() => import("./pages/PharmaceuticalWaste"));
const GeneralWaste = lazy(() => import("./pages/GeneralWaste"));
const HazardousWaste = lazy(() => import("./pages/HazardousWaste"));
const WasteCollection = lazy(() => import("./pages/WasteCollection"));
const ComplianceConsulting = lazy(() => import("./pages/ComplianceConsulting"));
const HealthcareFacilities = lazy(() => import("./pages/HealthcareFacilities"));
const CommercialBusinesses = lazy(() => import("./pages/CommercialBusinesses"));
const Residential = lazy(() => import("./pages/Residential"));
const UniversalWaste = lazy(() => import("./pages/UniversalWaste"));
const ControlledSubstanceWaste = lazy(() => import("./pages/ControlledSubstanceWaste"));
const IncinerationTreatment = lazy(() => import("./pages/IncinerationTreatment"));
const PathologicalWaste = lazy(() => import("./pages/PathologicalWaste"));
const DocumentShredding = lazy(() => import("./pages/DocumentShredding"));
const ComplianceTraining = lazy(() => import("./pages/ComplianceTraining"));
const Products = lazy(() => import("./pages/Products"));
const Policies = lazy(() => import("./pages/Policies"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  // Handle GitHub Pages routing
  if (window.location.pathname !== '/' && window.location.pathname !== '/switch-waste-Pro') {
    window.history.replaceState(null, '', '/switch-waste-Pro' + window.location.pathname);
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const toggleMegaMenu = useCallback((menu) => {
    setActiveMegaMenu(prev => prev === menu ? null : menu);
  }, []);

  // Background styling removed - using default body styling

  const services = useMemo(() => [
    {
      title: "Healthcare Risk Waste",
      description: "Complete regulated medical waste solutions for healthcare facilities",
      icon: "🏥",
    },
    {
      title: "Pharmaceutical Waste",
      description: "Safe disposal of expired, unused, and contaminated medications",
      icon: "💊",
    },
    {
      title: "General Waste & Recycling",
      description: "Comprehensive recycling solutions for paper, glass, plastic & cans",
      icon: "♻️",
    },
  ], []);

  const industries = useMemo(() => [
    { name: "Healthcare Providers", items: ["Hospitals", "Clinics", "Medical Practices", "Laboratories"] },
    { name: "Commercial Businesses", items: ["Office Buildings", "Retail", "Industrial Facilities", "Educational Institutions"] },
    { name: "Residential", items: ["Housing Complexes", "Apartment Buildings", "Suburban Communities"] },
  ], []);

  const serviceMenuItems = [
    "Regulated Medical Waste",
    "Pharmaceutical Waste",
    "Hazardous Waste",
    "Universal Waste",
    "Controlled Substance Waste",
    "Pathological & Chemotherapeutic Waste",
    "Incineration & Treatment",
    "Document Shredding",
    "Compliance & Training",
  ];

  // Loading component for Suspense fallback
  const PageLoader = () => {
    return (
      <div className="min-h-screen bg-white">
        {/* Header skeleton */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="space-y-2">
                  <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-24 h-3 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="hidden md:flex space-x-8">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i} className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Main content skeleton */}
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* Hero section skeleton */}
            <div className="min-h-[60vh] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-96 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-80 h-6 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-64 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
  
            {/* Content sections skeleton */}
            <div className="grid md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Header
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}
              activeMegaMenu={activeMegaMenu}
              toggleMegaMenu={toggleMegaMenu}
              setActiveMegaMenu={setActiveMegaMenu}
              serviceMenuItems={serviceMenuItems}
              industries={industries}
            />

            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home services={services} industries={industries} />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/medical-waste" element={<MedicalWaste />} />
                <Route path="/pharmaceutical-waste" element={<PharmaceuticalWaste />} />
                <Route path="/general-waste" element={<GeneralWaste />} />
                <Route path="/hazardous-waste" element={<HazardousWaste />} />
                <Route path="/waste-collection" element={<WasteCollection />} />
                <Route path="/compliance-consulting" element={<ComplianceConsulting />} />
                <Route path="/healthcare-facilities" element={<HealthcareFacilities />} />
                <Route path="/commercial-businesses" element={<CommercialBusinesses />} />
                <Route path="/residential" element={<Residential />} />
                <Route path="/universal-waste" element={<UniversalWaste />} />
                <Route path="/controlled-substance-waste" element={<ControlledSubstanceWaste />} />
                <Route path="/incineration-treatment" element={<IncinerationTreatment />} />
                <Route path="/pathological-waste" element={<PathologicalWaste />} />
                <Route path="/document-shredding" element={<DocumentShredding />} />
                <Route path="/compliance-training" element={<ComplianceTraining />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>

            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;