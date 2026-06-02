/* 1) Dynamic copyright year */
const currentYear = new Date().getFullYear();
const startYear = 2024;
const yearString = startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`;
document.querySelectorAll('.copyright-year')
  .forEach(el => el.textContent = yearString);

/* 2) Triple-layer email obfuscation */
const emailParts = [
  "cGF0cmljay5v",   // patrick.o
  "c3Rlcmx1bmRA",   // sterlund@
  "Z21haWwuY29t"    // gmail.com
];
const decodedEmail = atob(emailParts.join(''));
const safeEmail = decodedEmail.replace("@", " [at] ");
document.getElementById('email').innerText = safeEmail;

/* 3) Tab switching logic */
function showTab(lang, tabElement) {
  document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
  document.getElementById(lang).classList.add('active');

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tabElement.classList.add('active');
}
window.showTab = showTab;

/* 4) Formspree AJAX submission */
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
