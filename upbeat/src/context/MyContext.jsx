import { createContext } from "react";

export const MyContext = createContext();

const clientImages = [
  {
    id: 0,
    src: "img/empire.png",
  },
  {
    id: 1,
    src: "img/sony.png",
  },
  {
    id: 2,
    src: "img/eye.png",
  },
  {
    id: 3,
    src: "img/Atlantic.png",
  },
  {
    id: 4,
    src: "img/warner.png",
  },
  {
    id: 5,
    src: "img/universal.png",
  },
  {
    id: 6,
    src: "img/Interscope.png",
  },
];
const socialImages = [
  {
    id: 0,
    name: "img/twitter.svg",
  },
  {
    id: 1,
    name: "img/instagram.svg",
  },
  {
    id: 2,
    name: "img/youtube.svg",
  },
];
const positions = [
  {
    id: 0,
    category: "general",
    role: "Human Resource Manager",
    location: "Los Angeles, CA",
  },
  {
    id: 1,
    category: "general",
    role: "Accountant, Intern",
    location: "Los Angeles, CA",
  },
  {
    id: 2,
    category: "general",
    role: "Office Manager",
    location: "Los Angeles, CA",
  },
  {
    id: 3,
    category: "general",
    role: "Content Writer",
    location: "Remote, Worldwide",
  },
  {
    id: 4,
    category: "engineering",
    role: "UX Engineer",
    location: "Remote, Worldwide",
  },
  {
    id: 5,
    category: "engineering",
    role: "Data Analyst",
    location: "Remote, Worldwide",
  },
  {
    id: 6,
    category: "engineering",
    role: "Data Analyst, Intern",
    location: "Remote, Worldwide", 
  },
  {
    id: 7,
    category: "engineering",
    role: "Mobile Developer",
    location: "Remote, Worldwide",
  },
  {
    id: 8,
    category: "engineering",
    role: "Front End Engineer, Intern",
    location: "Remote, Worldwide",
  },
  {
    id: 9,
    category: "new",
    role: "Head, West Africa",
    location: "Ghana, West Africa",
  },
  {
    id: 10,
    category: "new",
    role: "Artistes and Repertoire (A&R)",
    location: "Ghana, West Africa",
  },
];

export const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider value={{ clientImages, socialImages, positions }}>
      {children}
    </MyContext.Provider>
  );
};
