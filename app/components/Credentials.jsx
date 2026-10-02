import {
  additionalCertifications,
  featuredCertifications,
} from "../data/portfolio";

function CertificationCard({ certification, index, compact = false }) {
  return (
    <li className={`certification-card${compact ? " certification-card--compact" : ""}`}>
      <div className="certification-card-meta">
        <span className="certification-issuer">{certification.issuer}</span>
        <span className="certification-date">{certification.issued}</span>
      </div>
      <div className="certification-card-title-row">
        <span className="certification-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3>{certification.name}</h3>
      </div>
      <ul className="certification-skills" aria-label={`${certification.name} skills`}>
        {certification.skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </li>
  );
}

export default function Credentials() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="certifications-section scroll-mt-24"
    >
      <div className="certifications-shell">
        <div className="certifications-heading">
          <div>
            <p className="certifications-eyebrow">Professional development</p>
            <h2 id="certifications-title">Certifications</h2>
            <p className="certifications-description">
              Training and credentials across software development, cloud, data, and security.
            </p>
          </div>
          <span className="certifications-total" aria-label={`${featuredCertifications.length} selected certifications`}>
            <strong>{String(featuredCertifications.length).padStart(2, "0")}</strong>
            <span>selected</span>
          </span>
        </div>

        <ul className="certification-grid" aria-label="Selected certifications">
          {featuredCertifications.map((certification, index) => (
            <CertificationCard
              key={certification.name}
              certification={certification}
              index={index}
            />
          ))}
        </ul>

        <details className="certifications-more">
          <summary className="certifications-more-summary">
            <span>
              <span className="certifications-more-title">More credentials</span>
              <span className="certifications-more-description">Additional courses and certificates</span>
            </span>
            <span className="certifications-more-count">{additionalCertifications.length}</span>
            <span className="certifications-more-icon" aria-hidden="true" />
          </summary>
          <ul className="certification-grid certification-grid--additional" aria-label="Additional certifications">
            {additionalCertifications.map((certification, index) => (
              <CertificationCard
                key={certification.name}
                certification={certification}
                index={index}
                compact
              />
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
