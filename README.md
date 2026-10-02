# Jayasurya A — Software Engineer Portfolio

A one-page portfolio built with Next.js 15, React 19, Tailwind CSS, and Motion. It uses Next.js static export so the same site can be hosted on Vercel or GitHub Pages.

## Run locally

Install Node.js 20 or later, then run:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The static site is generated in `out/`. No runtime environment variables or backend services are needed.

## Deploy to Vercel

Import the repository in Vercel. Vercel detects Next.js and uses `npm run build`; the static export in `out/` is deployed automatically. No environment variables are required.

## Deploy to GitHub Pages

The included `.github/workflows/deploy.yml` workflow builds and deploys the static export when code is pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. If the default branch has a different name, update the workflow trigger.

The workflow sets `NEXT_PUBLIC_BASE_PATH` to the repository path for a project site and to an empty path for a user or organization site. This variable is only needed when building a project site below `https://<owner>.github.io/<repository>/`; leave it unset for local development and Vercel.

## Update portfolio information

Edit `app/data/portfolio.js` to update the profile summary, employment history, skills, projects, education, certifications, learning topics, social links, and resume path. Replace the existing file at `public/jayasurya-resume.pdf` to update the resume. Set the GitHub, LinkedIn, and email placeholders in `siteConfig.socials` before publishing them.
