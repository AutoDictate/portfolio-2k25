import { siteConfig } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-300 dark:border-white/20 px-[8%] lg:px-[12%] py-7">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
        <a href="#top" className="font-semibold text-lg">{siteConfig.name}</a>
        <p className="text-sm text-gray-600 dark:text-white/65">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
