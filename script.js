
const weatherConditions = {
  sunny: {
    icon: "☀️",
    title: "Sunny",
    description: "The sky is bright and sunny."
  },
  rainy: {
    icon: "🌧️",
    title: "Rainy",
    description: "Rain is falling. Carry an umbrella outside."
  },
  cloudy: {
    icon: "☁️",
    title: "Cloudy",
    description: "Clouds cover much of the sky."
  },
  snowy: {
    icon: "❄️",
    title: "Snowy",
    description: "Snow is falling or expected. Keep warm."
  },
  stormy: {
    icon: "⛈️",
    title: "Stormy",
    description: "Thunderstorms may occur. Stay safe indoors."
  },
  windy: {
    icon: "💨",
    title: "Windy",
    description: "Noticeable winds are blowing."
  }
};

const weatherSelect =
  document.getElementById("weatherSelect");

const weatherIcon =
  document.getElementById("weatherIcon");

const weatherTitle =
  document.getElementById("weatherTitle");

const weatherDescription =
  document.getElementById("weatherDescription");

weatherSelect.addEventListener("change", function () {
  const selected = weatherSelect.value;

  if (selected === "") {
    weatherIcon.textContent = "🌤️";
    weatherTitle.textContent = "Welcome!";
    weatherDescription.textContent =
      "Select a condition to see its details.";
    document.body.className = "";
    return;
  }

  const weather = weatherConditions[selected];

  if (weather) {
    weatherIcon.textContent = weather.icon;
    weatherTitle.textContent = weather.title;
    weatherDescription.textContent = weather.description;
    document.body.className = selected;
  }
});
