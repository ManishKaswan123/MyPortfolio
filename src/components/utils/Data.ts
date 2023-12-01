import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
} from 'lucide-react';

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'Food App',
    techStack: 'React JS, Express JS, Javascript, React-redux, Nodemailer, Stripe, Multer, MongoDB',
    imageUrl: 'FoodApp.png',
    href: 'https://glittery-phoenix-690207.netlify.app/',
  },
  {
    id: 2,
    title: 'Movix',
    techStack:
      'React JS, SASS, Javascript, React-redux, Day JS, React-infinite-scroll-component',
    imageUrl: 'Movix.png',
    href: 'https://movix-cyan-nu.vercel.app/',
  },
  {
    id: 3,
    title: 'Expense-Tracker',
    techStack:
      'React Js, HTML, CSS, Javascript',
    imageUrl: 'Expense-Tracker.png',
    href: 'https://calm-trifle-4ea571.netlify.app/',
  },
  {
    id: 4,
    title: 'Robofriends',
    techStack: 'HTML, CSS, React JS, Javascript',
    imageUrl: 'Robofriends.png',
    href: 'https://manishkaswan123.github.io/robofriends/',
  },
];

export const moreProjects = [
  {
    id: 1,
    title: 'Search App',
    techStack: 'CSS, React Js, Javascript',
    icon: 'search',
    href: 'https://github.com/ManishKaswan123/search-app',
  },
  {
    id: 2,
    title: 'Hotel Booking',
    techStack: 'React Js, CSS, React-datepicker, React-apexcharts, react-date-range, axios, Mongoose, MongoDB',
    icon: 'Building',
    href: 'https://github.com/ManishKaswan123/Hotel-Booking',
  },
  {
    id: 3,
    title: 'E-commerce',
    techStack: 'React js, Express js, MongoDB, Nodemailer, Node js',
    icon: 'Store',
    href: 'https://github.com/ManishKaswan123/e-commerce',
  }
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Rest API',
    src: '/tech/others/rest.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Data Structure & Algorithms',
    src: '/tech/others/DSA.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 3,
    title: 'OOPS',
    src: '/tech/others/OOPS.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 4,
    title: 'C++',
    src: '/tech/others/C++.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 5,
    title: 'Computer Network',
    src: '/tech/others/ComputerNetwork.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  }
];
