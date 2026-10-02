import { assets } from "@/assets/assets";
import Image from "next/image";
import { siteConfig, withBasePath } from "../data/portfolio";

const heroTechnologies = ["Java", "Spring Boot", "SAP Commerce", "Cloud"];

export default function Header() {
  return (
    <header id="top" className="hero-section">
      <div className="hero-container">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-mark" aria-hidden="true" />
            {siteConfig.role}
          </p>

          <h1 className="hero-title">
            Hi, I’m
            <span>{siteConfig.name}</span>
          </h1>

          <p className="hero-lede">{siteConfig.tagline}</p>

          <ul className="hero-technologies" aria-label="Primary technologies">
            {heroTechnologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <a href="#contact" className="hero-button hero-button-primary">
              Contact me
              <Image src={assets.right_arrow_white} alt="" className="h-4 w-4" />
            </a>
            <a
              href={withBasePath(siteConfig.resumePath)}
              download
              className="hero-button hero-button-secondary"
            >
              Download résumé
              <Image src={assets.download_icon} alt="" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait-frame">
            <Image
              src={assets.user_image}
              alt="Portrait of Jayasurya A"
              priority
              sizes="(max-width: 760px) 70vw, (max-width: 1100px) 38vw, 420px"
              className="hero-portrait-image"
            />
          </div>
          <span className="hero-visual-orbit" aria-hidden="true" />
          <span className="hero-visual-spark hero-visual-spark-one" aria-hidden="true" />
          <span className="hero-visual-spark hero-visual-spark-two" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
