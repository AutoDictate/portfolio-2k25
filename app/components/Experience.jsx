import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="w-full px-[8%] lg:px-[12%] py-16 scroll-mt-24"
    >
      <p className="text-center mb-2 text-lg">Career</p>
      <h2 id="experience-title" className="text-center text-4xl sm:text-5xl">
        Experience
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70">
        Backend and enterprise application development across e-commerce, tourism, and gaming.
      </p>

      <ol className="experience-list mx-auto max-w-5xl">
        {experience.map((job, index) => (
          <li key={job.company}>
            <article className="experience-card">
              <div className="experience-heading">
                <span className="experience-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-semibold">{job.company}</h3>
                  <p className="mt-1 text-gray-700 dark:text-white/75">{job.role}</p>
                </div>
              </div>

              <p className="mt-5 text-gray-700 dark:text-white/80">{job.summary}</p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-sm leading-6 text-gray-700 dark:text-white/75">
                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>

              {job.recognition && (
                <p className="mt-5 rounded-lg bg-gray-100 dark:bg-white/[0.06] p-4 text-sm leading-6 text-gray-700 dark:text-white/80">
                  <span className="font-semibold">Recognition: </span>{job.recognition}
                </p>
              )}

              <ul aria-label={`${job.company} technologies`} className="flex flex-wrap gap-2 mt-5">
                {job.technologies.map((technology) => (
                  <li key={technology} className="experience-tag">
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
