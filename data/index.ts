export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client satisfaction and client collaboration. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "my Tech-Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Fullstack Modern Code Editor and Compiler",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 10,
    title: "Retro King - Play Classic Retro Games",
    des: "Missing the golden age of gaming? I've built a full-stack modern web platform that lets you relive those classic moments right in your browser! This is a web-based retro game emulation platform built with Next.js + Prisma.",
    img: "/p10.jpeg",
    iconLists: [
      "/next.svg",
      "/prisma.svg",
      "/postgresql.svg",
      "/tail.svg",
      "/vercel.jpg",
    ],
    link: "https://retro-king.vercel.app/",
  },
  {
    id: 9,
    title: "Trimrr - URL Shortener",
    des: "A Fully responsive Full Stack URL Shortener Web-App with React JS, Tailwind CSS, Supabase, and Shadcn UI. User authentication, URL shortening and redirection with custom links, detailed analytics, QR code generation, and a visually appealing dashboard.",
    img: "/p9.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/supabase-logo.jpg",
      "vite.svg",
      "vercel.jpg",
    ],
    link: "https://trimrrr.vercel.app/",
  },

  {
    id: 1,
    title: "GIPHY - Enter the World of GIFs",
    des: "Inspired by GIPHY having features such as live GIF fetching to display trending and latest GIFs, and Includes real-time search functionality for users to find specific GIFs quickly while also allows users to add GIFs to favorites.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "vite.svg", "vercel.jpg"],
    link: "https://giphy-rishi.vercel.app/",
  },
  {
    id: 2,
    title: "IdeaGo - WebApp ",
    des: "IdeaGo serves as a versatile platform where users can both share their imaginative concepts and explore a curated collection of top and innovative ideas with an upvoting system facilitated by anonymous users to rank ideas.",
    img: "/p2.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "postgresql.svg",
      "drizzle.png",
      "vite.svg",
      "vercel.jpg",
    ],
    link: "https://idea-go.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "A React Chat App",
  //   des: "A full-stack real-time chat application equipped with a diverse range of features such as user login authentication, real-time messaging, and seen feature. Users can also send images and block/unblock other users. ",
  //   img: "/p3.png",
  //   iconLists: [
  //     "/re.svg",
  //     "firebase.svg",
  //     "/css.svg",
  //     "/vite.svg",
  //     "/vercel.jpg",
  //   ],
  //   link: "https://my-react-chat-app-0.vercel.app/",
  // },

  {
    id: 5,
    title: "CookMom - Find Any Recipe ",
    des: "Showcases a diverse range of food recipes based on user interests. Clicking on a recipe redirects users to relevant YouTube search results for that recipe. Users can like recipes and easily find them in the favorites section.",
    img: "/p5.png",
    iconLists: ["/re.svg", "/tail.svg", "/vite.svg", "/vercel.jpg"],
    link: "https://cookmom.vercel.app/",
  },
  {
    id: 4,
    title: "DuoStudio – A Frontend Website ",
    des: "DuoStudio is a frontend website made purely in HTML, CSS, and JavaScript - powered by Javascript animation libraries such as GSAP and LocomotiveJS for smooth-scrolling effects.",
    img: "/p4.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/three.svg", "/gsap.svg"],
    link: "https://rishiigupta04.github.io/duostudio/",
  },
  {
    id: 6,
    title: "SunDown - A Frontend Website ",
    des: "Cloned the Frontend of the original website incorporating libraries such as GSAP and LocomotiveJS for smooth scrolling animations and SwiperJS for image slider, for seamless user experience.",
    img: "/p6.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/gsap.svg"],
    link: "https://rishiigupta04.github.io/sundown_clone/",
  },
  {
    id: 8,
    title: "OOCHI - A Frontend Website ",
    des: "A Frontend Website made using React + Tailwind CSS with the help of Vite. Libraries used - Framer Motion and Locomotive for smooth scrolling and animations!",
    img: "/p8.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/vite.svg",
      "/vercel.jpg",
      "/gsap.svg",
    ],
    link: "https://oochi.vercel.app/",
  },
  // {
  //   id: 7,
  //   title: "Very Own Portfolio Website ",
  //   des: "A portfolio website I made for my personal usecase with Next.js, Tailwind, and Typescript. Fully responsive and is powered by the powerful library - Aceternity UI. Learned to incorporate Sentry for error tracking and user feedback.",
  //   img: "/p7.png",
  //   iconLists: [
  //     "/next.svg",
  //     "/tail.svg",
  //     "/ts.svg",
  //     "/sentry.svg",
  //     "vite.svg",
  //     "vercel.jpg",
  //   ],
  //   link: "https://rishi-portfolio-website.vercel.app/",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Rishi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rishi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rishi is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rishi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rishi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rishi is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rishi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rishi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rishi is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rishi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rishi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rishi is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rishi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rishi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rishi is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rishi-raj-gupta45/",
  },
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/rishiigupta04",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/rishiigupta04?t=UgmSdTUvplYuCE9MtelQDg&s=09",
  },
];
