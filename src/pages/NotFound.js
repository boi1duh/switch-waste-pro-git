import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you&apos;re looking for doesn&apos;t exist. Return to Switch Waste Management Solutions homepage."
        canonical="/404"
      />
      <Helmet>
        <title>Page Not Found | Switch Waste Management Solutions</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="text-8xl mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Go to Homepage
            </Link>

            <div className="text-sm text-gray-500">
              <p>Or try these popular pages:</p>
              <div className="flex flex-col space-y-2 mt-4">
                <Link to="/services" className="text-blue-600 hover:text-blue-800">
                  Our Services
                </Link>
                <Link to="/contact" className="text-blue-600 hover:text-blue-800">
                  Contact Us
                </Link>
                <Link to="/about" className="text-blue-600 hover:text-blue-800">
                  About Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Call us at{' '}
              <a href="tel:+27100069158" className="text-blue-600 hover:text-blue-800">
                +27 10 006 9158
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;