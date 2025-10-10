// ===== Scroll Animation =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== Back to Top =====
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) toTop.classList.add("show");
  else toTop.classList.remove("show");
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
