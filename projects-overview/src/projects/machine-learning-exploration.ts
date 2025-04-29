import type { Project } from "@data-types/project"

export default {
  id: "machine-learning-exploration",
  type: "JavaScript Project",
  title: "Machine Learning Exploration",
  image: "./assets/img/device.png",
  description: `
    <div class="text-justify">
      This project is an exploration of fundamental machine learning algorithms, 
      aimed at delving into their concepts and underlying principles. 
      It features notes that are trying to explain the algorithms in a simple way, 
      complemented by practical examples to demonstrate their real-world application. 
    </div>
  `,
  features: [
    { content: "Implemented Linear Regression", items: [] },
    { content: "Implemented Logistic Regression", items: [] },
    { content: "Implemented K-Nearest Neighbors (K-NN)", items: [] },
    { content: "Implemented Naive Bayes Classifier", items: [] },
    { content: "Implemented Decision Trees", items: [] },
    { content: "Implemented K-Means Clustering", items: [] },
    { content: "Implemented Gradient Descent", items: [] },
    { content: "Implemented Feature Scaling", items: [] },
    { content: "Implemented Principal Component Analysis", items: [] },
    { content: "Implemented Recommender Systems", items: [] }
  ],
  technologies: [
    `Used <span class="fw-bold">JavaScript</span>`,
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/machine-learning-exploration",
} as Project