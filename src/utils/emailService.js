

// REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
const SERVICE_ID = 'service_9d3aem5';
const TEMPLATE_ID = 'template_r1jqkvn';
const PUBLIC_KEY = 'JOywWQRzPQqKZAeP5';

export const emailService = {
    /**
     * Send an email using EmailJS
     * @param {Object} data - The form data object
     * @returns {Promise} - Resolves on success, rejects on error
     */
    send: async (data) => {
        try {
            // You can pass a form element or a simple object data
            // If passing object data to sendForm, it expects a form reference.
            // For send(), it expects (serviceID, templateID, templateParams, publicKey)

            const response = await window.emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                data,
                PUBLIC_KEY
            );

            console.log('SUCCESS!', response.status, response.text);
            return response;
        } catch (error) {
            console.error('FAILED...', error);
            throw error;
        }
    },

    /**
     * Initialize EmailJS (optional, can be done once in App.js)
     */
    init: () => {
        if (window.emailjs) {
            window.emailjs.init(PUBLIC_KEY);
        }
    }
};
