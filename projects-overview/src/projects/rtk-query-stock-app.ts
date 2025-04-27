import type { Feature } from "@data-types/feature"

export default {
  id: "rtk-query-stock-app",
  type: "ReactJS Project",
  title: "RTK Query Stock Demo",
  image: "./assets/img/device-rtk-query-stock-app.png",
  description: `
    <div class="text-justify mb-2">
      This is a full-stack demo project that provide real-time stock visualization 
      using RTK Query and WebSockets. It showcases hands-on experience with the RTK Query data 
      fetching tool and its Streaming Updates feature, integral components of the Redux Toolkit library. 
      It demonstrates the seamless integration of real-time data streams into a frontend application.
    </div>

    <div class="text-justify mb-2">
      The application is divided into two parts:
      <div><span class="fw-bold">Backend:</span> WebSocket server that continuously generates simulated stock data at regular intervals. The server sends updates, including stock names, current values, and previous values, to connected clients via WebSocket communication.</div>
      <div><span class="fw-bold">Frontend:</span> ReactJS-based client application that visualizes the incoming stock data. Using RTK Query, the app efficiently handles data fetching and displays real-time stock updates.</div>
    </div>
  `,
  features: [
    {
      content: "Backend",
      items: [
        "Handles real-time connections with clients",
        "Generates randomized stock data e.g. name, current value, previous value at regular intervals",
        "Sends serialized stock data to all connected clients via WebSocket in JSON format"
      ]
    },
    {
      content: "Frontend",
      items: [
        "Dynamic display of stock details e.g. name, current value, previous value",
        "Uses useGetStockDataQuery() to fetch and manage real-time stock data updates",
        "Visualization of real-time value change indicators to highlight stock price changes",
      ]
    }
  ] as Feature[],
  technologies: [
    `label:Backend`,
    `The server is based on <span class="fw-bold">NodeJS</span>`,
    `Integrated <span class="fw-bold">express</span>`,
    `Integrated <span class="fw-bold">cors</span>`,
    `Integrated <span class="fw-bold">ws</span>`,
    `label:Frontend`,
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">react-redux</span>`,
    `Integrated <span class="fw-bold">@reduxjs/toolkit</span>`
  ]
}