import type { Project } from "@data-types/project"

export default {
  id: "react-tensorflow-qna",
  type: "ReactJS Project",
  title: "TensorFlow QnA",
  image: "./assets/img/multi-device-tensorflow-qna.png",
  description: `
    <div class="text-justify">
      This project harnesses the capabilities of both ReactJS and TensorFlow.js to create a user-friendly 
      question-answering platform. TensorFlow.js integrates natural language processing features directly 
      into the browser environment, eliminating the need for server-side processing and enabling swift performance. 
      The platform comprehend user inquiries formulated in natural language and respond with contextually relevant answers in real time.
    </div>
  `,
  features: [
    { content: "Conversation-like interaction with TensorflowJS environment", items: [] },
  ],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">bootstrap-icons</span>`,
    `Integrated <span class="fw-bold">react-bootstrap</span>`,
    `Integrated <span class="fw-bold">react-bootstrap</span>`,
    `Integrated <span class="fw-bold">@tensorflow/tfjs</span>`,
    `Integrated <span class="fw-bold">@tensorflow-models/qna</span>`
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/react-tensorflow-qna",
} as Project