import { projects } from "../data/portfolio";

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="projects-title"
      className="w-full px-[8%] lg:px-[12%] py-16 scroll-mt-24"
    >
      <p className="text-center mb-2 text-lg font-Ovo">Selected work</p>
      <h2 id="projects-title" className="text-center text-4xl sm:text-5xl font-Ovo">
        Projects
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-white/70">
        Projects from my work at Adhiran Infotech and Techno Kryon, plus Java and Spring Boot product work.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col rounded-2xl border border-gray-300 dark:border-white/20 p-6 sm:p-8 bg-white/50 dark:bg-white/[0.03]">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-white/55">
              {project.context}
            </p>
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p className="mt-4 leading-7 text-gray-700 dark:text-white/75 flex-1">
              {project.description}
            </p>
            <ul aria-label={`${project.title} technologies`} className="flex flex-wrap gap-2 mt-6">
              {project.technologies.map((technology) => (
                <li key={technology} className="rounded-full border border-gray-300 dark:border-white/20 px-3 py-1 text-xs text-gray-700 dark:text-white/75">
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
