const quotes = [
    "Believe in yourself and all that you are.",
    "Start where you are. Use what you have. Do what you can.",
    "You are stronger than you think.",
    "Dream big. Start small. Act now.",
    "Your only limit is your mind.",
    "Push yourself, because no one else is going to do it for you.",
    "Stay positive. Work hard. Make it happen.",
    "Don’t stop until you’re proud.",
    "Doubt kills more dreams than failure ever will.",
    "Create the life you can’t wait to wake up to."
  ];
  
  const backgrounds = [
    "https://source.unsplash.com/1600x900/?nature,sky",
    "https://source.unsplash.com/1600x900/?mountain,sunrise",
    "https://source.unsplash.com/1600x900/?ocean,calm",
    "https://source.unsplash.com/1600x900/?forest,light",
    "https://source.unsplash.com/1600x900/?stars,night"
  ];
  
  function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  
    document.getElementById("quote").innerText = quote;
    document.body.style.backgroundImage = `url(${bg})`;
  }
  
  function toggleMode() {
    document.body.classList.toggle("dark");
  }
  
  function updateDateTime() {
    const now = new Date();
    document.getElementById("datetime").innerText = now.toLocaleString();
  }
  
  // Update date/time every second
  setInterval(updateDateTime, 1000);
  updateDateTime();
  