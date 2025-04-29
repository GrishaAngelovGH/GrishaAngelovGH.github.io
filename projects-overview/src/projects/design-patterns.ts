import type { Project } from "@data-types/project"

export default {
  id: "design-patterns",
  type: "JavaScript Project",
  title: "Implementations of Design Patterns",
  image: "./assets/img/device.png",
  description: `
    <div class="text-justify">
      Implemented all 23 classic design patterns as defined by the Gang of Four, categorizing them into creational, structural, and behavioral groups.
    </div>
  `,
  features: [
    {
      content: "Implemented creational patterns",
      items: [
        "Abstract Factory",
        "Builder",
        "Factory Method",
        "Prototype",
        "Singleton"
      ]
    },
    {
      content: "Implemented structural patterns",
      items: [
        "Adapter",
        "Bridge",
        "Composite",
        "Decorator",
        "Facade",
        "Flyweight",
        "Proxy"
      ]
    },
    {
      content: "Implemented behavioral patterns",
      items: [
        "Chain of Responsibility",
        "Command",
        "Interpreter",
        "Iterator",
        "Mediator",
        "Memento",
        "Observer",
        "State",
        "Strategy",
        "Template Method",
        "Visitor"
      ]
    },
  ],
  technologies: [
    `Used <span class="fw-bold">JavaScript</span>`
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/design-patterns-in-javascript",
} as Project