const randomEl = document.getElementById("random");
const randomText = document.getElementById("random-text");

const url = "https://apis.scrimba.com/bored/api/activity";

randomEl.addEventListener("click", () => {
  fetch(url)
    .then((resposne) => resposne.json())
    .then((data) => {
      randomText.textContent = data.activity;
    });
});
