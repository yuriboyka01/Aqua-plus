// WhatsApp Integration Utility
// Centralized WhatsApp redirect logic for consistent enquiry handling

const WHATSAPP_NUMBER = '917010329920'; // Primary WhatsApp number (without + or spaces)

/**
 * Opens WhatsApp with a pre-filled message
 * @param {string} message - The message to pre-fill in WhatsApp
 */
export const openWhatsApp = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

/**
 * Creates a product enquiry message
 * @param {Object} product - Product object with name, capacityLph, and stages
 * @returns {string} Formatted enquiry message
 */
export const createProductEnquiry = (product) => {
    return `Hi, I'm interested in the ${product.name} (${product.capacityLph}L/hr, ${product.stages} Stage). Please provide more details and pricing.`;
};

/**
 * Creates a general enquiry message
 * @returns {string} General enquiry message
 */
export const createGeneralEnquiry = () => {
    return `Hi, I would like to know more about your water purification solutions.`;
};

/**
 * Creates an industrial/commercial enquiry message
 * @returns {string} Industrial enquiry message
 */
export const createIndustrialEnquiry = () => {
    return `Hi, I'm interested in industrial/commercial RO solutions. Please contact me with more details.`;
};

/**
 * Creates a service booking enquiry message
 * @returns {string} Service enquiry message
 */
export const createServiceEnquiry = () => {
    return `Hi, I would like to book a service for my RO water purifier. Please contact me.`;
};
