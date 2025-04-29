import type { Project } from "@data-types/project"

export default {
  id: "premier-league-ui",
  type: "ReactJS Project",
  title: "Premier League UI Clone",
  image: "./assets/img/multi-device-premier-league-ui.png",
  description: `
    <div class="text-justify">
      The Premier League UI is a demo application that replicates the Google UI interface, 
      which was provided for "premier league" search queries. 
      This app allows users to navigate through various pages, 
      including home page, matches page, news page, standings page, stats page and players page.
    </div>
  `,
  features: [
    { content: "Home Page with matches summary", items: [] },
    { content: "Matches Page visualizing played matches in table view", items: [] },
    { content: "News Page visualizing published news as list of panels", items: [] },
    { content: "Standings Page visualizing table with all clubs with additional statistic", items: [] },
    { content: "Stats Page visualizing top player stats", items: [] },
    { content: "Players Page visualizing various details such as player's name, team, position and goals for this season", items: [] },
  ],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">react-router-dom</span>`,
    `Integrated <span class="fw-bold">tailwind css</span>`,
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/premier-league-ui",
  liveDemoLink: "https://premier-league-ui-grishaangelovs-projects.vercel.app/",
} as Project