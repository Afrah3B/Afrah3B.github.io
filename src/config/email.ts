export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? "",
};

export const isEmailConfigured = Object.values(emailConfig).every(Boolean);

if (import.meta.env.DEV && !isEmailConfigured) {
  console.warn("Contact form delivery is disabled until the EmailJS environment variables are configured.");
}
