const movies = [
  { title: "Avengers", image: "https://image.tmdb.org/t/p/w300/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", category: "Trending", rating: 4.5, description: "Superheroes unite to save the world." },
  { title: "Batman", image: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg", category: "Trending", rating: 4.7, description: "The Dark Knight of Gotham." },
  { title: "Interstellar", image: "https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", category: "TopRated", rating: 4.8, description: "Journey beyond space and time." },
  { title: "Inception", image: "https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", category: "TopRated", rating: 4.6, description: "Dreams within dreams." },
  { title: "John Wick", image: "https://image.tmdb.org/t/p/w300/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", category: "Action", rating: 4.4, description: "An ex-hitman seeks revenge." },
  { title: "Mad Max", image: "https://image.tmdb.org/t/p/w300/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", category: "Action", rating: 4.3, description: "Post-apocalyptic survival." }
];

const container = document.getElementById("movieContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const themeToggle = document.getElementById("themeToggle");

setTimeout(() => displayMovies(movies), 1200);

function displayMovies(list) {
  container.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.image}">
      <p>${movie.title}</p>
      <div class="rating">⭐ ${movie.rating}</div>
    `;
    card.onclick = () => showModal(movie);
    container.appendChild(card);
  });
}

function filterMovies() {
  const text = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(text) &&
    (category === "All" || movie.category === category)
  );
  displayMovies(filtered);
}

function showModal(movie) {
  modalTitle.innerText = movie.title;
  modalDesc.innerText = movie.description;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function scrollMovies(dir) {
  container.scrollLeft += dir * 300;
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☀" : "🌙";
});

searchInput.addEventListener("input", filterMovies);
categoryFilter.addEventListener("change", filterMovies);
