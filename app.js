document.addEventListener("DOMContentLoaded", () => {
  app(126, 9, "/sounds");
});

const app = (bpm, instrumentNumber, path) => {
  const beatInterval = ((60 * 1000) / bpm) * 16; // miliseconds per 4 bars
  let startTime = 0;

  // initialise instruments
  const instruments = new Array(instrumentNumber)
    .fill(0)
    .map((x, i) => new Instrument(`.pad-${i + 1}`, `${path}/${i + 1}.wav`));

  instruments.forEach((instrument) => {
    instrument.pad.addEventListener("click", () => {
      instrument.setIsPlaying();
      instrument.setPadColor();
      setTimeout(() => {
        instrument.isPlaying ? instrument.playAudio() : instrument.pauseAudio();
      }, quantise(instruments));
    });
  });

  const quantise = () => {
    // returns time / ms till the next beat interval
    if (instruments.some((x) => x.isPlaying)) {
      return beatInterval - ((Date.now() - startTime) % beatInterval);
    } else {
      startTime = Date.now();
      return 0;
    }
  };
};
