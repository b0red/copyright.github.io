/* =========================================================
   1) Dynamic copyright year
   ========================================================= */
const currentYear = new Date().getFullYear();
const startYear = 2024;
const yearString = startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`;
document.querySelectorAll('.copyright-year')
  .forEach(el => el.textContent = yearString);


/* =========================================================
   2) Triple-layer email obfuscation
   ========================================================= */
const emailParts = [
  "cGF0cmljay5v",   // patrick.o
  "c3Rlcmx1bmRA",   // sterlund@
  "Z21haWwuY29t"    // gmail.com
];
const decodedEmail = atob(emailParts.join(''));
const safeEmail = decodedEmail.replace("@", " [at] ");
const emailEl = document.getElementById('email');
if (emailEl) emailEl.innerText = safeEmail;


/* =========================================================
   3) Tab switching logic
   ========================================================= */
function showTab(lang, tabElement) {
  document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
  document.getElementById(lang).classList.add('active');

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tabElement.classList.add('active');
}
window.showTab = showTab;


/* =========================================================
   4) Formspree AJAX submission
   ========================================================= */
function handleForm(formId, successId, errorId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        document.getElementById(successId).classList.remove("hidden");
        document.getElementById(errorId).classList.add("hidden");
        form.reset();
      } else {
        document.getElementById(errorId).classList.remove("hidden");
      }
    } catch {
      document.getElementById(errorId).classList.remove("hidden");
    }
  });
}

handleForm("form-en", "success-en", "error-en");
handleForm("form-sv", "success-sv", "error-sv");


/* =========================================================
   5) Theme Toggle + System Auto Mode + Fade Transition
      + Sliding Switch + Sun/Moon Morph Animation
   ========================================================= */

(function() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  if (!toggle) return;

  /* Smooth fade transition */
  const applyFade = () => {
    root.classList.add("theme-fade");
    setTimeout(() => root.classList.remove("theme-fade"), 300);
  };

  /* Detect system preference */
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  /* Apply theme */
  function setTheme(mode, save = true) {
    applyFade();

    if (mode === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }

    if (save) {
      localStorage.setItem("theme", mode);
    }
  }

  /* Load saved theme or fall back to system */
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    setTheme("dark", false);
  } else if (saved === "light") {
    setTheme("light", false);
  } else {
    // No saved preference → follow system
    setTheme(systemPrefersDark.matches ? "dark" : "light", false);
  }

  /* React to system changes live */
  systemPrefersDark.addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      setTheme(e.matches ? "dark" : "light", false);
    }
  });

  /* Manual toggle */
  toggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "light" : "dark");
  });
})();
