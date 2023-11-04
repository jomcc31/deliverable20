var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});


function pageLoad() {
	const videoElement = document.querySelector(".video")
	videoElement.preload = true
	videoElement.autoplay = false
	videoElement.loop = false
}

document.addEventListener("DOMContentLoaded", function() {

	const videoElement = document.querySelector(".video")

document.querySelector("#play").addEventListener('click', function() {
	videoElement.play()	
	videoElement.volume = parseFloat(volumeSlider.value) / 100;
  
	volumeInfo.textContent = `${volumeSlider.value}%`;
})
document.querySelector("#pause").addEventListener('click', function() {
	videoElement.pause()	
})

videoElement.currentPlaybackRate = 1.0;
//slow down
const slowButton = document.getElementById("slower")


slowButton.addEventListener('click', function() {

  videoElement.playbackRate -= 0.1;

  console.log(`New speed: ${videoElement.playbackRate}`)
})

//speed up
const fastButton = document.getElementById("faster")

fastButton.addEventListener('click', function() {

  videoElement.playbackRate += 0.1;

  console.log(`New speed: ${videoElement.playbackRate}`)
})


const skipButton = document.getElementById('skip')

skipButton.addEventListener('click', function() {

  let newTime = videoElement.currentTime + 10

  if (newTime > videoElement.duration) {
    newTime = 0;
  }

  videoElement.currentTime = newTime;

  console.log(`Current video time: ${videoElement.currentTime}`);
});

const muteButton = document.querySelector("#mute")

muteButton.addEventListener('click', function() {
	
	if (videoElement.muted) {
		videoElement.muted = false;
		muteButton.textContent = 'Mute';
	  } else {
		videoElement.muted = true;
		muteButton.textContent = 'Unmute';
	  }

  })

const volumeSlider = document.getElementById("slider"); 
const volumeInfo = document.getElementById("volume");

volumeSlider.addEventListener('input', function() {

	videoElement.volume = parseFloat(volumeSlider.value) / 100;
  
	volumeInfo.textContent = `${volumeSlider.value}%`;
  });

document.querySelector("#vintage").addEventListener("click", function() {

	videoElement.classList.add("oldSchool")

})

document.querySelector("#orig").addEventListener("click", function() {

	videoElement.classList.remove("oldSchool")

})
})
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

