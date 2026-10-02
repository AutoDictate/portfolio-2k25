import { skillGroups } from "../data/portfolio";

function SkillCard({ group, index, featured = false }) {
  return (
    <article className={`skill-card${featured ? " skill-card--featured" : ""}`}>
      <div className="skill-card-heading">
        <span className="skill-card-kicker">{featured ? "Primary focus" : `0${index + 1}`}</span>
        <h3>{group.title}</h3>
      </div>
      <ul className="skill-tags" aria-label={group.title}>
        {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </article>
  );
}

export default function Skills() {
  const primaryGroups = skillGroups.slice(0, 2);
  const supportingGroups = skillGroups.slice(2);

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="skills-section w-full px-[8%] lg:px-[12%] py-16 scroll-mt-24"
    >
      <div className="skills-intro">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-rose-700 dark:text-rose-200">Technical toolkit</p>
        <h2 id="skills-title" className="text-4xl sm:text-5xl font-Ovo">Skills</h2>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-white/70">
          Java backend engineering and SAP Commerce up front, with framework, cloud, data and tooling skills grouped below.
        </p>
      </div>

      <div className="skills-grid">
        {primaryGroups.map((group, index) => (
          <SkillCard key={group.title} group={group} index={index} featured={index === 0} />
        ))}
      </div>

      <details className="skills-more">
        <summary className="skills-more-summary">
          <span>
            <span className="skills-more-title">More technologies</span>
            <span className="skills-more-description">Cloud, data, frontend and developer tools</span>
          </span>
          <span className="skills-more-icon" aria-hidden="true" />
        </summary>
        <div className="skills-grid skills-grid--secondary">
          {supportingGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index + primaryGroups.length} />
          ))}
        </div>
      </details>
    </section>
  );
}
