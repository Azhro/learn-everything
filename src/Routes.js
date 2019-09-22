import UserProfile from "./views/UserProfile/UserProfile";

const routes = [
  {
    path: "/home",
    name: "Home",
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    component: UserProfile,
    layout: "/admin"
  }
];

export default routes;
