const toggleContainer = document.querySelector(".toggle-container");

const toggleButton = document.querySelector(".ball");

const body = document.querySelector("body");

toggleContainer.addEventListener("click", () => {
  let nightMode = toggleButton.classList.toggle("night-mode");

  if (nightMode) {
    body.style.background = "#37474F";
    document.querySelector(".temp").style.color = "white";
    document.querySelector(".city_date").style.color = "white";
    document.querySelector(".date").style.color = "white";
    document.querySelector(".city").style.color = "white";
    document.querySelector(".desc").style.color = "white";
    document.querySelector(".collection").style.color = "white";
    document.querySelector(".celcius").style.color = "white";
  } else {
    body.style.background = "#C9C9C9";
    document.querySelector(".temp").style.color = "black";
    document.querySelector(".date").style.color = "black";
    document.querySelector(".city").style.color = "black";
    document.querySelector(".desc").style.color = "black";
    document.querySelector(".collection").style.color = "black";
    document.querySelector(".celcius").style.color = "black";
  }
});
