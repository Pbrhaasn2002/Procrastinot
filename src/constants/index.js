import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "What we offer",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "pomodoro",
    title: "Pomodoro",
    route: "/pomodoro",
  },
  {
  id: "flashcards",
  title: "Flashcards",
  route: "/flashcards",
  },

];

const services = [

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Ace Your Memory Game with Flashcards",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Tired of forgetting key terms or concepts right before the test? Our flashcard tool is here to save the day! Create, customize, and review flashcards that make studying interactive and fun. Say goodbye to boring, static notes and hello to a smarter way of learning.",
    ],
  },
  {
    title: "Focus Like a Pro with Pomodoro Timers",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Struggling to stay focused while studying? Our Pomodoro timers help you break your tasks into manageable chunks, giving you the perfect balance of work and rest. Boost your productivity, stay consistent, and actually enjoy the process of ticking off your study goals!",
    ],
  },
  {
    title: "Stay Organized with To-Do Lists",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "Juggling assignments, projects, and exams? Our intuitive to-do lists help you keep track of everything in one place. Plan your day, prioritize tasks, and never miss a deadline again – because staying organized doesn’t have to be a chore."
    ],
  },
  {
    title: "Build Better Habits with Habit Trackers",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Whether it’s reading daily, exercising, or sticking to a study schedule, our habit tracker makes it easier to stay on track. Celebrate your progress, build routines that last, and turn small wins into life-changing habits.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "This website is a total game-changer! The flashcards helped me ace my exams, and the Pomodoro timer kept me focused for longer study sessions. I’ve never been this productive before!",
    name: "Sara Lee",
    designation: "Engineering Student",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I love how everything I need is in one place – from organizing my tasks to tracking my habits. It’s like having a personal assistant for my studies. Highly recommend it to all students!",
    name: "Chris Brown",
    designation: "MBA Student",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The quirky design and easy-to-use tools make studying fun! I use the habit tracker every day, and it’s helped me stay consistent with my goals. This site is a lifesaver!",
    name: "Lisa Wang",
    designation: "Medical",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
