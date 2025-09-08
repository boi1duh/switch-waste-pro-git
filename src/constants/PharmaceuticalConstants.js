// Common styles for PharmaceuticalWaste page
export const STYLES = {
  heroSection: "relative min-h-screen flex items-center overflow-hidden",
  overlay: "absolute inset-0 bg-black bg-opacity-30",
  container: "container mx-auto px-4 py-16 md:py-24 relative z-10",
  grid: "grid md:grid-cols-2 gap-12 items-center min-h-[70vh]",
  card: "bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white border-opacity-20 shadow-2xl",
  heading: "text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg",
  subheading: "text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-lg",
  paragraph: "text-lg md:text-xl text-white mb-10 drop-shadow-md leading-relaxed max-w-2xl opacity-95",
  buttonContainer: "flex flex-col sm:flex-row gap-6",
  primaryButton: "bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center text-lg",
  secondaryButton: "border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center text-lg",
  servicesCard: "bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg border border-white border-opacity-20",
  servicesHeading: "font-bold text-white mb-6 text-2xl drop-shadow-lg",
  servicesGrid: "grid grid-cols-1 gap-4",
  serviceItem: "flex items-center gap-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm",
  icon: "text-green-400 text-2xl",
  serviceLabel: "text-white text-lg font-medium drop-shadow-md",
  contentSection: "py-16 bg-white",
  contentContainer: "max-w-4xl mx-auto",
  contentHeading: "text-3xl font-bold text-gray-800 mb-8 text-center",
  contentGrid: "grid md:grid-cols-2 gap-8 mb-12",
  contentCard: "bg-gray-50 p-6 rounded-xl",
  contentCardHeading: "text-xl font-bold text-gray-800 mb-4",
  contentCardParagraph: "text-gray-600 mb-4",
  contentList: "text-gray-600 space-y-2",
  contentListItem: "text-gray-600",
  ctaButton: "bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block",
  centerText: "text-center",
};

// Background image URL
export const BACKGROUND_IMAGE_URL = '/assets/backgrounds/Index.Hero.jpg';

// Fallback background
export const FALLBACK_BACKGROUND = "linear-gradient(to right, #667eea 0%, #764ba2 100%)";