const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase().trim();

  suggestions.innerHTML = "";

  if (value === "") return;

  cards.forEach((card) => {
    const name = card.querySelector("h3").textContent;

    if (name.toLowerCase().includes(value)) {
      const item = document.createElement("div");
      item.className = "suggestion";
      item.textContent = "🔍 " + name;

      item.onclick = () => {
        window.location.href = card.href;
      };

      suggestions.appendChild(item);
    }
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) {
    suggestions.innerHTML = "";
  }
});
