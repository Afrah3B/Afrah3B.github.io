import emailjs from "@emailjs/browser";
import { emailConfig, isEmailConfigured } from "../config/email";

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

type EmailJSErrorLike = {
  status?: unknown;
  text?: unknown;
  message?: unknown;
};

function logEmailJSError(error: unknown) {
  if (!import.meta.env.DEV) return;

  const candidate = typeof error === "object" && error !== null ? error as EmailJSErrorLike : {};
  const status = typeof candidate.status === "number" ? candidate.status : undefined;
  const rawReason = typeof candidate.text === "string"
    ? candidate.text
    : typeof candidate.message === "string"
      ? candidate.message
      : "Unknown EmailJS request failure";
  const reason = Object.values(emailConfig).reduce(
    (sanitized, value) => value ? sanitized.replaceAll(value, "[redacted]") : sanitized,
    rawReason,
  );

  console.error("EmailJS contact request failed", { status, reason });
}

export async function sendContactMessage(values: ContactMessage) {
  if (!isEmailConfigured) {
    throw new Error("Contact delivery is not configured.");
  }

  try {
    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        user_name: values.name,
        user_email: values.email,
        user_message: values.message,
      },
      { publicKey: emailConfig.publicKey },
    );
  } catch (error) {
    logEmailJSError(error);
    throw error;
  }
}
