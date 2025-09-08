import React, { Suspense } from "react";

// Lazy load components for better performance
const HeroSection = React.lazy(() => import("../components/wasteCollection/HeroSection"));
const RegulatoryOverview = React.lazy(() => import("../components/wasteCollection/RegulatoryOverview"));
const ServicesSection = React.lazy(() => import("../components/wasteCollection/ServicesSection"));
const FleetSection = React.lazy(() => import("../components/wasteCollection/FleetSection"));
const CTASection = React.lazy(() => import("../components/wasteCollection/CTASection"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex justify-center items-center py-16">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Error boundary for handling component errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('WasteCollection component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-16 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
          <p className="text-gray-600">Please try refreshing the page or contact support if the problem persists.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const WasteCollection = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
        <RegulatoryOverview />
        <ServicesSection />
        <FleetSection />
        <CTASection />
      </Suspense>
    </ErrorBoundary>
  );
};

export default WasteCollection;