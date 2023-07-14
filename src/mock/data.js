import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm`,
  name: 'Vlad.',
  subtitle: `I'm a upcoming Frontend developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `I'm 24, I am madly in love with programming, in my free time from programming I do sports and read literature that helps me become better as a developer. Always glad to meet new people.`,
  paragraphTwo: 'My current stack: HTML5, CSS3/Scss, JavaScript, React/Redux.',
  paragraphThree: ' ',
  resume: 'https://www.dropbox.com/s/n0sp7gddjt8a2fh/Resume_Stan_Frontend.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'crwn-clothing.jpg',
    title: 'Crwn-Clothing - E-commerce clothes store',
    info: `A fictional online clothing store made with React and Firestore for data storage. Features include: user authentication, shopping cart, checkout & data persistence.`,
    info2:
      'Stack: React/Redux, Redux-Saga, Redux-Persist, react-router-dom, Styled Components, Firebase',
    url: 'https://clothingcrwnstore.netlify.app/',
    repo: 'https://github.com/one-way7/crwn-clothing',
  },
  {
    id: nanoid(),
    img: 'forkify.jpg',
    title: 'Forkify - A Recipe Finding Web app',
    info: `Forkify is a vanilla JavaScript application that interacts with the food2fork API to fetch and display recipe food data. This app uses modern JavaScript tools, such as Parcel to bundle the modules, and Babel to convert ES6, ES7 and ES8 back to ES5. The user can search for a specific recipe, or add your own recipes and save to a favorites list via local storage. This project was developed during the training course.`,
    info2: 'Stack: HTML5, CSS3/Scss, JavaScript',
    url: 'https://forkify-recipe7.netlify.app/',
    repo: 'https://github.com/one-way7/forkify', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'marvel-db.jpg',
    title: 'Marvel Database',
    info: 'Marvel Database is a SPA that interacts with the Marvel API to fetch and display heroes and comics and allows you to find information on any character or comic book from the Marvel universe. This project was developed during the training course.',
    info2: 'Stack: React, CSS3/Scss, react-router v6, Formik, yup, react-transition-group.',
    url: 'https://marvel-db7.netlify.app/',
    repo: 'https://github.com/one-way7/marvel-db', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mailto:vladislav.work98@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/one-way7',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
