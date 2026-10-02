import { motion } from "motion/react";
import { siteConfig } from "../data/portfolio";

const focusAreas = [
  {
    title: "Backend engineering",
    description: "Java, Spring Boot, REST APIs, and microservices.",
  },
  {
    title: "Enterprise commerce",
    description: "SAP Commerce Cloud and e-commerce application development.",
  },
  {
    title: "Reliable delivery",
    description: "Cloud support, production troubleshooting, and root cause analysis.",
  },
];

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.15 }}
      id="about"
      aria-labelledby="about-title"
      className="w-full px-[8%] lg:px-[12%] py-16 scroll-mt-24"
    >
      <p className="text-center mb-2 text-lg font-Ovo">Introduction</p>
      <h2 id="about-title" className="text-center text-4xl sm:text-5xl font-Ovo">
        About me
      </h2>

      <div className="max-w-5xl mx-auto my-14">
        <p className="max-w-3xl leading-8 text-gray-700 dark:text-white/80">
          {siteConfig.summary}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {focusAreas.map((area) => (
            <li
              key={area.title}
              className="border border-gray-300 dark:border-white/20 rounded-xl p-5 bg-white/50 dark:bg-white/[0.03]"
            >
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {area.title}
              </h3>
              <p className="text-sm leading-6 text-gray-600 dark:text-white/70 mt-2">
                {area.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
