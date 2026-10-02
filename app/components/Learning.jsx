import { learningSkills } from "../data/portfolio";

export default function Learning() {
  return (
    <section
      id="learning"
      aria-labelledby="learning-title"
      className="w-full px-[8%] lg:px-[12%] py-16 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto rounded-2xl border border-gray-300 dark:border-white/20 p-7 sm:p-10 bg-white/50 dark:bg-white/[0.03]">
        <p className="mb-2 text-sm uppercase tracking-wide text-gray-500 dark:text-white/55">
          Learning & future focus
        </p>
        <h2 id="learning-title" className="text-3xl sm:text-4xl font-Ovo">
          Currently exploring
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-gray-700 dark:text-white/75">
          I’m building foundational knowledge in AI-enabled software and interested in learning how to build AI agents. These are learning areas, not professional experience.
        </p>
        <ul className="flex flex-wrap gap-3 mt-6">
          {learningSkills.map((name) => (
            <li key={name} className="rounded-full border border-gray-300 dark:border-white/20 px-4 py-2 text-sm">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
