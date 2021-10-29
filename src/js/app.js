import { Theme } from "./toggle";
import { calculation } from "./calc";

import "../index.html";
import "../scss/style.scss";

// Instantiate the Theme class
const theme = new Theme();

window.addEventListener("DOMContentLoaded", () => {
  theme.loadTheme();
  calculation();
});
