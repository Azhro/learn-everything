// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";

// core components / views for admin layout
import UserProfile from "views/UserProfile/UserProfile";
import HomePage from "views/HomePage/HomePage";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: Dashboard,
    component: HomePage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/test1",
    name: "test1",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/test2",
    name: "test2",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  }
];

export default routes;
