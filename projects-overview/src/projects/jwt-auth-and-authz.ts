import type { Project } from "@data-types/project"

export default {
  id: "jwt-auth-and-authz",
  type: "NodeJS/ReactJS Project",
  title: "JWT Authentication and Authorization App",
  image: "./assets/img/device-jwt-auth-and-authz.png",
  description: `
    <div class="text-justify mb-2">
      This project is a full-stack implementation of a secure system for 
      both <span class="fw-bold">authentication</span> and <span class="fw-bold">authorization</span> 
      using <span class="fw-bold">JSON Web Token (JWT)</span>. 
    </div>

    <div class="text-justify mb-2">
      The application is divided into two parts:
      <div><span class="fw-bold">Backend:</span> Built with Node.js, Express, and JWT for handling authentication and securing APIs.</div>
      <div><span class="fw-bold">Frontend:</span> Developed with ReactJS to provide a interface for login and secure access to protected routes.</div>
    </div>
  `,
  features: [
    {
      content: "Backend",
      items: [
        "Validate user credentials on Login",
        "Create new JWT on successful user credentials validation",
        "Defined JWT-protected endpoint"
      ]
    },
    {
      content: "Frontend",
      items: [
        "Publicly accessible login page",
        "JWT-protected client-side routes",
        "Perform user logout",
        "Fetch data from the JWT-protected endpoint"
      ]
    }
  ],
  technologies: [
    `label:Backend`,
    `The server is based on <span class="fw-bold">NodeJS</span>`,
    `Integrated <span class="fw-bold">body-parser</span>`,
    `Integrated <span class="fw-bold">cors</span>`,
    `Integrated <span class="fw-bold">express</span>`,
    `Integrated <span class="fw-bold">jsonwebtoken</span>`,
    `label:Frontend`,
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">react-router-dom</span>`,
    `Integrated <span class="fw-bold">jwt-decode</span>`
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/jwt-auth-and-authz-demo",
} as Project
