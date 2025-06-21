export default (() => { 
  const header = document.querySelector("header");

  let prevLoc = window.scrollY;

  document.addEventListener('scroll', () => {
    if(!header)
      return;

    const currDir = window.scrollY > prevLoc ? 'down' : 'up';

    if(currDir === 'down' && window.scrollY > 100 && !header.classList.contains('animate-header-out')) {
      header.classList.add('animate-header-out');
      header.classList.remove('animate-header-in');
    }

    if(currDir === 'up' && !header.classList.contains('animate-header-in')) {
      header.classList.remove('animate-header-out');
      header.classList.add('animate-header-in');
    }

    prevLoc = window.scrollY;
  });
})();