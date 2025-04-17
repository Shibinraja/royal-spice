"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Check specifically for window reference errors
      const isWindowError =
        this.state.error?.message.includes("window is not defined") ||
        this.state.error?.stack?.includes("window is not defined");

      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div className="error-boundary-fallback">
            <h2>Something went wrong in this component</h2>
            <details>
              <summary>Error Details</summary>
              <p>{this.state.error?.message}</p>
              {isWindowError && (
                <div className="window-error-help">
                  <p>
                    <strong>Window Reference Error Detected</strong>
                  </p>
                  <p>
                    This component is trying to access the browser&apos;s window
                    object during server-side rendering.
                  </p>
                  <p>Check this component for:</p>
                  <ul>
                    <li>Direct window references (window.innerWidth, etc.)</li>
                    <li>Browser-only APIs (localStorage, document, etc.)</li>
                    <li>Third-party libraries that use window</li>
                  </ul>
                  <p>
                    Fix by wrapping window usage in useEffect or using dynamic
                    imports with ssr: false
                  </p>
                </div>
              )}
              <pre>{this.state.error?.stack}</pre>
            </details>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
