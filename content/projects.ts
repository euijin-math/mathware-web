// Portfolio entries shown on the site.
// To add a project, append a new object to the "projects" array.

export type Project = {
  slug: string; // URL id, e.g. "mathware-web" -> /projects/mathware-web
  title: string; // Title of the project e.g. "Mathware.dev website"
  summary: string; // Summary of the project e.g. "This website"
  tags: string[]; // List of technologies e.g. ["Next.js", "TypeScript", "Python"]
  githubUrl?: string; // Link to the repository
  demoUrl?: string; // Link to a live demo website
};

export const projects: Project[] = [
  {
    slug: "mathware-web",
    title: "mathware.dev website",
    summary: "This website",
    tags: ["TypeScript"],
    githubUrl: "https://github.com/euijin-math/mathware-web",
    demoUrl: "https://mathware.dev",
  },
];
