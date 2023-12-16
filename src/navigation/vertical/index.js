import { Mail, Home, Airplay, Circle } from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "secondPage",
    title: "مدیریت مقاله ها",
    icon: <Mail size={20} />,
    navLink: "/articles",
  },
  {
    id: "smaplePage",
    title: "مدیریت کاربران",
    icon: <Airplay size={20} />,
    navLink: "/users",

    // children: [
    //   {
    //     id: "invoiceList",
    //     title: "List",
    //     icon: <Circle size={12} />,
    //     navLink: "/apps/invoice/list",
    //   },
    // ],
  },
  {
    id: "comments",
    title: "  کامنت ها",
    icon: <Mail size={20} />,
    navLink: "/comments",
  },
  {
    id: "lessons",
    title: "مدیریت درس ها",
    icon: <Mail size={20} />,
    navLink: "/lessons",
  },
  {
    id: "courses",
    title: "مدیریت دوره ",
    icon: <Mail size={20} />,
    navLink: "/courses",
  },
];
