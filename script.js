function markField() {
  let day = new Date().getDay();
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let daysInWeek = [ 's', 'm', 'tu', 'w', 'th', 'f', 'sa' ];
  let times = [ 8 * 60 + 19, 10 * 60 + 19, 11 * 60 + 55, 12 * 60 + 44, 14 * 60 + 19, 16 * 60 + 14, 17 * 60 + 49 ];
  let result = 0;
  times.forEach(( element, index ) => {
    let comparedTimes = compareTime(hours * 60 + minutes, element, index);
    if (comparedTimes && result === 0) {
      result = comparedTimes;
    }
  });
  if (result > 0) result--;

  if (result <= 7) {
    let myClass = document.querySelector("." + daysInWeek[ day ] + result);


    let names =  myClass.className.split(" ");

    if (names[ 0 ] !== "nonborder") {
      myClass.classList.add(names[ 0 ] + "_highlight");
    }

    if(result > 0) {
        let bevorClass = document.querySelector("." + daysInWeek[ day ] + (result-1));
        let bevorenames = bevorClass.className.split(" ");

        if(bevorenames.length == 3) {
            let newname = bevorenames[0] + " " + bevorenames[1];
            bevorClass.className = newname;
        }
    }

  }
}

function compareTime( now, time, index ) {
  let pos;
  if (now <= time) {
    pos = index;
  }
  return pos;
}

function callMarkField() {
  markField();
  window.setInterval(function(){
    markField();
  }, 60000);
}
