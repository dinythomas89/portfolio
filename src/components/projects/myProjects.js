import artGalleria from "../../assests/artGallery.png";
import photoGallery from "../../assests/nextjs.png";
import mealSharing from "../../assests/mealSharing.png";
import rediTalentPool from "../../assests/rediTalentPool.png";

export const myProjects = [
  {
    name: "Galleria",
    delay: "500",
    link: "https://github.com/dinythomas89/galleria",
    live: "",
    stacks: "TypeScript, React, Styled Components, Zustand",
    image: artGalleria,
    description:
      "An art gallery where you can find the masterpieces of famous paintors",
  },
  {
    name: "Photo Gallery",
    delay: "1000",
    link: "https://github.com/dinythomas89/YourPhotos",
    live: "https://dinythomas89.github.io/todo-list/",
    stacks: "React, CSS",
    image: photoGallery,
    description: "A simple next.js 13.4 app to display user profile.",
  },
  {
    name: "Meal-Sharing",
    delay: "1500",
    link: "https://github.com/dinythomas89/meal-sharing",
    live: "https://diny-meal-sharing.herokuapp.com/",
    stacks: "React, CSS, Nodejs, MySQL, Herokku",
    image: mealSharing,
    description: "A simple website where you can share your meals.",
  },
  {
    name: "ReDI Talent Pool",
    delay: "2000",
    link: "https://www.figma.com/file/OBKlmq25UQljuYyzuWNcVR/Talent-Pool?node-id=38%3A97",
    live: "https://www.figma.com/proto/OBKlmq25UQljuYyzuWNcVR/Talent-Pool?node-id=59%3A372&scaling=scale-down&page-id=38%3A97&starting-point-node-id=59%3A372",
    stacks: "Figma",
    image: rediTalentPool,
    description:
      "Figma design for the ReDI school Talent Pool which helps their students to find job openings and to apply.",
  },
];
