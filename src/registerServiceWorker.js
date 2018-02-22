export default function registerSW() {
  if ("serviceWorker" in navigator) {
    console.log("%c Service worker is supported..!", 'color:green');
    navigator.serviceWorker.register('sw.js').then(function (registration) {
      //SUCCESS
      console.log("%c Service worker registered successfully..!", 'color:lime');
    }, function(err) {
      //FAILED
      console.log(`%c Failed to register the service worker, ERROR::${err}`, 'color:lime');
    })
  } else {
    console.log("%c Unsupporting browser for service worker..!", 'color:red');
  }
}
