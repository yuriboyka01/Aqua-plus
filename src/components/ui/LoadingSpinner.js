import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="relative w-16 h-16">
                {/* Outer ring */}
                <div className="absolute top-0 left-0 w-full h-full border-4 border-cyan-100 rounded-full"></div>
                {/* Spinning ring */}
                <div className="absolute top-0 left-0 w-full h-full border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div>
                {/* Logo or Icon in center (optional) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
