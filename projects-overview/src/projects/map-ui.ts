import type { Project } from "@data-types/project"

export default {
  id: "map-ui",
  type: "ReactJS Project",
  title: "Map UI Visualization",
  image: "./assets/img/multi-device-map-ui.png",
  description: `
    <div class="text-justify">
      The Map UI Visualization project is designed to offer an interactive platform for 
      visualizing geographic and specific data. Core features include the ability 
      to render detailed geographical map, display specific locations, map routes, and 
      visualize traffic reports. Users can view routes as animated sequences of locations, 
      enabling an immersive exploration experience. A standout aspect of the project is its 
      focus on London-based data, which includes visualization of boroughs, underground stations, 
      and GeoJSON representations of the London area.
    </div>
  `,
  features: [
    { content: "Visualization of geographical map", items: [] },
    { content: "Visualization of locations on the map", items: [] },
    { content: "Visualization of route on the map", items: [] },
    { content: "Visualization of traffic report", items: [] },
    { content: "Playable animation of route as sequence of locations", items: [] },
    { content: "Visualize London area and its boroughs based on GeoJSON data", items: [] },
    { content: "Visualization of EV Charge History with summary, measures and charging points", items: [] },
    { content: "Visualization of EV Stations Near You", items: [] },
    { content: "Visualization of favorite places with provided summary details", items: [] },
    { content: "Visualization of 140+ locations of London underground stations", items: [] },
    {
      content: "Visualization of all London boroughs as list", items: [
        "View given borough on the map",
        "Save or remove given borough as favorite (persistent data)",
        "Select view of all/favorites boroughs",
        "Sort boroughs by id, name or area",
        "Search borough by name",
      ]
    },
    { content: "Visualization of StreetView (Mapillary)", items: [] }
  ],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">react-bootstrap</span>`,
    `Integrated <span class="fw-bold">react-leaflet</span>`,
    `Integrated <span class="fw-bold">react-leaflet-markercluster</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">bootstrap-icons</span>`,
    `Integrated <span class="fw-bold">leaflet</span>`,
    `Integrated <span class="fw-bold">leaflet.motion</span>`,
    `Integrated <span class="fw-bold">mapillary-js</span>`,
    `Integrated <span class="fw-bold">scss</span>`
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/map-ui",
  liveDemoLink: "https://map-ui-grishaangelovs-projects.vercel.app/",
} as Project
