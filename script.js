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
   5) Theme Toggle — 3-State (Light / Auto / Dark)
      + System Auto Mode
   ========================================================= */

(function() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  const modeLabels = { light: "Theme: Light", auto: "Theme: Automatic", dark: "Theme: Dark" };

  function updateToggleTitle(mode) {
    toggle.title = modeLabels[mode] || "Theme: Automatic";
  }

  function updateMetaThemeColor() {
    if (!metaThemeColor) return;
    const isDark = root.getAttribute("data-theme") === "dark";
    metaThemeColor.setAttribute("content", isDark ? "#0d1117" : "#f5f5f5");
  }

  function applySystemTheme() {
    if (systemPrefersDark.matches) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    updateMetaThemeColor();
  }

  /* Apply theme mode: "light" | "dark" | "auto" */
  function setThemeMode(mode, save = true) {
    if (mode === "light") {
      root.dataset.themeMode = "light";
      root.removeAttribute("data-theme");
    } else if (mode === "dark") {
      root.dataset.themeMode = "dark";
      root.setAttribute("data-theme", "dark");
    } else {
      // auto
      root.dataset.themeMode = "auto";
      applySystemTheme();
    }

    updateMetaThemeColor();
    updateToggleTitle(mode);

    if (save) {
      if (mode === "auto") {
        localStorage.removeItem("themeMode");
      } else {
        localStorage.setItem("themeMode", mode);
      }
    }
  }

  /* Load saved mode or default to auto — sets data-theme-mode for CSS toggle */
  const savedMode = localStorage.getItem("themeMode");
  if (savedMode === "light" || savedMode === "dark") {
    setThemeMode(savedMode, false);
  } else {
    setThemeMode("auto", false);
  }

  /* React to system changes when in auto mode */
  systemPrefersDark.addEventListener("change", () => {
    if (root.dataset.themeMode === "auto") {
      applySystemTheme();
    }
  });

  /* Cycle through modes: light → auto → dark → light */
  toggle.addEventListener("click", () => {
    const current = root.dataset.themeMode || "auto";
    let next;
    if (current === "light") next = "auto";
    else if (current === "auto") next = "dark";
    else next = "light";

    setThemeMode(next);
  });
})();
