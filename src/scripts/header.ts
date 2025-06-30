import {
  DROPDOWN_MENU_ID,
  HEADER_CLOSE_ICON_ID,
  HEADER_MENU_ICON_ID,
  MAIN_HEADER_ID,
  MENU_TOGGLE_BUTTON_ID,
} from "../constants";

export default (() => {
  // #region Setup
  // Get all relevant elements
  const header = document.querySelector("header");
  const menuBtn = document.querySelector(`#${MENU_TOGGLE_BUTTON_ID}`);
  const dropdownMenu = document.querySelector(`#${DROPDOWN_MENU_ID}`);
  const mainHeaderSection = document.querySelector(`#${MAIN_HEADER_ID}`);
  const headerMenuIcon = document.querySelector(`#${HEADER_MENU_ICON_ID}`);
  const headerCloseIcon = document.querySelector(`#${HEADER_CLOSE_ICON_ID}`);

  // Initialize variable for keeping track of the previous scroll value
  let prevLoc = window.scrollY;
  // #endregion

  // #region Helper Functions
  const hideHeader = () => {
    header?.classList.add("animate-out");
    header?.classList.remove("animate-in");
  };

  const showHeader = () => {
    header?.classList.remove("animate-out");
    header?.classList.add("animate-in");
  };

  const hideDropdownMenu = () => {
    dropdownMenu?.classList.remove("expanded");
    headerMenuIcon?.classList.add("visible");
    headerCloseIcon?.classList.remove("visible");
    if (window.scrollY === 0) header?.classList.remove("shadow");
  };

  const expandDropdownMenu = () => {
    dropdownMenu?.classList.add("expanded");
    headerMenuIcon?.classList.remove("visible");
    headerCloseIcon?.classList.add("visible");
    if (!header?.classList.contains("shadow")) header?.classList.add("shadow");
  };
  // #endregion

  // #region Event Listeners
  // Event listener to show/hide the header when scrolling
  document.addEventListener("scroll", () => {
    if (!header || !dropdownMenu) return;

    const currDir = window.scrollY > prevLoc ? "down" : "up";

    if (
      currDir === "down" &&
      window.scrollY > 200 &&
      !header.classList.contains("animate-out")
    ) {
      hideHeader();
      hideDropdownMenu();
    } else if (currDir === "up" && header.classList.contains("animate-out")) {
      showHeader();
    }

    if (window.scrollY > 0 && !header.classList.contains("shadow"))
      header.classList.add("shadow");
    else if (
      window.scrollY === 0 &&
      !dropdownMenu.classList.contains("expanded") &&
      header.classList.contains("shadow")
    )
      header.classList.remove("shadow");

    prevLoc = window.scrollY;
  });

  // Event listener to expand/collapse the dropdown menu when in mobile view
  menuBtn?.addEventListener("click", () => {
    if (!header || !dropdownMenu) return;

    if (dropdownMenu.classList.contains("expanded")) hideDropdownMenu();
    else expandDropdownMenu();
  });

  // Event listener to prevent clicks within the header from collapsing the dropdown menu
  mainHeaderSection?.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Global event listener to collapse the dropdown menu whenever the user clicks outside of the header
  document.addEventListener("click", () => {
    if (!header || !dropdownMenu) return;

    if (dropdownMenu.classList.contains("expanded")) hideDropdownMenu();
  });
  // #endregion
})();
