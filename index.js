const obj = {
  a1: 1,
  a2: 2,
  b1: 3,
  b2: 4,
  c1: 5,
  c2: 6,
};

const levelNameObject = {
  a1: "Elementary",
  a2: "Pre-intermediate",
  b1: "Intermediate",
  b2: "Upper intermediate",
  c1: "Advanced",
  c2: "Proficiency",
};

window.addEventListener("load", function () {
  const langs = document.querySelectorAll(".languge-level");

  langs.forEach((e) => {
    const lang = e.getAttribute("data-language");
    const level = e.getAttribute("data-level").toLowerCase();

    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info-lang-block");

    const langEl = document.createElement("p");
    langEl.textContent = lang + ":";
    langEl.classList.add("info-lang-block-lang");

    const levelEl = document.createElement("p");
    levelEl.textContent = level.toUpperCase();
    levelEl.classList.add("info-lang-block-level");

    const visLang = document.createElement("ul");
    visLang.classList.add("vis-lang");
    visLang.classList.add("flex-container");

    for (let i = 0; i < 6; i++) {
      const l = document.createElement("li");
      if (obj[level] > i) l.classList.add("current");
      visLang.appendChild(l);
    }

    const levelName = document.createElement("p");
    levelName.classList.add("language-level-name");
    levelName.textContent = levelNameObject[level];

    infoBlock.appendChild(langEl);
    infoBlock.appendChild(levelEl);

    e.appendChild(infoBlock);
    e.appendChild(visLang);
    e.appendChild(levelName);
  });
});
