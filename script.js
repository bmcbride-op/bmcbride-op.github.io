document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");
  const yearToggles = document.querySelectorAll(".archive-year-toggle");
  const monthTitles = document.querySelectorAll(".month-title");

  console.log("Year toggles found:", yearToggles.length);
  console.log("Month titles found:", monthTitles.length);

  if (yearToggles.length > 0) {
    yearToggles.forEach(toggle => {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        const months = this.nextElementSibling;
        if (months && months.classList.contains("archive-months")) {
          if (months.style.display === "block") {
            months.style.display = "none";
          } else {
            document.querySelectorAll(".archive-months").forEach(m => m.style.display = "none");
            months.style.display = "block";
          }
        }
      });
    });
  } else {
    console.log("No year toggles found");
  }

  if (monthTitles.length > 0) {
    monthTitles.forEach(title => {
      title.addEventListener("click", function (e) {
        e.preventDefault();
        const posts = this.nextElementSibling;
        if (posts && posts.classList.contains("month-posts")) {
          if (posts.style.display === "block") {
            posts.style.display = "none";
          } else {
            document.querySelectorAll(".month-posts").forEach(p => p.style.display = "none");
            posts.style.display = "block";
          }
        }
      });
    });
  } else {
    console.log("No month titles found");
  }
});
