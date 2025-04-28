import type { Feature } from "@data-types/feature"

export default {
  id: "chart-js-carousel",
  type: "HTML/CSS/JavaScript Project",
  title: "Chart.js Carousel",
  image: "./assets/img/multi-device-chart-js-carousel.png",
  description: `
    <div class="text-justify">
      This project provides a practical approach to Chart.js and Swiper libraries. 
      By integrating these tools, it delivers a dynamic collection of charts 
      that visualize graphical data and offer chart interactions. 
    </div>
  `,
  features: [
    {
      content: "Visualized charts",
      items: [
        "Line Area Chart",
        "Radar Area Chart",
        "Vertical Bar Chart",
        "Horizontal Bar Chart",
        "Bubble Chart",
        "Doughnut Chart",
        "Pie Chart",
        "Mixed Charts",
        "Polar Area Chart",
        "Radar Chart"
      ]
    },
  ] as Feature[],
  technologies: [
    `Integrated <span class="fw-bold">chart.js</span>`,
    `Integrated <span class="fw-bold">swiper</span>`,
    `Integrated <span class="fw-bold">parcel</span>`
  ]
}