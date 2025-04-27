import type { Feature } from "@data-types/feature"

export default {
  id: "pairs-and-tens-game",
  type: "ReactJS Project",
  title: "Pairs and Tens Game",
  image: "./assets/img/multi-device-pairs-and-tens-game.png",
  description: `
    <div class="text-justify">
      This game is an interactive number-based puzzle designed to challenge players' logic and problem-solving skills. 
      The goal is simple yet engaging: search for all the possible pairs of numbers or combinations within a grid that add up to the sum of 10. 
      Players must carefully scan the grid, identify matching pairs or groups of numbers to clear the board.
      With its intuitive gameplay this game offers a fun way to sharpen basic arithmetic and pattern recognition abilities. 
    </div>
  `,
  features: [
    {
      content: "Visualized an interactive grid, built to visually engage players as they select and match number pairs or combinations that sum up to 10, with dynamic feedback",
      items: []
    },
  ] as Feature[],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">react-confetti</span>`,
  ]
}