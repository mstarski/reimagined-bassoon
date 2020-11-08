import { Technology } from "../shared/typedefs";
import { MOCK_DESCRIPTION } from "./constants";

export const MockTechnologies: Technology[] = [
  {
    name: "React",
    logo:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F800px-React-icon.svg.png&f=1&nofb=1",
    description: MOCK_DESCRIPTION,
  },

  {
    name: "Angular",
    logo:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcf%2FAngular_full_color_logo.svg%2F1200px-Angular_full_color_logo.svg.png&f=1&nofb=1",
    description: MOCK_DESCRIPTION,
  },
  {
    name: "NodeJS",
    logo:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd9%2FNode.js_logo.svg%2F1280px-Node.js_logo.svg.png&f=1&nofb=1",
    description: MOCK_DESCRIPTION,
  },
];
