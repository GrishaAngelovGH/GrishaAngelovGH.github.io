import type { Feature } from "@data-types/feature"

export default {
  id: "conversation-intelligence-platform",
  type: "ReactJS Project",
  title: "Conversation Intelligence Platform Demo",
  image: "./assets/img/multi-device-conversation-intelligence.png",
  description: `
    <div class="text-justify">
      This Conversation Intelligence Platform Demo UI is an application designed to showcase 
      the capabilities of analyzing and interpreting conversations in real time. 
    </div>
  `,
  features: [
    { content: "Visualized keyword trend analytics panel", items: [] },
    { content: "Visualized sentiment analysis panel", items: [] },
    { content: "Visualized brand mentions analysis panel", items: [] },
    { content: "Visualized team insights panel", items: [] },
    { content: "Visualized transcript summary of conversation", items: [] },
    { content: "Visualized seller details including insights and call history", items: [] },
  ] as Feature[],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">react-router-dom</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">react-bootstrap</span>`,
    `Integrated <span class="fw-bold">bootstrap-icons</span>`,
    `Integrated <span class="fw-bold">canvas</span>`,
    `Integrated <span class="fw-bold">react-chartjs-2</span>`,
    `Integrated <span class="fw-bold">react-pro-sidebar</span>`,
  ]
}