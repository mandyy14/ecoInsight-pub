import { Slide, Slide1 } from "./types";

import Avatar1 from "../../assets/images/avatars/img-8.jpg";
import Amazon from "../../assets/images/brands/amazon.svg";

import saas from "../../assets/images/saas.jpg";
import saas2 from "../../assets/images/saas2.png";
import saas3 from "../../assets/images/saas3.png";

const slides: Slide[] = [
  {
    statement:
      " This app is a truly blessing for all professionals! A day to day project management was never easy for me.But with prompt, I can manage more than 100 projects easily.",
    customer: {
      avatar: Avatar1,
      name: "Cersei Lannister",
      designation: "Senior Project Manager",
    },
    logo: Amazon,
  },
];

const slides1: Slide1[] = [
  {
    image: saas,
    slideTitle: "Manage your saas business with ease",
    description:
      "Make your saas application stand out with high-quality landing page designed and developed by professional.",
  },
  {
    image: saas2,
    slideTitle: "The best way to showcase your mobile app",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    image: saas3,
    slideTitle: "Smart Solution that convert Lead to Customer",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
];

export { slides, slides1 };
