import React, { Component, ReactNode, ErrorInfo } from 'react';
import type { ReactElement } from 'react';

// Typed error boundary component
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactElement; // Fallback UI
  onError?: (error: Error, errorInfo: ErrorInfo) => void; // Error handler
  logError?: boolean; // Whether to log errors
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to show fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    if (this.props.logError) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">We're sorry! An unexpected error occurred.</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
            {this.props.fallback}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;