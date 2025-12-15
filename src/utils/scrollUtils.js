/**
 * Smooth scroll utility functions for Aqua Plus website
 */

/**
 * Smooth scroll to an element with offset for fixed header
 * @param {string} elementId - The ID of the element to scroll to (without #)
 * @param {number} offset - Additional offset in pixels (default: 100)
 */
export const smoothScrollTo = (elementId, offset = 100) => {
    const element = document.getElementById(elementId);
    if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        return;
    }

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
};

/**
 * Scroll to booking section with optional service type pre-selection
 * @param {string} serviceType - The service type to pre-select (optional)
 */
export const scrollToBooking = (serviceType = null) => {
    smoothScrollTo('booking', 100);

    // If service type is provided, pre-select it after a short delay
    if (serviceType) {
        setTimeout(() => {
            const serviceSelect = document.querySelector('select[name="serviceType"]');
            if (serviceSelect) {
                serviceSelect.value = serviceType;
                // Trigger change event for any listeners
                serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }, 500);
    }
};

/**
 * Scroll to a specific section by ID
 * @param {string} sectionId - The section ID to scroll to
 */
export const scrollToSection = (sectionId) => {
    smoothScrollTo(sectionId, 100);
};

/**
 * Scroll to AMC plans section
 */
export const scrollToAMCPlans = () => {
    smoothScrollTo('amc-plans', 100);
};

/**
 * Scroll to top of page
 */
export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
