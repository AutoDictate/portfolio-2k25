import { siteConfig } from "../data/portfolio";

const socialMarks = {
  Email: "@",
  LinkedIn: "in",
  GitHub: "GH",
};

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-section scroll-mt-24">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="contact-eyebrow">
            <span aria-hidden="true" /> Contact
          </p>
          <h2 id="contact-title">Let’s connect.</h2>
          <p className="contact-description">
            For opportunities, collaborations, or a simple hello, reach out through email or find me online.
          </p>
        </div>

        <ul className="contact-links" aria-label="Contact links">
          {siteConfig.socials.map((social) => {
            const isExternal = social.href.startsWith("https://");

            return (
              <li key={social.label}>
                <a
                  className="contact-link-card"
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <span className="contact-link-mark" aria-hidden="true">
                    {socialMarks[social.label]}
                  </span>
                  <span className="contact-link-copy">
                    <span className="contact-link-label">{social.label}</span>
                    <strong>{social.value}</strong>
                  </span>
                  <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
