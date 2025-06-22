import { DROPDOWN_MENU_ID, MENU_TOGGLE_BUTTON_ID } from "../constants";

export default (() => { 
  const header = document.querySelector("header");
  const menuBtn = document.querySelector(`#${MENU_TOGGLE_BUTTON_ID}`);
  const dropdownMenu = document.querySelector(`#${DROPDOWN_MENU_ID}`);

  let prevLoc = window.scrollY;

  document.addEventListener('scroll', () => {
    if(!header || !dropdownMenu)
      return;

    const currDir = window.scrollY > prevLoc ? 'down' : 'up';

    if(currDir === 'down' && window.scrollY > 200 && !header.classList.contains('animate-out')) {
      header.classList.add('animate-out');
      header.classList.remove('animate-in');
      dropdownMenu.classList.remove("expanded");
    }
    else if(currDir === 'up' && header.classList.contains('animate-out')) {
      header.classList.remove('animate-out');
      header.classList.add('animate-in');
    }

    if(window.scrollY > 0 && !header.classList.contains('shadow'))
      header.classList.add('shadow');
    else if (window.scrollY === 0 && !dropdownMenu.classList.contains("expanded") && header.classList.contains("shadow"))
      header.classList.remove('shadow');

    prevLoc = window.scrollY;
  });

  menuBtn?.addEventListener('click', () => {
    if(!header || !dropdownMenu)
      return;

    if(dropdownMenu.classList.contains("expanded")){
      dropdownMenu.classList.remove("expanded");
      if(window.scrollY === 0)
        header.classList.remove('shadow');
    }
    else {
      header.classList.add('shadow');
      dropdownMenu.classList.add("expanded");
    }
  });
})();