import React, { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Lazy loading with Intersection Observer
 * - WebP format with fallback
 * - Explicit width/height to prevent layout shift
 * - Loading placeholder
 * - Responsive images
 */
const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    className = '',
    loading = 'lazy',
    priority = false,
    objectFit = 'cover',
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority); // Load immediately if priority
    const imgRef = useRef(null);

    useEffect(() => {
        if (priority) return; // Skip observer if priority image

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px', // Start loading 50px before entering viewport
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [priority]);

    // Extract path information
    const getImagePaths = () => {
        const pathParts = src.split('/');
        const filename = pathParts[pathParts.length - 1];
        const filenameWithoutExt = filename.replace(/\.(jpg|jpeg|png)$/i, '');
        const basePath = pathParts.slice(0, -1).join('/');

        return {
            webp: `${basePath}/optimized/${filenameWithoutExt}.webp`,
            fallback: src.includes('/optimized/') ? src : `${basePath}/optimized/${filename}`,
            original: src,
        };
    };

    const { webp, fallback, original } = getImagePaths();

    // Inline styles for aspect ratio container
    const containerStyle = {
        position: 'relative',
        width: '100%',
        paddingBottom: height && width ? `${(height / width) * 100}%` : '75%', // Default 4:3 aspect ratio
        backgroundColor: '#f1f5f9', // Placeholder background
        overflow: 'hidden',
    };

    const imgStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit,
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0,
    };

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div ref={imgRef} style={containerStyle} className={className}>
            {isInView && (
                <picture>
                    <source srcSet={webp} type="image/webp" />
                    <img
                        src={fallback}
                        alt={alt}
                        width={width}
                        height={height}
                        loading={priority ? 'eager' : loading}
                        decoding="async"
                        onLoad={handleLoad}
                        style={imgStyle}
                        onError={(e) => {
                            // Fallback to original if optimized version fails
                            e.target.src = original;
                        }}
                    />
                </picture>
            )}

            {/* Loading placeholder */}
            {!isLoaded && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f1f5f9',
                    }}
                >
                    <div
                        style={{
                            width: '40px',
                            height: '40px',
                            border: '4px solid #e2e8f0',
                            borderTop: '4px solid #0891b2',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                        }}
                    />
                </div>
            )}

            {/* Add spinner animation */}
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default OptimizedImage;
