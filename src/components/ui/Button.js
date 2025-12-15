// Button Component
import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200",
        secondary: "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600",
        outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};
