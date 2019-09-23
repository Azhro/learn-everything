import { whiteColor } from "assets/learn-everything-style.js";

const SidebarStyle = theme => ({
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none",
    "&:hover,&:focus,&:visited,&": {
      color: whiteColor
    }
  }
});

export default SidebarStyle;
