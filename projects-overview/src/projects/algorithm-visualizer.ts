import type { Project } from "@data-types/project"

export default {
  id: "algorithm-visualizer",
  type: "ReactJS Project",
  title: "Algorithm Visualizer",
  image: "./assets/img/multi-device-algorithm-visualizer.png",
  description: `
    <div class="text-justify">
      This front-end project showcases a collection of algorithms through an interactive, 
      step-by-step visualization interface. It is designed to provide users with a clear and 
      engaging way to understand the inner workings of various algorithms, making complex processes 
      more accessible and easier to comprehend. With its intuitive visual approach, the project serves 
      as both an educational tool and a practical resource for algorithm exploration.
    </div>
  `,
  features: [
    { content: "Implemented Linear Search Algorithm", items: [] },
    { content: "Implemented Binary Search Algorithm", items: [] },
    { content: "Implemented Bubble Sort Algorithm", items: [] },
    { content: "Implemented Quick Sort Algorithm", items: [] },
    { content: "Implemented Breadth First Search Traversal Algorithm", items: [] },
    { content: "Implemented Depth First Search Traversal Algorithm", items: [] },
    { content: "Implemented Caesar Cipher Algorithm", items: [] },
    { content: "Implemented Flood Fill Algorithm", items: [] }
  ],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">react-router-dom</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">react-bootstrap</span>`,
    `Integrated <span class="fw-bold">rc-slider</span>`,
    `Integrated <span class="fw-bold">react-d3-tree</span>`,
    `Integrated <span class="fw-bold">react-pro-sidebar</span>`,
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/algorithms",
  liveDemoLink: "https://algorithms-grishaangelovs-projects.vercel.app/",
} as Project