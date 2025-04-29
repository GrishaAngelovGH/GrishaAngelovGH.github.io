import type { Project } from "@data-types/project"

export default {
  id: "react-admin-dashboard",
  type: "ReactJS Project",
  title: "React-Admin Dashboard",
  image: "./assets/img/device-react-admin.png",
  description: `
    <div class="text-justify">
      This project is built with React-Admin, a robust framework for creating modern admin interfaces. 
      It demonstrates a fully-featured admin panel with resource management, dynamic internationalization, and a responsive layout.
    </div>
  `,
  features: [
    {
      content: "Dynamic Resource Management",
      items: [
        "The application uses React-Admin's Resource component to define and manage resources such as posts, users, comments, and images",
        "Each resource supports essential CRUD operations, including list, create, edit, and show views"
      ]
    },
    {
      content: "Localization",
      items: [
        "Utilizes React-Admin’s i18nProvider for multilingual support, enabling dynamic translation of labels and content",
        "The useTranslate hook is leveraged for inline translations, ensuring seamless integration of localized text"
      ]
    },
    {
      content: "Authentication",
      items: ["Secures the admin interface with a customizable authProvider"]
    },
    {
      content: "Customizable Dashboard",
      items: ["Features a HomePage component as the dashboard, providing a centralized overview"]
    },
    {
      content: "Thematic and Customizable Layout",
      items: ["Uses a custom Layout component for consistent branding and navigation"]
    }
  ],
  technologies: [
    `Initial structure is created with <span class="fw-bold">create-react-admin</span> to quickly bootstrap a react-admin project using vite`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">react-router-dom</span>`,
    `Integrated <span class="fw-bold">react-admin</span>`,
    `Integrated <span class="fw-bold">ra-data-json-server</span>`,
    `Integrated <span class="fw-bold">ra-i18n-polyglot</span>`,
    `Integrated <span class="fw-bold">ra-language-bulgarian</span>`,
    `Integrated <span class="fw-bold">@emotion/react</span>`,
    `Integrated <span class="fw-bold">@emotion/styled</span>`,
    `Integrated <span class="fw-bold">@mui/icons-material</span>`,
    `Integrated <span class="fw-bold">@mui/material</span>`
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/react-admin-dashboard",
} as Project