import type { Feature } from "@data-types/feature"

export default {
  id: "inventory-management-system",
  type: "ReactJS Project",
  title: "Inventory Management System",
  image: "./assets/img/multi-device-inventory-management-system.png",
  description: `
    <div class="text-justify">
      The Inventory Management System is designed to simplify the organization and tracking of 
      inventory, product categories, products, and sales. Key features include a dynamic dashboard 
      for quick insights such as total inventory value, sales metrics, and top-performing products. 
      Users can manage product categories with ease, including options to add, edit, or delete categories. 
      The system combines efficient tools and visualizations to support inventory operations and informed decision-making.
    </div>
  `,
  features: [
    {
      content: "Visualization of Dashboard",
      items: [
        "Total Inventory Value Widget",
        "Total Categories Widget",
        "Total Unique Products Widget",
        "Total Sales Widget",
        "Top 5 Products by Sales Visualization",
        "Latest Sales Visualization"
      ]
    },
    {
      content: "Product Categories Management",
      items: ["Add new category", "Edit category", "Delete category"]
    },
    {
      content: "Products Management",
      items: [
        "Add new product (name, category, quantity, buying price and selling price)",
        "Manage products for given category",
        "Color coded visualization for products based on quantity level",
        "Delete Product",
        "Low Stock Products Visualization"
      ]
    },
    {
      content: "Sales Management",
      items: [
        "Add new sale for a given product (name, selling price, quantity and date)",
        "Visualization of all sales",
        "Undo sale",
        "Download sales report as a PDF file"
      ]
    }
  ] as Feature[],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">tailwind css</span>`,
    `Integrated <span class="fw-bold">flowbite-react</span>`,
    `Integrated <span class="fw-bold">react-to-pdf</span>`,
  ]
}
