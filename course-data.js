// course-data.js

// Set course ID and total modules
const courseId = "fullstack";
const totalModules = 5;

// Called when user completes a lesson/module
function completeLesson() {
  let progress = parseInt(localStorage.getItem(courseId)) || 0;
  if (progress < totalModules) {
    progress++;
    localStorage.setItem(courseId, progress);
    alert("Progress Saved!");
    location.href = "dashboard.html";
  } else {
    alert("You already completed this course.");
  }
}

// Load progress on dashboard
window.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");

  if (bar && text) {
    let progress = parseInt(localStorage.getItem(courseId)) || 0;
    const percent = Math.round((progress / totalModules) * 100);
    bar.style.width = percent + "%";
    text.textContent = percent + "%";
  }
});
