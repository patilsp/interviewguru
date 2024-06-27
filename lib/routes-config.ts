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
      { title: "HTML", href: "/html" },
      { title: "CSS", href: "/css" },
      { title: "JavaScript", href: "/javascript" },
      { title: "jQuery", href: "/jquery" },
      { title: "Next JS", href: "/nextjs" },
      { title: "React", href: "/react" },
      { title: "Vue.js", href: "/vuejs" },
      { title: "Angular", href: "/angular" },
    ],
  },

  {
    title: "Backend",
    items: [
      { title: "Node JS", href: "nodejs" },
      { title: "Express", href: "express" },
      { title: "Django", href: "/django" },
      { title: "PHP", href: "/php" },
      { title: "Ruby on Rails", href: "/rubyonrails" },
    ],
  },
  {
    title: "API",
    items: [
      { title: "GraphQL", href: "/graphql" },
      { title: "REST", href: "/restfulapi" },
    ],
  },
  {
    title: "Database",
    items: [
      { title: "MongoDB", href: "mongodb" },
      { title: "PostgreSQL", href: "/postgresql" },
      { title: "MySQL", href: "/mysql" },
      { title: "SQLite", href: "/sqlite" },
    ],
  },
  {
    title: "Useful Tools",
    items: [
      { title: "Docker", href: "/docker" },
      { title: "Kubernetes", href: "#" },
      { title: "Webpack", href: "#" },
      { title: "Babel", href: "#" },
    ],
  },
  {
    title: "Useful IDEs",
    items: [
      { title: "VSCode", href: "#" },
      { title: "Atom", href: "#" },
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
