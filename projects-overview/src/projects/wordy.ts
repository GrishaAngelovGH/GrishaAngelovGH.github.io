import type { Project } from "@data-types/project"

export default {
  id: "wordy",
  type: "ReactJS Project",
  title: "Wordy Game (Wordle Clone)",
  image: "./assets/img/multi-device-wordy.png",
  description: `
    <div class="text-justify">
      This front-end project is an implementation of the popular word puzzle game Wordle, 
      designed to offer an interactive and engaging gaming experience. 
      Players are tasked with guessing a hidden word within a limited number of attempts, 
      with the game providing instant feedback by highlighting letters based on their correctness and placement. 
      The grid-based layout dynamically adjusts to reflect the player’s progress, with color-coded feedback guiding each guess. 
    </div>
  `,
  features: [
    { content: "Visualized an interactive word grid where players input their guesses letter by letter", items: [] },
    { content: "Visualized a color-coded feedback i.e. highlights letters to indicate correctness (e.g., correct position, incorrect position, or absent in the word)", items: [] },
    { content: "Visualized a virtual keyboard or compatibility with physical keyboards to allow easy input", items: [] },
    { content: "Visualized a dynamic color feedback to the on-screen keyboard, visually indicating the status of each letter based on the player's guesses", items: [] },
    { content: "Visualized a button to restart the game, allowing players to try again", items: [] },
  ],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">react-bootstrap</span>`,
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/wordy",
  liveDemoLink: "https://wordy-grishaangelovs-projects.vercel.app/",
} as Project