import { HEADER_DARK_MODE_ICON, HEADER_LIGHT_MODE_ICON, THEME_TOGGLE_BUTTON_ID } from "../constants";

export default(() => {
  const root = document.querySelector(":root");
	const button = document.querySelector(`#${THEME_TOGGLE_BUTTON_ID}`);
	const lightModeIcon = document.querySelector(`#${HEADER_LIGHT_MODE_ICON}`);
	const darkModeIcon = document.querySelector(`#${HEADER_DARK_MODE_ICON}`);

	const theme = window.localStorage.getItem("theme") || "dark";

	if(root && theme === "dark") {
		root.classList.add("dark");
		darkModeIcon?.classList.add("visible");
		lightModeIcon?.classList.remove("visible");
	}

	button?.addEventListener('click', () => {
		if(!root)
			return;

		if(root.classList.contains("dark")){
			root.classList.remove("dark");
			darkModeIcon?.classList.remove("visible");
			lightModeIcon?.classList.add("visible");
			window.localStorage.setItem("theme", "light");
		}
		else{
			root.classList.add("dark");
			darkModeIcon?.classList.add("visible");
			lightModeIcon?.classList.remove("visible");
			window.localStorage.setItem("theme", "dark");
		}
	});

})();