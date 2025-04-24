export default {
  id: "kanban-board",
  type: "ReactJS Project",
  title: "Kanban Board",
  image: "./assets/img/multi-device-kanban-board.png",
  description: `
    This front-end project is a comprehensive task management system designed to enhance 
    collaboration and streamline workflows. It allows users to create and manage board, 
    columns, and tasks with features like rich text descriptions, task prioritization, 
    and dependency management. Collaboration is effortless with task assignment, 
    visualization of all collaborators, and dynamic features like "Unassign Me" and 
    "Leave Only Me." 

    Customization and insights take center stage with options for personalized layouts, 
    column styles, and backgrounds, along with dashboards and cards displaying task metrics, 
    activity, and progress. Additional utilities include drag-and-drop functionality, 
    keyboard shortcuts, export/import capabilities, and a history to restore deleted data.
  `,
  features: [
    { content: "Auto-generate sample board", items: [] },
    {
      content: "Create new column with title and optional description",
      items: [],
    },
    { content: "Clear board", items: [] },
    { content: "Provide board title", items: [] },
    {
      content:
        "Edit column's title and description based on editable text feature",
      items: [],
    },
    { content: "Reorder columns", items: [] },
    {
      content: "Create new task for given column",
      items: [
        "Provide title",
        "Provide rich text description i.e. bold, italic, underlined text, numbered/bullet lists, etc",
        "Provide priority i.e. low, medium or high",
      ],
    },
    { content: "Filter tasks by priority", items: [] },
    {
      content:
        "Create predefined templates that could be used as descriptions for given tasks",
      items: [],
    },
    { content: "Manage dependency tasks", items: [] },
    { content: "Activate/deactivate a given task", items: [] },
    { content: "Group all templates in a dedicated column", items: [] },
    {
      content: "Visualize number of tasks for a given column",
      items: [],
    },
    {
      content: "Visualize progress (active tasks) for a given column",
      items: [],
    },
    {
      content:
        "Mark/unmark column as 'done' i.e. all tasks in the column will be visualized as completed",
      items: [],
    },
    { content: "Delete column", items: [] },
    { content: "Delete all tasks for a given column", items: [] },
    { content: "Clear all columns without a tasks", items: [] },
    {
      content: "Provide optional limit of tasks for a given column",
      items: [],
    },
    { content: "Delete task", items: [] },
    { content: "Assign users to a given task", items: [] },
    { content: "Auto-assign users to a given task", items: [] },
    { content: "Remove all assigned users to a given task", items: [] },
    { content: "Remove all assigned users to a given task", items: [] },
    {
      content: "Visualize all assigned tasks to a given user",
      items: [
        "Visualize all collaborators",
        "'Unassign Me' feature",
        "'Leave Only Me' feature",
      ],
    },
    { content: "Edit task", items: [] },
    { content: "Move tasks between columns with drag & drop", items: [] },
    {
      content: "Change the position of a task in a given column",
      items: [],
    },
    { content: "Toggle fullscreen view", items: [] },
    { content: "Visualize calendar", items: [] },
    { content: "Export/import board as JSON", items: [] },
    { content: "Manage users", items: [] },
    { content: "Manage users", items: [] },
    {
      content: "Visualize Dashboard with Cards",
      items: [
        "Tasks Per Member Card",
        "Tasks Per Column Card",
        "Tasks Per Priority Card",
        "Tasks Activity Card",
      ],
    },
    {
      content:
        "Visualize history that stores deleted data when performing column/task deletion",

      items: ["restore/delete columns and tasks"],
    },
    {
      content: "Customize settings",
      items: [
        "Choose background - nature, geometric or no background",
        "Choose layout - grid view, single column view or single row view",
        "Choose column style - solid or blurred",
      ],
    },
    {
      content: "Keyboard Shortcuts",
      isHTMLString: true,
      items: [
        `Press <kbd class="bg-primary">Ctrl</kbd> + <kbd class="bg-primary">G</kbd> to auto-generate board`,
        `Press <kbd class="bg-primary">Ctrl</kbd> + <kbd class="bg-primary">I</kbd> to create new column`,
        `Press <kbd class="bg-primary">Ctrl</kbd> + <kbd class="bg-primary">L</kbd> to clear board`,
      ],
    },
  ],
  technologies: [
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">react-bootstrap</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">bootstrap-icons</span>`,
    `Integrated <span class="fw-bold">react-calendar</span>`,
    `Integrated <span class="fw-bold">react-chartjs-2</span>`,
    `Integrated <span class="fw-bold">react-highlight-words</span>`,
    `Integrated <span class="fw-bold">dnd-kit/core</span>`,
    `Integrated <span class="fw-bold">html-react-parser</span>`,
    `Integrated <span class="fw-bold">react-simple-wysiwyg</span>`,
    `Integrated <span class="fw-bold">hotkeys-js</span>`,
  ],
}