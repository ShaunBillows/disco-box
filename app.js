document.addEventListener("DOMContentLoaded", () => {
  app(126, 13, "sounds", "mp3");
});

const app = (bpm, instrumentNumber, path, fileType) => {

  const beatInterval = ((60 * 1000) / bpm) * 16; // miliseconds per 4 bars
  let startTime = 0;

  // initialise instruments
  const instruments = new Array(instrumentNumber)
    .fill(0)
    .map((x, i) => new Instrument(`.pad-${i + 1}`, `${path}/${i + 1}.${fileType}`));

  // add event listeners
  instruments.forEach((instrument) => {
    instrument.pad.addEventListener("click", () => {
      playInstrument(instrument)
    });
  });

  const playInstrument = (instrument) => {
    setTimeout(() => {
      instrument.isPlaying ? instrument.playAudio() : instrument.pauseAudio();
    }, quantise(instruments));
    instrument.setIsPlaying();
    instrument.setPadColor();
  }

  const quantise = () => {
    // returns time / ms till the next beat interval
    if (instruments.some((x) => x.isPlaying)) {
      return beatInterval - ((announceTime() - startTime) % beatInterval);
    } else {
      instruments.forEach((x) => console.log(x.isPlaying) )
      startTime = announceTime();
      return 0;
    }
  };

  const announceTime = (clock) => {
    clock = clock || Date
    return clock.now()
  }
};
