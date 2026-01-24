import React from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // You can also log the error to an error reporting service here
        console.error("Uncaught error:", error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
                        <div className="flex justify-center mb-6">
                            <div className="bg-red-50 p-4 rounded-full">
                                <AlertCircle className="w-12 h-12 text-red-500" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
                        <p className="text-gray-600 mb-8">
                            We apologize for the inconvenience. The application has encountered an unexpected error.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={this.handleReload}
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
                            >
                                <RefreshCw size={18} />
                                Try Again
                            </button>

                            <a
                                href="/"
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                            >
                                <Home size={18} />
                                Go Home
                            </a>
                        </div>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mt-8 text-left">
                                <details className="text-xs text-red-600 bg-red-50 p-3 rounded border border-red-100 overflow-auto max-h-40">
                                    <summary className="cursor-pointer font-medium mb-1">Error Details</summary>
                                    <pre className="whitespace-pre-wrap font-mono">
                                        {this.state.error.toString()}
                                        <br />
                                        {this.state.errorInfo.componentStack}
                                    </pre>
                                </details>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
