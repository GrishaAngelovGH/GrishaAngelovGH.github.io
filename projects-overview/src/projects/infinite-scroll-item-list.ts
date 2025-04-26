import type { Feature } from "@data-types/feature"

export default {
  id: "infinite-scroll-item-list",
  type: "ReactJS Project",
  title: "Infinite Scroll Product Item List",
  image: "./assets/img/multi-device-infinite-scroll-item-list.png",
  description: `
    <div class="text-justify">
      Front-end project implementing infinite scroll visualization of product items. 
      The user is able to preview list of all dynamically fetched product items, 
      preview details of every product item, bookmark product item as favorite, 
      apply filters to favorite product items.
    </div>
  `,
  features: [
    { content: "Implemented infinite scrolling for the visualization of product items", items: [] },
    { content: "Implemented the ability to preview details of each product item", items: [] },
    { content: "Implemented a feature to bookmark product items as favorites", items: [] },
    { content: "Implemented functionality to apply filters to favorite product items", items: [] },
  ] as Feature[],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">react-router-dom</span>`,
    `Integrated <span class="fw-bold">antd</span>`,
    `Integrated <span class="fw-bold">@ant-design/icons</span>`,
    `Integrated <span class="fw-bold">axios</span>`,
    `Integrated <span class="fw-bold">axios-mock-adapter</span>`,
    `Integrated <span class="fw-bold">react-redux</span>`,
    `Integrated <span class="fw-bold">@reduxjs/toolkit</span>`,
  ]
}