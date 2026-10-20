export const PROJECTS = [
  {
    num: '01',
    title: 'Jump Start',
    description:
      'A React-based web application built with modern front-end practices and component-driven architecture.',
    tags: ['React', 'JavaScript'],
    url: 'https://jump-start-ashy.vercel.app/',
    featured: true,
  },
  {
    num: '02',
    title: 'Lunyalalo Trust',
    description:
      'Non-profit charity website empowering underprivileged youth in Zimbabwe through education, mentorship, and sustainable community programs.',
    tags: ['HTML', 'CSS', 'Non-Profit'],
    url: 'https://lunyalalo.vercel.app/',
    featured: true,
  },
  {
    num: '03',
    title: 'Patience N. Portfolio',
    description:
      'Digital marketing portfolio showcasing strategic campaigns, content creation, and brand storytelling across multiple platforms.',
    tags: ['Portfolio', 'Digital Marketing'],
    url: 'https://patience-pf.vercel.app/',
    featured: true,
  },
  {
    num: '04',
    title: 'Ashley Blackson Portfolio',
    description:
      'Digital marketing specialist portfolio featuring SEO, SEM, and social media campaign strategies for brand growth.',
    tags: ['Portfolio', 'SEO', 'Marketing'],
    url: 'https://ashely-pf.vercel.app/',
    featured: false,
  },
  {
    num: '05',
    title: 'Alumbwe Cherish Muleya',
    description:
      'Product designer portfolio showcasing UX/UI design, prototyping, and design systems for mobile and web applications.',
    tags: ['Portfolio', 'Product Design', 'UI/UX'],
    url: 'https://alumbwe-pf.vercel.app/',
    featured: false,
  },
  {
    num: '06',
    title: 'Digital Marketing Strategy for Emergo',
    description:
      'Comprehensive digital marketing strategy outlining target audience analysis, channel selection, and campaign frameworks for Emergo.',
    tags: ['Digital Marketing', 'Strategy', 'Canva'],
    url: 'https://canva.link/u75smu33ps66jga',
    featured: false,
  },
  {
    num: '07',
    title: 'Customer Journey Map for WhatsApp',
    description:
      'End-to-end customer journey map visualizing key touchpoints, pain points, and opportunities across the WhatsApp user experience.',
    tags: ['Customer Journey', 'UX Research', 'Canva'],
    url: 'https://canva.link/f7r4hru0u17nbm3',
    featured: false,
  },
  {
    num: '08',
    title: 'Website Wireframe Design',
    description:
      'Low-fidelity wireframes defining page layout, content hierarchy, and navigation flow for a responsive website design.',
    tags: ['Wireframing', 'UI/UX', 'Figma'],
    url: 'https://www.figma.com/proto/bZW7ahJVjnaAhrmVhngdfo/Untitled?node-id=1-117&t=vOiotcjApUezhlwg-1',
    featured: false,
  },
];

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.featured);
export const getRemainingProjects = () => PROJECTS.filter((p) => !p.featured);