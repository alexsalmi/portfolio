import { SCROLL_ANIMATION_ID } from "../constants";

export default (() => {
  // Create an observer to check if elements are in the window view
  const observer = new IntersectionObserver((entries) => {
    // For every observed element in the window view, give them the animate-in class
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        entry.target.classList.remove("pre-animation");
      }
    }
  });

  // Add all elements with the scroll animation id to the observer
  const elements = document.querySelectorAll(`#${SCROLL_ANIMATION_ID}`);
  for (const element of elements) {
    observer.observe(element);
    element.classList.add("pre-animation");
  }
})();
