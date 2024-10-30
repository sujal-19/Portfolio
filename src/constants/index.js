export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Coding Languages',
    position: '',
    img: 'assets/Coding.png',
    review:
      "I have a deep understanding of Java and C, which I've used extensively in various projects. While these are my strongest languages, I'm also proficient in other programming languages and development frameworks, allowing me to adapt quickly to different development environments",
  },
  {
    id: 2,
    name: 'Certification',
    position: '',
    img: 'assets/certificates.png',
    review:
      "I hold certifications in web development from Udemy, as well as certifications in cybersecurity and database management systems from Coursera. These have provided me with strong foundational knowledge and practical experience in multiple domains, further enhancing my expertise across various technical areas.",
  },
  {
    id: 3,
    name: 'Interest',
    position: '',
    img: 'assets/DSA.png',
    review:
      "I have a strong interest in Data Structures and Algorithms (DSA), which I actively apply in solving complex problems. My deep understanding of key concepts such as arrays, trees, graphs, and dynamic programming has enabled me to approach coding challenges efficiently. I continuously refine my skills by participating in coding competitions and solving DSA problems on various platforms.",
  },
  {
    id: 4,
    name: 'Cybersecurity',
    position: '',
    img: 'assets/Security.png',
    review:
      "I am proficient in using Nmap and other cybersecurity tools to conduct network scanning, vulnerability assessments, and security audits. These tools have allowed me to identify potential threats and secure systems by analyzing open ports, services, and vulnerabilities. My hands-on experience with these technologies strengthens my ability to safeguard networks and applications effectively.",
  },
];

export const myProjects = [
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: '',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Node',
  //       path: '/assets/Node.png',
  //     },
  //   ],
  // },
  {
    title: 'Portfolio Website',
    desc: "My portfolio website is developed using React for building a fast and dynamic user interface. It incorporates Three.js to create interactive 3D models and visualizations, enhancing the site's visual appeal and user engagement. The styling is powered by Tailwind CSS, which ensures a fully responsive, clean, and customizable design across all devices.",
    subdesc:
      'This project highlights my ability to integrate modern front-end technologies and create an immersive, user-friendly experience.',
    href: '/',
    texture: '/textures/project/Portfolio.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'ThreeJS',
        path: 'assets/ThreeJS.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/JS.png',
      },
      {
        id: 4,
        name: 'Node',
        path: '/assets/Node.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Linde Engineering India',
    pos: 'Summer Intern',
    duration: 'May 2024 - Jul 2024',
    title: "Developed an internal app for the company canteen to manage menus, enable online ordering, and enhance employee dining.Along with,Document Processing System (Java & Apache POI): Automated document processing using Java and Apache POI, improving data extraction and reporting efficiency.",
    icon: '/assets/Linde.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Manipal Placement Committee',
    pos: 'Member',
    duration: 'May 2024 - Present',
    title: "As part of the placement committee, I help organize campus recruitment drives, liaise with companies, and manage student-recruiter data. This role has sharpened my communication, event coordination, and leadership skills, ensuring smooth and successful placement events.",
    icon: '/assets/manipal.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Manipal Student Chapter',
    pos: 'Null/OWASP Treasurer',
    duration: 'Nov 2023 - Present',
    title: "As a founding member and treasurer of the prestigious NULL and OWASP chapters at my institute, I manage finances and coordinate multiple events, contributing to the growth and success of both cybersecurity communities.",
    icon: '/assets/manipal.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Acmegrade',
    pos: 'Trainee Intern',
    duration: 'Mar 2022 - April 2022',
    title: "As trainee intern I learned about the basics of internet and cybersecurity, gaining foundational knowledge in network security, online threats, and protective measures to safeguard digital environments.",
    icon: '/assets/acmegrade.png',
    animation: 'clapping',
  },
];
