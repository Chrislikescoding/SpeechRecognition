const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = "en-US";
rec.continuous = true;

rec.onresult = (e) => {
  const acceptedColours = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "white",
    "black",
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    if (acceptedColours.includes(script)) {
      document.body.style.background = script;
    } else {
      alert("Please say a colour");
    }
  }
};

rec.start();
