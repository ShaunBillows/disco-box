document.addEventListener("DOMContentLoaded", () => {
  class Instrument {
    constructor(pad, audio, isPlaying) {
      this.pad = document.querySelector(pad)
      this.audio = new Audio(audio)
      this.isPlaying = false
    }
    playAudio() {
      this.audio.play()
    }
    pauseAudio() {
      this.audio.pause()
      this.audio.currentTime = 0 
    }
    setPadColor() {
      if (this.isPlaying) {
        // this.pad.style.backgroundColor = "rgba(203,117,202,255,0.5)"
        this.pad.style.background = "linear-gradient(to right, #39ce7e, rgb(25,30,34))"
      } else { 
        // this.pad.style.backgroundColor = "rgba(87,4,171,255,0.9) "
        this.pad.style.background = "linear-gradient(to right, rgb(25,30,34), #028cd6)"
      }
    }
  }

  // const instrumentNumber = 9 

  // const instruments = new Array(instrumentNumber).map( (x, i) => 
  //   new Instrument(`.pad-${i+1}`, `./sounds3/${i+1}.wav`)
  // )

  // instruments1()

  let padOne = new Instrument(".pad-1", "./sounds3/1.wav")
  let padTwo = new Instrument(".pad-2", "./sounds3/2.wav")
  let padThree = new Instrument(".pad-3", "./sounds3/3.wav")
  let padFour = new Instrument(".pad-4", "./sounds3/4.wav")
  let padFive = new Instrument(".pad-5", "./sounds3/5.wav")
  let padSix = new Instrument(".pad-6", "./sounds3/6.wav")
  let padSeven = new Instrument(".pad-7", "./sounds3/7.wav")
  let padEight = new Instrument(".pad-8", "./sounds3/8.wav")
  let padNine = new Instrument(".pad-9", "./sounds3/9.wav")
  let padTen = new Instrument(".pad-10", "./sounds3/10.wav")
  let padEleven = new Instrument(".pad-11", "./sounds3/11.wav")
  let padTwelve = new Instrument(".pad-12", "./sounds3/12.wav")
  let padThirteen = new Instrument(".pad-13", "./sounds3/13.wav")


  const instruments = [
    padOne,
    padTwo,
    padThree,
    padFour,
    padFive,
    padSix,
    padSeven,
    padEight,
    padNine,
    padTen,
    padEleven,
    padTwelve,
    padThirteen
  ]

  const soundIsPlaying = () => {
    for (let i=0; i<instruments.length; i++) {
      if (instruments[i].isPlaying) {
        return true
      }
    }
    return false
  }

  const bpm = 126
  const beatInterval = 60 * 1000 / bpm * 16 // miliseconds per 4 bars
  let startTime = 0;

  const quantise = () => {
    if (soundIsPlaying()) {
      // returns the time till next interval
      return beatInterval - (Date.now() - startTime) % beatInterval
    } else {
      startTime = Date.now()
      return 0
    }
  }

  for (let i=0; i<instruments.length; i++) {
    instruments[i].pad.addEventListener("click", () => {

      if (instruments[i].isPlaying) {

        setTimeout(() => {
          instruments[i].pauseAudio()
        }, quantise())

        instruments[i].isPlaying = false
        instruments[i].setPadColor()

      } else {

        setTimeout( () => {
          instruments[i].playAudio()
        }, quantise())

        instruments[i].isPlaying = true
        instruments[i].setPadColor()
      }
    })
  }
});