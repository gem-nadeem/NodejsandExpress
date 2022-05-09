// JavaScript
const currDate = document.getElementById('date');
let weathercon = document.getElementById('weathercon');

const tempStatus = "{%tempstatus%}";

if(tempStatus == "Sunny"){
  weathercon.innerHTML =  `<i class="fa-solid fa-sun" ></i>`
}else if(tempStatus == "Clouds"){
    weathercon.innerHTML =  `<i class="fa-solid fa-cloud" ></i>`
}else if(tempStatus == "Rainy"){
    weathercon.innerHTML =  `<i class="fa-solid fa-rain" ></i>`
}else {
    weathercon.innerHTML =  `<i class="fa-solid fa-cloud" ></i>`
}


const getCurrentDay = () => {
    var weekDay = new Array();
    weekDay[0] = "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thursday";
    weekDay[5] = "Friday";
    weekDay[6] = "Saturday";
    let currentTime = new Date();
   // console.log(weekDay[currentTime.getDate()]);
   return weekDay[currentTime.getDate() - 1];
};

const getCurrentTime = () => {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    // Date section
    var presentTime = new Date();
    var month = months[presentTime.getMonth() - 1];
    var date = presentTime.getDate();
    // var year = presentTime.getFullYear();
   // console.log(date + "/" + month);
   
    // Time section
    let hours = presentTime.getHours();
    let mins = presentTime.getMinutes();


    // Meridian
    let periods = "AM";
    if(hours > 11){
        periods = "PM";
        if(hours > 12)
        hours -= 12;
    }

    if(mins < 10){
        mins = "0" + mins;
    }

   // console.log(hours + ":" + mins);

   return  `${month}  ${date} | ${hours}:${mins} ${periods}`;
};

     
     currDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();


