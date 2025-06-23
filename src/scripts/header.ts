import {
  DROPDOWN_MENU_ID,
  HEADER_CLOSE_ICON,
  HEADER_MENU_ICON,
  MAIN_HEADER_ID,
  MENU_TOGGLE_BUTTON_ID,
} from "../constants";

export default (() => {
  const header = document.querySelector("header");
  const menuBtn = document.querySelector(`#${MENU_TOGGLE_BUTTON_ID}`);
  const dropdownMenu = document.querySelector(`#${DROPDOWN_MENU_ID}`);
  const mainHeaderSection = document.querySelector(`#${MAIN_HEADER_ID}`);
  const headerMenuIcon = document.querySelector(`#${HEADER_MENU_ICON}`);
  const headerCloseIcon = document.querySelector(`#${HEADER_CLOSE_ICON}`);

  let prevLoc = window.scrollY;

  document.addEventListener("scroll", () => {
    if (!header || !dropdownMenu) return;

    const currDir = window.scrollY > prevLoc ? "down" : "up";

    if (
      currDir === "down" &&
      window.scrollY > 200 &&
      !header.classList.contains("animate-out")
    ) {
      header.classList.add("animate-out");
      header.classList.remove("animate-in");
      dropdownMenu.classList.remove("expanded");
      headerMenuIcon?.classList.add("visible");
      headerCloseIcon?.classList.remove("visible");
    } else if (currDir === "up" && header.classList.contains("animate-out")) {
      header.classList.remove("animate-out");
      header.classList.add("animate-in");
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

  menuBtn?.addEventListener("click", (e) => {
    if (!header || !dropdownMenu) return;

    if (dropdownMenu.classList.contains("expanded")) {
      dropdownMenu.classList.remove("expanded");
      headerMenuIcon?.classList.add("visible");
      headerCloseIcon?.classList.remove("visible");
      if (window.scrollY === 0) header.classList.remove("shadow");
    } else {
      header.classList.add("shadow");
      dropdownMenu.classList.add("expanded");
      headerMenuIcon?.classList.remove("visible");
      headerCloseIcon?.classList.add("visible");
    }
  });

  mainHeaderSection?.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    if (!header || !dropdownMenu) return;

    if (dropdownMenu.classList.contains("expanded")) {
      dropdownMenu.classList.remove("expanded");
      headerMenuIcon?.classList.add("visible");
      headerCloseIcon?.classList.remove("visible");
      if (window.scrollY === 0) header.classList.remove("shadow");
    }
  });
})();
