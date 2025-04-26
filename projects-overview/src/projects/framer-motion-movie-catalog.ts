import type { Feature } from "@data-types/feature"

export default {
  id: "framer-motion-movie-catalog",
  type: "ReactJS Project",
  title: "Framer Motion Movie Catalog",
  image: "./assets/img/multi-device-framer-motion-movie-catalog.png",
  description: `
    <div class="text-justify mb-2">
      The Framer Motion Movie Catalog is a dynamic application that showcases hands-on experience 
      with the Framer Motion library. This app presents the movie catalog in a more dynamic way with animated 
      visualizations. Users can explore a list of movies, bookmark favorites, and view information about each movie.
    </div>

    <div class="text-justify mb-2">
      The Experiences section offers a curated selection of best-selling combo products, 
      such as foods and drinks. Users can seamlessly add these items to their cart, manage 
      quantities, and remove items as needed — offering a smooth and interactive shopping experience.
    </div>

    <div class="text-justify mb-2">
      Additionally, the app features a Showtimes section, allowing users to browse available 
      cinemas and preview movies scheduled to start at specific times. With its animations and 
      user-friendly design, this app is a practical demonstration of Framer Motion's versatility, 
      providing an enjoyable experience.
    </div>
  `,
  features: [
    { content: "Visualization of animated movie catalog", items: [] },
    { content: "Bookmark favorite movies", items: [] },
    { content: "View information about each movie", items: [] },
    { content: "Add combo products to shopping cart, manage quantities and remove items", items: [] },
    { content: "Browse available cinemas and preview movies scheduled to start at specific times", items: [] },

  ] as Feature[],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">tailwind css</span>`,
    `Integrated <span class="fw-bold">framer-motion</span>`,
    `Integrated <span class="fw-bold">fast-average-color</span>`,
    `Integrated <span class="fw-bold">react-responsive-carousel</span>`
  ]
}