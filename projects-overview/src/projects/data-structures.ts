import type { Project } from "@data-types/project"

export default {
  id: "data-structures",
  type: "JavaScript Project",
  title: "Implementations of Data Structures",
  image: "./assets/img/device.png",
  description: `
    <div class="text-justify">
      This repository contains implementations of fundamental data structures, written in JavaScript.
    </div>
  `,
  features: [
    {
      content: "Implemented data structures",
      items: [
        "ArrayList",
        "LinkedList",
        "Queue",
        "Stack",
        "Set",
        "HashMap",
        "BinaryTree",
      ]
    }
  ],
  technologies: [
    `Used <span class="fw-bold">JavaScript</span>`
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/data-structures-in-javascript",
} as Project