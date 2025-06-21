export default (() => { 
  const header = document.querySelector("header");

  let prevLoc = window.scrollY;

  document.addEventListener('scroll', () => {
    if(!header)
      return;

    const currDir = window.scrollY > prevLoc ? 'down' : 'up';

    if(currDir === 'down' && window.scrollY > 200 && !header.classList.contains('animate-out')) {
      header.classList.add('animate-out');
      header.classList.remove('animate-in');
    }
    else if(currDir === 'up' && header.classList.contains('animate-out')) {
      header.classList.remove('animate-out');
      header.classList.add('animate-in');
    }

    if(window.scrollY > 0 && !header.classList.contains('shadow'))
      header.classList.add('shadow');
    else if (window.scrollY === 0 && header.classList.contains("shadow"))
      header.classList.remove('shadow');

    prevLoc = window.scrollY;
  });
})();