import {
  HEADER_DARK_MODE_ICON_ID,
  HEADER_LIGHT_MODE_ICON_ID,
  HEADER_THEME_PLACEHOLDER_ICON_ID,
  THEME_TOGGLE_BUTTON_ID,
} from "../constants";

export default (() => {
  // #region Setup
  // Get all relevant elements
  const root = document.querySelector(":root");
  const button = document.querySelector(`#${THEME_TOGGLE_BUTTON_ID}`);
  const placeholderIcon = document.querySelector(
    `#${HEADER_THEME_PLACEHOLDER_ICON_ID}`,
  );
  const darkModeIcon = document.querySelector(`#${HEADER_DARK_MODE_ICON_ID}`);
  const lightModeIcon = document.querySelector(`#${HEADER_LIGHT_MODE_ICON_ID}`);

  // Get the saved theme from local storage, defaulting to dark mode
  const theme = window.localStorage.getItem("theme") || "dark";

  placeholderIcon?.classList.remove("visible");

  // Enable dark mode if needed
  if (root && theme === "dark") darkModeIcon?.classList.add("visible");
  else lightModeIcon?.classList.add("visible");
  // #endregion

  // #region Event Listeners
  // Event listener to toggle the theme
  button?.addEventListener("click", () => {
    if (!root) return;

    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      darkModeIcon?.classList.remove("visible");
      lightModeIcon?.classList.add("visible");
      window.localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      darkModeIcon?.classList.add("visible");
      lightModeIcon?.classList.remove("visible");
      window.localStorage.setItem("theme", "dark");
    }
  });
  // #endregion
})();
