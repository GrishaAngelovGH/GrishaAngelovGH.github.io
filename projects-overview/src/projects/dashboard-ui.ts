import type { Feature } from "@data-types/feature"

export default {
  id: "dashboard-ui",
  type: "ReactJS Project",
  title: "Ant Design Dashboard UI",
  image: "./assets/img/multi-device-dashboard-ui.png",
  description: `
    <div class="text-justify">
      This front-end project is a implementation of Dashboard UI visualization.
      The Home Page serves as the entry point, featuring well-organized sections 
      designed to guide users through key content and functionality. 
      The Dashboard Page provides multiple widgets built using Ant Design (Antd) components 
      for a polished look and feel. To enhance data representation, the project integrates Chart.js, 
      providing dynamic chart visualizations that effectively communicate complex information. 
    </div>
  `,
  features: [
    { content: "Home Page presenting various sections", items: [] },
    {
      content: "Dashboard Page with multiple widgets and components",
      items: [
        "Progress Widgets",
        "Line Chart",
        "Statistic Cards",
        "Active Users",
        "Table Report",
        "Tasks Timeline",
        "Market Summary"
      ]
    },
  ] as Feature[],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">react-router-dom</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">react-bootstrap</span>`,
    `Integrated <span class="fw-bold">antd</span>`,
    `Integrated <span class="fw-bold">chart.js</span>`,
    `Integrated <span class="fw-bold">react-chartjs-2</span>`,
    `Integrated <span class="fw-bold">react-awesome-reveal</span>`,
  ]
}