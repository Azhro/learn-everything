import { hexToRgb } from "@material-ui/core/styles";

// VARIABLES
const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.473, 0.346, 1)"
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "auto"
};

// COLORS
const blackColor = "#000";
const whiteColor = "#fff";
const grayColor = [
  "#999",
  "#777",
  "#3C4858",
  "#AAAAAA",
  "#D2D2D2",
  "#DDD",
  "#b4b4b4",
  "#555555",
  "#333",
  "#a9afbb",
  "#eee",
  "#e7e7e7"
];

// SHADOWS
const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(" +
    hexToRgb(blackColor) +
    ", 0.42), 0 4px 25px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.12), 0 8px 10px -5px rgba(" +
    hexToRgb(blackColor) +
    ", 0.4)"
};

export {
  //VARIABLES
  hexToRgb,
  defaultFont,
  transition,
  drawerWidth,
  //COLORS
  whiteColor,
  blackColor,
  grayColor,
  //SHADOWS
  boxShadow
};
