import type { Feature } from "@data-types/feature"

export default {
  id: "ecommerce-store",
  type: "ReactJS Project",
  title: "E-commerce Store",
  image: "./assets/img/multi-device-grocery-store.png",
  description: `
    <div class="alert alert-warning" role="alert">
      Note: This project could be considered as a legacy codebase based on
      ReactJS 17 tested with enzyme library.
    </div>

    <div class="text-justify mb-2">
      This project provides the essential functionalities of an E-commerce store. 
      Users can browse and preview products organized by category, share their opinions by 
      posting comments on individual items, and efficiently manage their selections with a shopping bag feature. 
      The platform also includes a user-friendly, multi-step checkout process, allowing customers to complete their purchases with ease. 
    </div>
  `,
  features: [
    { content: "Home Page with various product related sections", items: [] },
    { content: "Change default language", items: ["Component level i18n", "Supported languages: BG, EN"] },
    { content: "Product preview by category", items: [`Currently is implemented for <a href="https://grocery-store.grishaangelov.vercel.app/#/category/all-cakes" target="_blank">only one category</a>`], isHTMLString: true },
    { content: "Full-size / Sidebar menu navigation based on user device", items: [] },
    { content: "Add products to shopping bag", items: [] },
    { content: "Post comments for every product in given category", items: [] },
    { content: "Preview products both in mini or full-size shopping bag", items: [] },
    { content: "Increment or decrement the quantity of given item", items: [] },
    { content: "Remove given item from shopping bag", items: [] },
    { content: "Perform the following steps in checkout process to complete order", items: ["Billing", "Shipping", "Payment", "Preview"] },
  ] as Feature[],
  technologies: [
    `Initial structure is created with <span class="fw-bold">create-react-app</span>`,
    `Integrated <span class="fw-bold">ReactJS 17</span>`,
    `Integrated <span class="fw-bold">prop-types</span>`,
    `Integrated <span class="fw-bold">react-router-dom</span>`,
    `Integrated <span class="fw-bold">redux</span>`,
    `Integrated <span class="fw-bold">react-redux</span>`,
    `Integrated <span class="fw-bold">redux-axios-middleware</span>`,
    `Integrated <span class="fw-bold">redux-persist</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">bootstrap-icons</span>`,
    `Integrated <span class="fw-bold">react-bootstrap</span>`,
    `Integrated <span class="fw-bold">axios</span>`,
    `Integrated <span class="fw-bold">axios-mock-adapter</span>`,
    `Integrated <span class="fw-bold">intro.js-react</span>`,
    `Integrated <span class="fw-bold">rc-steps</span>`,
    `Integrated <span class="fw-bold">react-final-form</span>`,
    `Integrated <span class="fw-bold">react-sidebar</span>`,
    `Integrated <span class="fw-bold">react-stars</span>`,
    `Integrated <span class="fw-bold">react-swipe</span>`,
    `Integrated <span class="fw-bold">react-to-pdf</span>`,
    `Integrated <span class="fw-bold">react-toastify</span>`,
    `Integrated <span class="fw-bold">sass</span>`,
    `Integrated <span class="fw-bold">sweetalert2</span>`,
    `Integrated <span class="fw-bold">mocha</span>`,
    `Integrated <span class="fw-bold">sinon js</span>`,
    `Integrated <span class="fw-bold">chai</span>`,
    `Integrated <span class="fw-bold">enzyme</span>`,
    `Integrated <span class="fw-bold">cypress.io</span>`
  ]
}
