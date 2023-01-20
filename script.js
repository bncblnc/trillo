const hotelSection = document.querySelector(".hotel-view");
const flightSection = document.querySelector(".flight-view");
const carSection = document.querySelector(".car-view");
const toursSection = document.querySelector(".tours-view");

const navHotel = document.getElementById("hotel");
const navFlight = document.getElementById("flight");
const navCar = document.getElementById("car");
const navTours = document.getElementById("tours");

const accordion = document.querySelectorAll(".accordion__item");

const search = document.querySelector(".search__input");
const searchSuggestion = document.querySelector(".search__suggestion");

const user = document.querySelector(".user-nav__user");
const userExpand = document.querySelector(".user-options");
const bookmarks = document.querySelector(".bookmarks");
const bookmarksExpand = document.querySelector(".book-options");
const messages = document.querySelector(".messages");
const messagesExpand = document.querySelector(".msg-options");

// NAVIGATION

navHotel.addEventListener("click", openSection);
navFlight.addEventListener("click", openSection);
navCar.addEventListener("click", openSection);
navTours.addEventListener("click", openSection);

function openSection(e) {
  const clicked = e.target.closest(".side-nav__item");
  if (clicked.classList.contains("side-nav__item--active")) return;

  resetNav();
  clicked.classList.add("side-nav__item--active");

  resetView();

  switch (clicked.id) {
    case "hotel":
      hotelSection.classList.remove("hidden");
      break;
    case "flight":
      flightSection.classList.remove("hidden");
      break;
    case "car":
      carSection.classList.remove("hidden");
      break;
    case "tours":
      toursSection.classList.remove("hidden");
      break;
  }
}

function resetView() {
  hotelSection.classList.add("hidden");
  flightSection.classList.add("hidden");
  carSection.classList.add("hidden");
  toursSection.classList.add("hidden");
}

function resetNav() {
  navHotel.classList.remove("side-nav__item--active");
  navFlight.classList.remove("side-nav__item--active");
  navCar.classList.remove("side-nav__item--active");
  navTours.classList.remove("side-nav__item--active");
}

// ACCORDION

accordion.forEach((item) => {
  item.addEventListener("click", function (e) {
    const item = e.target.closest(".accordion__item");
    item.classList.toggle("accordion__open");
  });
});

//SEARCH
search.addEventListener("focus", toggleSearchSuggestion);
search.addEventListener("blur", toggleSearchSuggestion);

function toggleSearchSuggestion() {
  searchSuggestion.classList.toggle("search__hidden");
}

// DROPDOWN FOR MOBILE
user.addEventListener("click", () =>
  userExpand.style.maxHeight == "0px"
    ? (userExpand.style.maxHeight = "100rem")
    : (userExpand.style.maxHeight = "0px")
);

bookmarks.addEventListener("click", () =>
  bookmarksExpand.style.maxHeight == "0px"
    ? (bookmarksExpand.style.maxHeight = "100rem")
    : (bookmarksExpand.style.maxHeight = "0px")
);

messages.addEventListener("click", () =>
  messagesExpand.style.maxHeight == "0px"
    ? (messagesExpand.style.maxHeight = "100rem")
    : (messagesExpand.style.maxHeight = "0px")
);
