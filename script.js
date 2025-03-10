document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".archive-year-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", function () {
      const months = this.nextElementSibling; // Get the .archive-months div
      if (months.style.display === "block") {
        months.style.display = "none";
      } else {
        months.style.display = "block";
      }
    });
  });
});
