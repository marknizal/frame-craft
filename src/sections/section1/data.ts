import Img2 from "../../assets/image-2.webp";
import Img3 from "../../assets/image-3.webp";
import Img4 from "../../assets/image-4.png";

import A1 from "../../assets/A1.jpg";
import A2 from "../../assets/A2.jpg";
import A3 from "../../assets/A3.jpg";
import A4 from "../../assets/A4.jpg";
import A5 from "../../assets/A5.jpg";

export const data = {
  task: {
    title: "Task Management",
    desc: "Assign, track, and complete tasks with ease.",
    img: Img2,
  },

  cards: [
    {
      key: "workflows",
      title: "Workflows",
      desc: "Tailor tools to fit your team’s unique needs.",
      img: Img3,
    },
    {
      key: "tracking",
      title: "Tracking",
      desc: "Monitor milestones and stay on schedule.",
      img: Img4,
    },
  ],

  collab: {
    title: "Collaboration",
    desc: "Work together effortlessly, no matter where you are.",
    avatars: [A1, A2, A3, A4, A5],
  },
};
