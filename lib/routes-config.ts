// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Technology Stack", href: "/tech-stack" },
      { title: "MERN Stack", href: "/mern-stack" },
      { title: "MEAN Stack", href: "/mean-stack" },
      { title: "Database", href: "/database" },
      { title: "API", href: "/api" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Front-End",
    items: [
      { title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { title: "jQuery", href: "https://jquery.com/" },
      { title: "Next JS", href: "https://nextjs.org/" },
      { title: "React", href: "https://react.dev/" },
      { title: "Vue.js", href: "https://vuejs.org/" },
      { title: "Angular", href: "https://angular.io/" },
    ],
  },

  {
    title: "Backend",
    items: [
      { title: "Node JS", href: "nodejs" },
      { title: "Express", href: "express" },
      { title: "Django", href: "https://www.djangoproject.com/" },
      { title: "Flask", href: "https://flask.palletsprojects.com/" },
      { title: "Ruby on Rails", href: "https://rubyonrails.org/" },
    ],
  },
  {
    title: "API",
    items: [
      { title: "GraphQL", href: "https://graphql.org/" },
      { title: "REST", href: "https://restfulapi.net/" },
    ],
  },
  {
    title: "Database",
    items: [
      { title: "MongoDB", href: "mongodb" },
      { title: "PostgreSQL", href: "https://www.postgresql.org/" },
      { title: "MySQL", href: "https://www.mysql.com/" },
      { title: "SQLite", href: "https://www.sqlite.org/" },
    ],
  },
  {
    title: "Useful Tools",
    items: [
      { title: "Docker", href: "https://www.docker.com/" },
      { title: "Kubernetes", href: "https://kubernetes.io/" },
      { title: "Webpack", href: "https://webpack.js.org/" },
      { title: "Babel", href: "https://babeljs.io/" },
    ],
  },
  {
    title: "Useful IDEs",
    items: [
      { title: "VSCode", href: "https://code.visualstudio.com/" },
      { title: "WebStorm", href: "https://www.jetbrains.com/webstorm/" },
      { title: "Atom", href: "https://atom.io/" },
    ],
  },
  // {
  //   title: "API References",
  //   href: "api-references",
  //   items: [
  //     { title: "useFetch", href: "/use-fetch" },
  //     { title: "useAuth", href: "/use-auth" },
  //     { title: "useProduct", href: "/use-product" },
  //     { title: "useOrder", href: "/use-order" },
  //     { title: "useCart", href: "/use-cart" },
  //     { title: "usePayment", href: "/use-payment" },
  //     { title: "useShipping", href: "/use-shipping" },
  //     { title: "useNotification", href: "/use-notification" },
  //     { title: "useReview", href: "/use-review" },
  //     { title: "useInventory", href: "/use-inventory" },
  //     { title: "useUser", href: "/use-user" },
  //     { title: "useSettings", href: "/use-settings" },
  //     { title: "useAnalytics", href: "/use-analytics" },
  //     { title: "useTheme", href: "/use-theme" },
  //     { title: "useRouter", href: "/use-router" },
  //     { title: "useData", href: "/use-data" },
  //     { title: "useSession", href: "/use-session" },
  //     { title: "useCache", href: "/use-cache" },
  //     { title: "useStorage", href: "/use-storage" },
  //     { title: "useApi", href: "/use-api" },
  //   ],
  // },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
