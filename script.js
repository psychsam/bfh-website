function markField () {
  let day = new Date().getDay();
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let daysInWeek = ['s', 'm', 'tu', 'w', 'th', 'f', 'sa'];
  let times = [8*60+19, 10*60+19, 11*60+55, 12*60+44, 14*60+24, 16*60+14, 17*60+49];
  let table = document.querySelector('table');
  let result = 0;
  times.forEach((element,index) => {
    let comparedTimes = compareTime(hours*60+minutes,element,index);
    if(comparedTimes && result === 0) {
      result = comparedTimes;
    }
  });
  if(result > 0) result--;
  

  if(result <= 7) {
    let myClass = document.querySelector("."+daysInWeek[day] + result);
   
    var name = myClass.className;
    var names = name.split(" ");
    if(names[0] != "nonborder")
        {
            myClass.classList.add(names[0] + "_highlight");
        }
  }

}

function compareTime(now,time,index) {
  let pos;
  if(now <= time) {
    pos = index;    
  }
  return pos;
}
