import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center py-16">
            <div className="bg-red-50 p-6 rounded-full mb-6 animate-bounce">
                <AlertTriangle className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl font-semibold transform hover:-translate-y-1"
            >
                <Home size={20} />
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
