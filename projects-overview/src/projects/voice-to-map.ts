import type { Feature } from "@data-types/feature"

export default {
  id: "voice-to-map-visualization",
  type: "ReactJS Project",
  title: "Voice-To-Map Visualization",
  image: "./assets/img/multi-device-voice-to-map.png",
  description: `
    <div class="text-justify mb-2">
      This front-end project enables users to visualize geographical map locations through voice input. 
      By integrating voice recognition API, it offers a hands-free and intuitive way to explore and display map data. 
      Users can simply speak their desired location, and the system dynamically renders the corresponding geographical visualization, 
      providing a seamless and engaging experience.
    </div>

    <div class="text-justify mb-2">
      When the voice input is recorded it is passed for processing by <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API">Web Speech Recognition API</a>. 
      After the string representation is received then is passed to <a href="https://locationiq.com/geocoding">LocationIQ's Forward Geocoding Service</a>. 
      When the geocoordinates are received they are visualized as markers on the geographical map. 
      The user is able to see history with all visualized locations and some location suggestions.
    </div>
  `,
  features: [
    { content: "Visualization of geographical locations on a map based on user voice input", items: [] },
  ] as Feature[],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">@mui/material</span>`,
    `Integrated <span class="fw-bold">@mui/icons-material</span>`,
    `Integrated <span class="fw-bold">react-redux</span>`,
    `Integrated <span class="fw-bold">@reduxjs/toolkit</span>`,
    `Integrated <span class="fw-bold">axios</span>`,
    `Integrated <span class="fw-bold">react-leaflet</span>`,
    `Integrated <span class="fw-bold">react-toastify</span>`
  ]
}