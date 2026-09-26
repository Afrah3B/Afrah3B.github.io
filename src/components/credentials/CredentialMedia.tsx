import { useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import type { Credential } from "../../content/credentials";

type CredentialMediaProps = {
  credential: Credential;
  eager?: boolean;
};

export function CredentialMedia({ credential, eager = false }: CredentialMediaProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="credential-media" data-failed={failed}>
      {!failed ? (
        <img
          src={credential.image}
          alt={`${credential.title} issued by ${credential.issuer}`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="credential-media-fallback" role="img" aria-label={`Document preview unavailable for ${credential.title}`}>
          <HiOutlineDocumentText aria-hidden="true" />
          <span>Credential document</span>
        </div>
      )}
    </div>
  );
}
