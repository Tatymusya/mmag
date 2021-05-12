const useMediaQuery = (query, cb) => {
  if (!('matchMedia' in window)) {
    console.warn('matchMedia not supported');
    return false;
  }

  const mediaQuery = window.matchMedia(query);

  const assignMatches = (evt) => {
    if (cb) {
      cb(evt);
    }
  };

  try {
    mediaQuery.addEventListener('change', (evt) => assignMatches(evt), false);
    return () => mediaQuery.removeEventListener('change', assignMatches);
  } catch (err) {
    try {
      mediaQuery.addListener(assignMatches);
      return () => mediaQuery.removeListener(assignMatches);
    } catch (err1) {
      console.error(err1);
    }
  }
};

export default useMediaQuery;
