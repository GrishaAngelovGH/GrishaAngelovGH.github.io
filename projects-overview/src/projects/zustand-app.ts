import type { Feature } from "@data-types/feature"

export default {
  id: "zustand-item-list-app",
  type: "ReactJS Project",
  title: "Zustand Item List Demo",
  image: "./assets/img/device.png",
  description: `
    <div class="text-justify">
      This demo app visualizes a collection of items and allows users to interact with it. 
      Each item is displayed with its current status. 
      The app provides controls to adjust quantities, increase or decrease as needed, 
      and mark specific items for quick identification.
      Built with the Zustand library, the app leverages its state management features. 
      All data is persistently stored  and changes remain intact even after refreshing or closing the app. 
    </div>
  `,
  features: [
    { content: "Implemented visualization of items with their statuses", items: [] },
    { content: "Implemented functionality to increase or decrease item quantities", items: [] },
    { content: "Implemented functionality to mark or unmark a given item", items: [] },
    { content: "All data is persistently stored", items: [] },
  ] as Feature[],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">tailwind css</span>`,
    `Integrated <span class="fw-bold">zustand</span>`,
    `Integrated <span class="fw-bold">axios</span>`,
    `Integrated <span class="fw-bold">axios-mock-adapter</span>`
  ]
}