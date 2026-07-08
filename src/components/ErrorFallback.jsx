import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Part 10: This lifecycle method updates the state when an error crashes a child
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error details here for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Part 10: The exact fallback UI requested by the assignment instead of crashing completely
      return (
        <div className="w-full max-w-4xl mx-auto mt-6 p-6 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-center shadow-sm">
          <h3 className="font-bold text-lg">Something went wrong.</h3>
          <p className="text-sm mt-1 text-red-600">Please reload the application.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Reload Page
          </button>
        </div>
      );
    }

    // If no errors happened, render the normal application layout children
    return this.props.children;
  }
}