(() => {
  const listTitle = document.getElementById("list-title");
  const searches = new URLSearchParams(window.location.search);
  const genre = searches.get("genreTitle");
  if (listTitle && genre) {
    listTitle.innerText = `ژانر : ${genre}`;
  }
  const q = searches.get("q");
  if (listTitle && q) {
    listTitle.innerText = `نتایج جستجو برای : ${q}`;
  }
})();

const searchContainer = document.querySelector(".search--container");
const searchOverlay = document.querySelector(".search--overlay");
const searchText = document.querySelector(".header__search");
const searchIcon = document.querySelector("#search");

const showSearch = () => {
  searchContainer.style.display = "flex";
};

searchText.onclick = showSearch;
searchIcon.onclick = showSearch;

const hideSearch = () => {
  searchContainer.style.display = "none";
};

searchOverlay.onclick = hideSearch;
