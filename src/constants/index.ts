import { react } from "../assets";

interface Links {
  href: string;
  name: string;
}

interface Blog {
  img: string;
  title: string;
  description: string;
}

export const links: Links[] = [
  { href: "/login", name: "login" },
  { href: "/register", name: "register" },
  { href: "/new", name: "Post blog" },
];

export const blogs: Blog[] = [
  {
    img: react,
    title: "React 19 is Here!!",
    description:
      "React 19 speeds up web development, making it more efficient and less complex, from coding to deployment. To upgrade, evaluate your current app, make changes incrementally, utilize tools like codemods, conduct thorough testing, and activate Strict Mode for compatibility assurance. The investment results in improved performance and simplified maintenance.",
  },
  {
    img: react,
    title: "React 19 is Here!!",
    description:
      "React 19 speeds up web development, making it more efficient and less complex, from coding to deployment. To upgrade, evaluate your current app, make changes incrementally, utilize tools like codemods, conduct thorough testing, and activate Strict Mode for compatibility assurance. The investment results in improved performance and simplified maintenance.",
  },
  {
    img: react,
    title: "React 19 is Here!!",
    description:
      "React 19 speeds up web development, making it more efficient and less complex, from coding to deployment. To upgrade, evaluate your current app, make changes incrementally, utilize tools like codemods, conduct thorough testing, and activate Strict Mode for compatibility assurance. The investment results in improved performance and simplified maintenance.",
  },
];
