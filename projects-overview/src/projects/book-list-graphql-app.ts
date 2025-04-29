import type { Project } from "@data-types/project"

export default {
  id: "book-list-graphql-app",
  type: "NodeJS/ReactJS Project",
  title: "Book List GraphQL App",
  image: "./assets/img/device-book-list-graphql-app.png",
  description: `
    <div class="text-justify mb-2">
      This is a full-stack application featuring a dynamic book list, developed using GraphQL and Apollo Client to enable interaction with book data. 
      It allows users to browse a list of books, add new entries to the list, 
      and view detailed information about a selected book, including its author's other works. 
      Additionally, users can delete books directly, ensuring efficient management of the book list. 
    </div>

    <div class="text-justify mb-2">
      The application is divided into two parts:
      <div><span class="fw-bold">Backend:</span> Built with Node.js, Express and Express-GraphQL</div>
      <div><span class="fw-bold">Frontend:</span> Built with ReactJS and Apollo Client, providing an interactive user interface and integration with GraphQL for data interaction</div>
    </div>
  `,
  features: [
    {
      content: "Backend",
      items: [
        "Loads the GraphQL schema against which the queries will be validated",
        "Sets up a GraphQL endpoint to handle all requests sent to the server"
      ]
    },
    {
      content: "GraphQL Schema",
      isHTMLString: true,
      items: [
        `
        <div class="p-1 rounded border border-2 list-card">
          <div class="mb-2 fw-bold">1. Dependencies and Data:</div>
          <div class="bg-secondary-subtle p-1 rounded">The implementation begins by importing necessary modules from the graphql library and defining two datasets—<span class="fw-bold">books</span> and <span class="fw-bold">authors</span>. These datasets simulate a database, holding information about books and their corresponding authors.</div>
        </div>
        `,
        `
        <div class="p-1 rounded border border-2 list-card">
          <div class="mb-2 fw-bold">2. GraphQL Types:</div>
          <div class="bg-secondary-subtle p-1 rounded">
            <div><span class="fw-bold">BookType:</span> Represents a book entity, including fields such as isbn, title, and author. The author field includes a resolver to fetch the associated author data by matching the authorId.</div>
            <div><span class="fw-bold">AuthorType:</span> Represents an author entity, with fields such as id, name, and books. The books field uses a resolver to retrieve all books authored by the individual.</div>
          </div>
        </div>
        `,
        `
        <div class="p-1 rounded border border-2 list-card">
          <div class="mb-2 fw-bold">3. RootQuery defines the entry points for querying data:</div>
          <div class="bg-secondary-subtle p-1 rounded">
            <div><span class="fw-bold">book:</span> Allows fetching a single book by its isbn.</div>
            <div><span class="fw-bold">author:</span> Enables retrieving an author by their id.</div>
            <div><span class="fw-bold">books:</span> Returns the full list of books.</div>
            <div><span class="fw-bold">authors:</span> Provides the complete list of authors.</div>
          </div>
        </div>
        `,
        `
        <div class="p-1 rounded border border-2 list-card">
          <div class="mb-2 fw-bold">4. Mutations:</div>
          <div class="bg-secondary-subtle p-1 rounded">
            <div>The schema defines several mutations for modifying data:</div>
            <div><span class="fw-bold">addAuthor:</span> Creates a new author with a generated id and an empty list of books. The author's data is added to the authors array.</div>
            <div><span class="fw-bold">addBook:</span> Adds a new book to the books array and associates it with an existing author by updating their books list.</div>
            <div><span class="fw-bold">deleteBook:</span> Removes a book from the books array and updates the corresponding author's books list to exclude the deleted book.</div>
          </div>
        </div>
        `,
        `
        <div class="p-1 rounded border border-2 list-card">
          <div class="mb-2 fw-bold">5. Resolvers:</div>
          <div class="bg-secondary-subtle p-1 rounded">
            <div>Resolvers are functions responsible for handling the logic of fetching or modifying data. For example:</div>
            <div>The author field in BookType fetches the author by authorId.</div>
            <div>The books field in AuthorType filters and returns books that belong to the specific author.</div>
          </div>
        </div>
        `,
        `
        <div class="p-1 rounded border border-2 mb-2 list-card">
          <div class="mb-2 fw-bold">6. Schema Definition:</div>
          <div class="bg-secondary-subtle p-1 rounded">The schema is defined using the GraphQLSchema object, which combines the RootQuery and Mutation objects. This setup allows for both querying and modifying data through the GraphQL API.</div>
        </div>
        `,
        `
        <div>
          This implementation follows a modular and scalable design, effectively simulating a backend for managing books and authors. 
          It provides essential CRUD operations while leveraging the flexibility and efficiency of GraphQL. 
        </div>
        `
      ]
    },
    {
      content: "Frontend",
      items: [
        "Implemented visualization of all books",
        "Implemented functionality to add new entries to the list",
        "Implemented visualization of detailed information about a selected book",
        "Implemented functionality to delete a given book"
      ]
    }
  ],
  technologies: [
    `label:Backend`,
    `The server is based on <span class="fw-bold">NodeJS</span>`,
    `Integrated <span class="fw-bold">cors</span>`,
    `Integrated <span class="fw-bold">express</span>`,
    `Integrated <span class="fw-bold">express-graphql</span>`,
    `label:Frontend`,
    `Initial structure is created with <span class="fw-bold">vite</span>`,
    `Integrated <span class="fw-bold">ReactJS</span>`,
    `Integrated <span class="fw-bold">bootstrap</span>`,
    `Integrated <span class="fw-bold">react-bootstrap</span>`,
    `Integrated <span class="fw-bold">@apollo/client</span>`,
    `Integrated <span class="fw-bold">graphql</span>`
  ],
  gitHubLink: "https://github.com/GrishaAngelovGH/graphql-app",
} as Project