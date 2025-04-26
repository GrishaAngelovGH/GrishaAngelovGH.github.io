import type { Feature } from "@data-types/feature"

export default {
  id: "astrojs-ssr-blog",
  type: "AstroJS Project",
  title: "AstroJS SSR Blog",
  image: "./assets/img/device.png",
  description: `
    <div class="text-justify">
     This application is a lightweight blog system built with AstroJS. 
     It offers filtering functionality, allowing users to query articles by title or hashtag 
     through a user-friendly interface. The system leverages AstroJS's server-side rendering 
     capabilities to ensure fast and responsive content.
    </div>
  `,
  features: [
    { content: "Implemented visualization of all articles", items: [] },
    { content: "Implemented visualization of the content of the articles", items: [] },
    { content: "Implemented filtering of articles by title or hashtag", items: [] },
  ] as Feature[],
  technologies: [
    `Initial structure is created with <span class="fw-bold">create astro setup wizard</span>`,
    `Integrated <span class="fw-bold">astro</span>`,
    `Integrated <span class="fw-bold">flowbite</span>`,
    `Integrated <span class="fw-bold">tailwind css</span>`,
    `Integrated <span class="fw-bold">typescript</span>`
  ]
}