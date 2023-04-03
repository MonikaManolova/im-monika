// PROJECT COVERS - - - - - - - -
import shakeThatIconProjectCover from "./assets/projects-covers/sh-that-ic-project-cover.png";
import iamSlotyProjectCover from "./assets/projects-covers/sloty-video-downsize.mp4";
import contactGuardProjectCover from "./assets/projects-covers/contact-guard-project-cover.png";
import biankiProjectCover from "./assets/projects-covers/bianki-project-cover.png";
import casinobleProjectCover from "./assets/projects-covers/casinoble-project-cover.png";
import slototopProjectCover from "./assets/projects-covers/slototop-project-card.png";
import soMuchTastyProjectCover from "./assets/projects-covers/so-much-tasty-project-card.png";
import casinolandiaProjectCover from "./assets/projects-covers/casinolandia-project-card.png";
// DETAILED COVERS - - - - - - - -
import shakeThatIconDetailedCover from "./assets/detailed-covers/sh-that-icon-detailed-cover.png";
import iamSlotyDetailedCover from "./assets/detailed-covers/iam-sloty-detailed-cover.png";
import biankiDetailedCover from "./assets/detailed-covers/bianki-detailed-cover.png";
import contactGuardDetailedCover from "./assets/detailed-covers/contact-guard-detailed-cover.png";
import casinobledDetailedCover from "./assets/detailed-covers/casinoble-detailed-cover.png";

export const projects = [
  {
    name: "Shake that Icon",
    category: "Interactive library",
    roles: [
      "UI/UX Design",
      "Branding Design",
      "Illustrations",
      "2D Motion Design",
      "Frontend Development",
      "SVG Animations",
    ],
    coverImage: shakeThatIconProjectCover,
    detailedCover: shakeThatIconDetailedCover,
    technologies:
      "Figma, Adobe Illustrator, Adobe After Effects, SVGator, React JS, React Bootstrap, React-color, Styled-components...",
    path: "/shake-that-icon",
    description: `<p>
    “Shake that Icon” is an interactive library with animated
    Icons, which are easy to manipulate and integrate into your project
    as simple as copy-paste.
    </p>
    <p>
    The first of its kind animated SVG icons. They don’t need
    third-party libraries to run the animation and they don’t required
    code knowledge. You can edit and manipulate all of the icons
    directly in the web-app. You can download and integrate them into
    your project in several formats.
    </p>`,
    background: "#0C0C0E",
    projectAvailable: true,
  },
  {
    name: "I am Sloty",
    category: "Online Casino",
    roles: [
      "UI/UX Design",
      "Branding Design",
      "Illustrations",
      "2D Motion Design",
      "SVG Animations",
    ],
    coverImage: iamSlotyProjectCover,
    detailedCover: iamSlotyDetailedCover,
    technologies:
      "Adobe Illustrator, Adobe Photoshop, Figma, SVGator, Adobe After Effects",
    path: "/iam-sloty",
    description: `<p>
    “I am Sloty” is an innovative online Casino, where you can play a bunch of slot games, live games and win bonuses.
    </p>
    <p>
    Its goal is to create additional value for users and bring extra emotions through social interactions and following.
    </p>`,
    background: "#0F0D32",
    projectAvailable: true,
  },
  {
    name: "BIANKI",
    category: "Shoes store",
    roles: ["UI/UX Design", "Interactive Prototype"],
    coverImage: biankiProjectCover,
    detailedCover: biankiDetailedCover,
    technologies: "Figma, Adobe Photoshop",
    path: "/bianki",
    description: `<p>
    “Binaki” is a dynamically growing company that has established itself in the shoe market in a very short time.
    </p>
    <p>
    They asked to redesign their website and improve user experience. The result is clean and fresh design without unnecessary noise.
    It’s easy to navigate throughout the site and find products.
    </p>`,
    background: "#0B0B0D",
    projectAvailable: true,
  },
  {
    name: "Contact Guard",
    category: "Data protection app",
    roles: ["UI/UX Design", "App Design", "Illustrations"],
    coverImage: contactGuardProjectCover,
    detailedCover: contactGuardDetailedCover,
    technologies: "Figma, Adobe Illustrator",
    path: "/contact-guard",
    description: `<p>
    “Contact Guard” is the contact security service that will protect your personal address book so that 
    your email and phone number remain private and you control who has the ability to contact you.
    </p>
    <p>
    Contacts are not something that can be bought and sold by mobile app developers, 
    they are friends and family and our connection with the world. With the help of “Contact Guard” we can protect them.
    </p>`,
    background: "#161616",
    projectAvailable: true,
  },
  {
    name: "Casinoble",
    category: "Affiliate",
    roles: [
      "Branding Design",
      "Illustrations",
      "Character Design",
      "2D Motion Design",
    ],
    coverImage: casinobleProjectCover,
    detailedCover: casinobledDetailedCover,
    technologies: "Figma, Adobe Illustrator, Adobe After Effects",
    path: "/casinoble",
    description: `<p>
    “Casinoble” is affiliate website and premier destination for people who gamble online in Canada. 
    They focus on bringing the best betting sites and gambling tips to players.
    </p>
    <p>
    “Casinoble” is like an illustrative book. Every page has its own graphic, that represents the topic of the page. 
    For this project I made more than 45 header illustrations and much more sections graphics.
    </p>`,
    background: "#0B0A47",
    projectAvailable: true,
  },
  {
    name: "Slototop",
    category: "Gambling",
    roles: ["UI/UX Design", "Branding Design"],
    coverImage: slototopProjectCover,
    path: "/shake-that-icon",
    projectAvailable: false,
  },
  {
    name: "So Much Tasty",
    category: "Organic food",
    roles: ["UI/UX Design", "Branding Design"],
    coverImage: soMuchTastyProjectCover,
    path: "/shake-that-icon",
    projectAvailable: false,
  },
  {
    name: "Casinolandia",
    category: "Affiliate",
    roles: ["Branding Design", "Illustrations"],
    coverImage: casinolandiaProjectCover,
    path: "/shake-that-icon",
    projectAvailable: false,
  },
];

export const colors = {
  neutral: {
    black_100: "#111110",
    black_90: "#1F1E1C",
    white: "#FFFFFF",
  },
  accent: {
    neon_green: "#E0FF23",
    noeon_orange: "#FF7C58",
    beige: "#E0D7CA",
  },
};
