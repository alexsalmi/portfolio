import { THEME_TOGGLE_BUTTON_ID } from "../constants";

export default(() => {
  const root = document.querySelector(":root");
	const button = document.querySelector(`#${THEME_TOGGLE_BUTTON_ID}`);

	const theme = window.localStorage.getItem("theme") || "dark";

	if(root && theme === "dark")
		root.classList.add("dark")

	button?.addEventListener('click', () => {
		if(!root)
			return;

		if(root.classList.contains("dark")){
			root.classList.remove("dark");
			window.localStorage.setItem("theme", "light");
		}
		else{
			root.classList.add("dark");
			window.localStorage.setItem("theme", "dark");
		}
	});

})();