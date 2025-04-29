import type { Project } from "@data-types/project"

export default {
  id: "curated-list-of-latest-trends",
  type: "AstroJS Project",
  title: "Curated List Of Latest Trends",
  image: "./assets/img/multi-device-curated-list-of-latest-trends.png",
  description: `
    <div class="text-justify">
      A hand-picked, curated list of 100+ resources to stay up-to-date with the latest trends in software development.
    </div>
  `,
  features: [
    {
      content: "The resources are separated in the following categories:",
      items: ["YouTube", "Blogs & Articles", "GitHub", "Podcasts", "Online Courses", "Developer Surveys", "X (ex-twitter) accounts"]
    },
  ],
  technologies: [
    `Initial structure is created with <span class="fw-bold">create astro setup wizard</span>`,
    `Integrated <span class="fw-bold">astro</span>`,
    `Integrated <span class="fw-bold">astro-icon</span>`,
    `Integrated <span class="fw-bold">tailwind css</span>`
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/curated-list-of-latest-trends",
  liveDemoLink: "https://curated-list-of-latest-trends-grishaangelovs-projects.vercel.app/",
} as Project