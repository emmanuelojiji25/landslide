import Hero from "../Sections/Hero";
import { HeroSettings } from "../Sections/Hero";

export const landingPageSections = [
  {
    name: "hero",
    id: 1,
    type: "hero",
    title: "Landing page template",
    subheading: "Hero Subheading",
    style: {
      alignItems: "left",
    },
    component: Hero,
    settingsComponent: HeroSettings,
  },

  {
    name: "about us",
    id: 2,
    type: "aboutUs",
    title: "About us",
    text: "We are a great company",
  },
  {
    name: "about us",
    id: 3,
    type: "aboutUs",
    title: "About us",
    text: "We are a great company",
  },
];
