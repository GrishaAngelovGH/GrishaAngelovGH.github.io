import type { Feature } from "@data-types/feature"

export default {
  id: "web-motion-course",
  type: "HTML/CSS/JavaScript Project",
  title: "Motion Design for the Web Course",
  image: "./assets/img/device.png",
  description: `
    <div class="text-justify mb-2">
      This motion design course offers developers a comprehensive guide to integrating motion 
      seamlessly into web design projects. Covering a wide range of tools such as 
      CSS, JavaScript, GSAP, SVG, Lottie, and video, it equips participants with the knowledge 
      and skills to create dynamic and engaging web experiences. 
      The course blends theory with hands-on practice, taking learners through exercises like 
      building video-based hero sections, dropdown menus, image galleries, and advanced animations 
      such as typewriter effects and scroll-triggered motions. It emphasizes performance optimization, 
      the principles of motion design, and the practical application of these techniques in real-world scenarios.
    </div>

    <div class="text-justify mb-2">
      The course is provided by <a href="https://www.youtube.com/watch?v=vqXLGX0szIQ&list=WL&index=16&ab_channel=EnvatoTuts%2B">Adi Purdila @ EnvatoTuts</a>
    </div>
  `,
  features: [
    { content: "Product feature with video", items: [] },
    { content: "Hero section with video background", items: [] },
    { content: "Website header with transition", items: [] },
    { content: "Dropdown menu with transitions", items: [] },
    { content: "Image gallery with transitions", items: [] },
    { content: "Image accordion with transitions", items: [] },
    { content: "Loading screen with animation", items: [] },
    { content: "Site preloader with animation", items: [] },
    { content: "SVG text loader with animation", items: [] },
    { content: "Button with animated loading dots", items: [] },
    { content: "Animated Lottie icon", items: [] },
    { content: "Animated menu icon", items: [] },
    { content: "Animated illustration", items: [] },
    { content: "Animated avatars", items: [] },
    { content: "Animated logo", items: [] },
    { content: "Typewriter effect", items: [] },
    { content: "Mouse follow effect", items: [] },
    { content: "Scroll-triggered animation", items: [] },
    { content: "Parallax animation", items: [] }
  ] as Feature[],
  technologies: [
    `Used <span class="fw-bold">HTML</span>`,
    `Used <span class="fw-bold">CSS</span>`,
    `Used <span class="fw-bold">JavaScript</span>`,
    `Used <span class="fw-bold">Lottie</span>`,
    `Used <span class="fw-bold">GSAP</span>`,
  ]
}
