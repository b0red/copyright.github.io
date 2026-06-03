/* =========================================================
   5) Theme Toggle + System Auto Mode + Fade Transition
   ========================================================= */

(function() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

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
      toggle.textContent = "☀️";
    } else {
      root.removeAttribute("data-theme");
      toggle.textContent = "🌙";
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
