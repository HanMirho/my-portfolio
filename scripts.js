

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("hovered");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("hovered");
  });
});
