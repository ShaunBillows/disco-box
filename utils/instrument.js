class Instrument {
  constructor(pad, audio) {
    this.pad = document.querySelector(pad);
    this.audio = new Audio(audio);
    this.isPlaying = false;
  }
  playAudio() {
    this.audio.play();
  }
  pauseAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  setPadColor() {
    this.isPlaying
      ? (this.pad.style.background =
          "linear-gradient(to right, #39ce7e, rgb(25,30,34))")
      : (this.pad.style.background =
          "linear-gradient(to right, rgb(25,30,34), #028cd6)");
  }
  setIsPlaying() {
    this.isPlaying = !this.isPlaying;
  }
}
