/* ── Scroll Reveal ───────────────────────────────── */
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .zoom-reveal")
  .forEach((el) => observer.observe(el));

/* ── Save / Bookmark ─────────────────────────────── */
const favorites = new Set(JSON.parse(localStorage.getItem("afterTasteFaves") || "[]"));

function syncSaveBtn(btn) {
  const saved = favorites.has(btn.dataset.title);
  btn.classList.toggle("saved", saved);
  btn.querySelector("i").className = saved ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark";
  btn.setAttribute("aria-label", saved ? "Remove saved recipe" : "Save recipe");
}

document.querySelectorAll(".save-btn").forEach((btn) => {
  syncSaveBtn(btn);
  btn.addEventListener("click", () => {
    const { title } = btn.dataset;
    favorites.has(title) ? favorites.delete(title) : favorites.add(title);
    localStorage.setItem("afterTasteFaves", JSON.stringify([...favorites]));
    syncSaveBtn(btn);
  });
});

/* ── Dark / Light Theme ──────────────────────────── */
const themeToggle = document.getElementById("themeToggle");

function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeToggle.textContent = dark ? "☀️" : "🌙";
}

applyTheme(localStorage.getItem("afterTasteTheme") === "dark");

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("afterTasteTheme", isDark ? "light" : "dark");
  applyTheme(!isDark);
});

/* ── Back to Top ─────────────────────────────────── */
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 400);
}, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ── Newsletter ──────────────────────────────────── */
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank You for Subscribing")
  newsletterMessage.textContent = "You're in! Check your inbox for this week's top recipes. 🎉";
  newsletterForm.reset();
});