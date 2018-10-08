
var counter = 0;

function slideForward() {
  var showreel = document.getElementById('showreel');
  var showreelLength = showreel.childElementCount;
  var showreelWidth = showreel.offsetWidth;
  if (counter < (showreelLength - 1)) {
    console.log('fwd');
    counter++;
    showreel.style.transform = 'translateX(-' + (showreelWidth * counter) + 'px)';
  }
}

function slideBackwards() {
  var showreel = document.getElementById('showreel');
  var showreelWidth = showreel.offsetWidth;
  if (counter > 0) {
    console.log(showreelWidth);
    counter--;
    //showreel.style.transform.translateX += showreel.style.width;
    showreel.style.transform = 'translateX(-' + (showreelWidth * counter) + 'px)';
  }
}
