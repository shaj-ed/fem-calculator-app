export class Theme {
  constructor() {
    this.root = document.querySelector(":root");
    this.switcheButtons = document.querySelectorAll("input[type='radio']");
    this.darkMode = document.querySelector("#dark");
    this.lightMode = document.querySelector("#light");
    this.yellowMode = document.querySelector("#yellow");
  }

  getTheme() {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    localStorage.getItem("themeMode")
      ? (theme = localStorage.getItem("themeMode"))
      : null;

    return theme;
  }

  loadTheme() {
    let theme = this.getTheme();

    if (theme === "dark") {
      this.darkMode.checked = true;
      this.root.setAttribute("color-scheme", `${theme}`);
    } else if (theme === "light") {
      this.lightMode.checked = true;
      this.root.setAttribute("color-scheme", `${theme}`);
    } else if (theme === "yellow") {
      this.yellowMode.checked = true;
      this.root.setAttribute("color-scheme", `${theme}`);
    }

    this.switcheButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const switchMode = e.target.getAttribute("id");
        this.root.setAttribute("color-scheme", `${switchMode}`);
        localStorage.setItem("themeMode", `${switchMode}`);
      });
    });
  }
}
