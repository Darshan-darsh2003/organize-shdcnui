export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Organize",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    // {
    //   title: "Home",
    //   href: "/",
    // },
   
    {
      title:'Notes',
      href:'/notes',
    },
    {
      title: "Tasks",
      href: "/tasks",
    },
    {
      title: "Expenses",
      href: "/expenses",
    },
    {
      title:'Urls',
      href:'/urls',
    }
  ],
  links: {
    profile: "/",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
