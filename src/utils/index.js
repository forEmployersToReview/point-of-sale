// The virtual dom can cause issues to load scripts at the html layer.
// Quick helper built to assist on that.
// It will load the `maps api` module especifically after the app component mounts;

export const load_script = (url, callback) => {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.src = url;
  script.onreadystatechange = callback;
  script.onload = callback;

  // Fire the loading
  head.appendChild(script);
};
