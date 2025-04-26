import type { Feature } from "@data-types/feature"

export default {
  id: "handwritten-digit-recognition",
  type: "ReactJS Project",
  title: "Handwritten Digit Recognition",
  image: "./assets/img/multi-device-handwritten-digit-recognition.png",
  description: `
    <div class="text-justify">
      Front-end project implementing handwritten digit recognition based on tensorflow.js - a library that allows you to develop Machine Learning Models in JavaScript and use Machine Learning directly in the browser or in Node.js.
      This project uses predefined high accuracy data model (<a href="https://github.com/avinashkranjan/Amazing-Python-Scripts/tree/main/Hand-Written-Digit-Recognition/models">freely available on github</a>)
      The data model is generated with python script and is based on MNIST dataset that is a dataset of 60,000 small square 28×28 pixel grayscale images of handwritten single digits between 0 and 9.
    </div>
  `,
  features: [
    { content: "Implemented handwritten digit recognition with tensorflow.js", items: [] },
  ] as Feature[],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">bootstrap-icons</span>`,
    `Integrated <span class="fw-bold">@tensorflow/tfjs</span>`,
    `Integrated <span class="fw-bold">canvas</span>`,
    `Integrated <span class="fw-bold">chart.js</span>`,
    `Integrated <span class="fw-bold">react-chartjs-2</span>`,
    `Integrated <span class="fw-bold">react-toastify</span>`,
  ]
}