import { type ChangeEvent, type FocusEvent, type FormEvent, useState } from "react";
import { profile } from "../../content/portfolio";
import { sendContactMessage } from "../../services/contact";
import { Section } from "../primitives";

type FieldName = "name" | "email" | "message";
type FormValues = Record<FieldName, string> & { website: string };
type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = { name: "", email: "", message: "", website: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: FieldName, value: string) {
  const trimmed = value.trim();
  if (!trimmed) return `${name[0].toUpperCase()}${name.slice(1)} is required.`;
  if (name === "email" && !emailPattern.test(trimmed)) return "Enter a valid email address.";
  return "";
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = event.target.name as keyof FormValues;
    setValues((current) => ({ ...current, [name]: event.target.value }));
    if (name !== "website" && errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
    if (status === "error") setStatus("idle");
  }

  function handleBlur(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = event.target.name as FieldName;
    if (name === "name" || name === "email" || name === "message") {
      const error = validateField(name, event.target.value);
      setErrors((current) => ({ ...current, [name]: error || undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    if (values.website.trim()) {
      setStatus("success");
      setValues(initialValues);
      return;
    }

    const nextErrors = (Object.keys(initialValues) as Array<keyof FormValues>).reduce<FormErrors>(
      (result, name) => {
        if (name !== "website") {
          const error = validateField(name, values[name]);
          if (error) result[name] = error;
        }
        return result;
      },
      {},
    );

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setStatus("sending");
    try {
      await sendContactMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      });
      setValues(initialValues);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="contact-section">
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="contact-status"><span aria-hidden="true" />Open to opportunities &amp; interesting projects</p>
          <h2>Have a difficult problem?</h2>
          <p>
            I'm interested in engineering roles, ambitious products, and
            problems where the answer isn't obvious from the start.
          </p>
          <p>If you're building something meaningful, I'd like to hear about it.</p>
        </div>

        {status === "success" ? (
          <div className="contact-feedback contact-success" role="status" aria-live="polite">
            <span className="contact-feedback-mark" aria-hidden="true">✓</span>
            <h3>Message sent!</h3>
            <p>Thanks for reaching out. I'll get back to you as soon as I can.</p>
            <button className="text-button" type="button" onClick={() => setStatus("idle")}>
              Send another message <span aria-hidden="true">→</span>
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" maxLength={100} value={values.name} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />
              {errors.name && <p className="field-error" id="contact-name-error">{errors.name}</p>}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" inputMode="email" autoComplete="email" maxLength={254} value={values.email} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />
              {errors.email && <p className="field-error" id="contact-email-error">{errors.email}</p>}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={6} maxLength={5000} value={values.message} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />
              {errors.message && <p className="field-error" id="contact-message-error">{errors.message}</p>}
            </div>

            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={handleChange} />
            </div>

            {status === "error" && (
              <div className="contact-error" role="alert">
                <strong>Something went wrong.</strong>
                <p>
                  Your message wasn't sent. Please try again
                  {profile.contact.email && <> or <a href={`mailto:${profile.contact.email}`}>reach me directly by email</a></>}.
                </p>
              </div>
            )}

            <button className="contact-submit" type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>
              {status === "sending" ? "Sending…" : <>Send message <span aria-hidden="true">→</span></>}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}
