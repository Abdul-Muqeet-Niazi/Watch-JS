// hour = 0
// minutes = 0
// seconds = 0
// var gethour = document.getElementById("hr")
// var getmin = document.getElementById("min")
// var getsec = document.getElementById("sec")

// setInterval(function(){
//     seconds++
//     getsec.innerHTML = seconds
//     if(seconds >= 60){
//         minutes++
//         getmin.innerHTML = minutes
//         seconds = 0
//     }
//     else if(minutes >= 5){
//         hour++
//         gethour.innerHTML = hour
//         minutes = 0 
//     }
//     if (hour >= 10){
//         hour = -1
//     }
// },1000)

// var date = new Date()
// var convert = date.toString()
// var copy = convert.slice(0,15)
// document.write(copy)
// var date = new Date()
// var gettime = date.getTime()
// document.write(gettime)

function displayTime(){
    var time = new Date()
    var day = time.getDate()
    var hrs = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()

    
    document.getElementById('hr').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}

setInterval(displayTime , 1000)