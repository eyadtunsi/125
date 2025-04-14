document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("languageSwitcher");

  function switchLanguage(lang) {
    document.querySelectorAll("[data-en]").forEach((el) => {
      if (el.dataset[lang]) {
        el.textContent = el.dataset[lang];
      }
    });

    document.documentElement.lang = lang;
  }

  switcher.addEventListener("change", (e) => {
    switchLanguage(e.target.value);
  });

  // Default language
  switchLanguage("en");
});
