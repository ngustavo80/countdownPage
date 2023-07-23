var launchDay = new Date('Aug 1, 2023 15:00:00').getTime()
const countDownElement = document.querySelector('#time-left')

var countDown = setInterval(function() {
  var currentDay = new Date().getTime()

  var timeLeftToLaunch = launchDay - currentDay

  var days = Math.floor(timeLeftToLaunch / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeftToLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeftToLaunch % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeftToLaunch % (1000 * 60)) / 1000);

  days = days < 10 ? '0' + days : days
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  countDownElement.innerHTML = days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds

  if (timeLeftToLaunch < 0) {
    clearInterval(timeLeftToLaunch)
    countDownElement.innerHTML = "Launched"
  }
}, 1000)