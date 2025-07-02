import { SCROLL_ANIMATION_ID } from "../constants";

export default (() => {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.classList.add("animate-in");
    }
  });

  const elements = document.querySelectorAll(`#${SCROLL_ANIMATION_ID}`);

  for (const element of elements) {
    observer.observe(element);
    console.log(element);
  }
})();
