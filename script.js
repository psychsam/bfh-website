function markField() {
  let day = new Date().getDay();
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  // define days for html classed
  let daysInWeek = [ 's', 'm', 'tu', 'w', 'th', 'f', 'sa' ];
  // define times for lessons
  let times = [ 8 * 60 + 19, 10 * 60 + 19, 11 * 60 + 55, 12 * 60 + 44, 14 * 60 + 19, 16 * 60 + 14, 17 * 60 + 49 ];
  let result = 0;
  // compare every time until you receive true
  // then print the index
  times.forEach(( element, index ) => {
    let comparedTimes = compareTime(hours * 60 + minutes, element, index);
    if (comparedTimes && result === 0) {
      result = comparedTimes;
    }
  });

  if (result > 0) {
    result--;
  }

  if (result <= 7) {
    let myClass = document.querySelector("." + daysInWeek[ day ] + result);
    let names =  myClass.className.split(" ");

    if (names[ 0 ] !== "nonborder") {
      myClass.classList.add(names[ 0 ] + "_highlight");
    }

    if(result > 0) {
      let beforeClass = document.querySelector("." + daysInWeek[ day ] + (result-1));
      let beforeNames = beforeClass.className.split(" ");

      if(beforeNames.length === 3) {
          beforeClass.className = beforeNames[0] + " " + beforeNames[1];
      }
    }
  }
}

// compare two times
function compareTime( now, time, index ) {
  let pos;
  if (now <= time) {
    pos = index;
  }
  return pos;
}

// call the function every minute
function callMarkField() {
  markField();
  window.setInterval(function(){
    markField();
  }, 60000);
}
