// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo's
import jagranLogo from './assets/education_logo/jagran_logo.jpeg';
import heritageLogo from './assets/education_logo/Heritage_logo.png'
import RosebudsLogo from './assets/education_logo/roseBuds_logo.png'

// Project Section Logo's
import foodExpressLogo from './assets/work_logo/foodExpressLogo.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 1,
      img: jagranLogo,
      school: "Jagran College Of Arts, Science & Commerce, Kanpur",
      date: "Aug 2023 - May 2026",
      grade: "7.05 CGPA",
      desc: "I am currently pursuing my Bachelor's degree in Computer Application (BCA) and am in my final year (3rd year) from Jagran College Of Arts, Science & Commerce, Kanpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Jagran College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BCA ",
    },
    {
      id: 2,
      img: heritageLogo,
      school: "Heritage INTNL School, Kanpur",
      date: "Apr 2022 - March 2023",
      grade: "60.1%",
      desc: "I completed my class 12 education from Heritage International School, Kanpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Information Technology (percentage is calculated including all six subjects as per CBSE guidelines).",
      degree: "CBSE(XII) - PCM with Information Technology",
    },
    {
      id: 3,
      img: RosebudsLogo,
      school: "Rose Buds Sr Sec School, Kanpur",
      date: "Apr 2020 - March 2021",
      grade: "72.5%",
      desc: "I completed my class 10 education from Rose Buds Sr Sec School, Kanpur, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "FoodExpress - Food Delivery App",
      description: "A full-stack food delivery application built with React and Node.js, featuring restaurant listings, real-time shopping cart, and responsive design. Users can browse restaurants, view menus, and manage orders seamlessly across all devices.",
      image: foodExpressLogo,
      tags: ["React JS", "Node.js", "Express.js", "Redux", "Tailwind CSS", "JavaScript", "REST API"],
      github: "https://github.com/Sagarkhanna-dev/FoodExpress",
      webapp: "https://foodexpress-online.netlify.app",
    }
  ];  