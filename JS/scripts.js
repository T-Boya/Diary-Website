var instance = new TypeIt('#title', {
  strings: " Your Diary"
});
 
//-- Pause after one second.
setTimeout(() => {
  instance.freeze();
}, 800);
 
//-- Resume after three seconds.
setTimeout(() => {
  instance.unfreeze();
}, 3000);




(function () {
  function checkTime(i) {
      return (i < 10) ? "0" + i : i;
  }

  function startTime() {
      var today = new Date(),
          h = checkTime(today.getHours()),
          m = checkTime(today.getMinutes());
          if (h>12) {
            h = h-12;
            m = m+ " pm"
          }
          else {
            m = m+ " am"
          }
      document.getElementById('time').innerHTML = h + ":" + m;
      t = setTimeout(function () {
          startTime()
      }, 500);
  }
  startTime();
})();

document.getElementById('content').innerHTML = localStorage['text']; 'Click here to get startes' // default text
setInterval

(function() { // fuction that is saving the innerHTML of the div
localStorage['text'] = document.getElementById('content').innerHTML; // content div
}, 1000);

if (localStorage['text'] = undefined) {
  document.getElementById('content').innerHTML = "Click on me to get started"
}

document.getElementById("date").innerHTML = Date();