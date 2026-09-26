import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { categoryLabels, formatCredentialDate, type Credential } from "../../content/credentials";
import { CredentialMedia } from "./CredentialMedia";

type CredentialViewerProps = {
  credential: Credential;
  onClose: () => void;
  returnFocusTo?: HTMLElement | null;
};

export function CredentialViewer({ credential, onClose, returnFocusTo }: CredentialViewerProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusTo?.focus();
    };
  }, [onClose, returnFocusTo]);

  return createPortal(
    <div className="credential-viewer-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div className="credential-viewer" role="dialog" aria-modal="true" aria-labelledby="credential-viewer-title" ref={dialogRef}>
        <button className="credential-viewer-close" type="button" onClick={onClose} aria-label="Close credential viewer" ref={closeRef}>
          <HiOutlineXMark aria-hidden="true" />
        </button>
        <div className="credential-viewer-document">
          <CredentialMedia credential={credential} eager />
        </div>
        <div className="credential-viewer-meta">
          <p className="section-label">{categoryLabels[credential.category]}</p>
          <h2 id="credential-viewer-title">{credential.title}</h2>
          <p className="credential-issuer">{credential.issuer}</p>
          <dl>
            <div><dt>Issued</dt><dd>{formatCredentialDate(credential.issuedAt)}</dd></div>
          </dl>
          {credential.description && <p>{credential.description}</p>}
          {credential.skills && credential.skills.length > 0 && (
            <ul className="tag-list" aria-label="Skills and focus">
              {credential.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
