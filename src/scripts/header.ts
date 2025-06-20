export default (() => { 
  const header = document.querySelector("header");

  let prevLoc = window.scrollY;
  let prevDir = 'none';

  document.addEventListener('scroll', () => {
    if(!header)
      return;

    const currDir = window.scrollY > prevLoc ? 'down' : 'up';

    if(currDir === 'down' && prevDir !== "down") {
      header.classList.add('animate-header-out');
      header.classList.remove('animate-header-in');
    }

    if(currDir === 'up' && prevDir !== 'up') {
      header.classList.remove('animate-header-out');
      header.classList.add('animate-header-in');
    }

    prevDir = currDir;
    prevLoc = window.scrollY;
  });
})();