(function () {
  const S = window.SITE;
  const P = S.profile;
  const I = window.I18N;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const fullName = `${P.firstName} ${P.lastName}`;
  const boldMe = (authors) => esc(authors).replace(fullName, `<span class="me">${fullName}</span>`);

  // i18n: entries are keyed by their English text, whitespace-insensitive.
  const LANGS = I.languages.map((l) => l.code);
  const norm = (s) => String(s).replace(/\s+/g, " ").trim();
  const dict = Object.fromEntries(LANGS.map((code) => [code, new Map()]));
  for (const e of [...I.ui, ...I.content]) {
    for (const code of LANGS) if (e[code]) dict[code].set(norm(e.en), e[code]);
  }

  let lang = "en";
  try {
    if (LANGS.includes(localStorage.getItem("lang"))) lang = localStorage.getItem("lang");
  } catch {}
  const urlLang = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(urlLang)) lang = urlLang;

  const tr = (s) => (lang === "en" ? s : dict[lang].get(norm(s)) ?? s);
  const trDate = (d) =>
    lang === "en" ? d : String(d).replace(/\b[A-Z][a-z]{2}\b/g, (m) => I.months[lang][I.months.en.indexOf(m)] ?? m);
  const trMeta = (m) => m.replace("(to appear)", tr("(to appear)")).replace("Under review", tr("Under review"));

  const linkList = (links = {}) =>
    Object.entries(links)
      .filter(([, url]) => url)
      .map(([label, url]) => `<a href="${esc(url)}">${esc(tr(label))}</a>`);

  const timeline = (items, dateKey) =>
    `<ul class="timeline">${items
      .map((i) => `<li><span class="when">${esc(trDate(i[dateKey]))}</span><span>${tr(i.text)}</span></li>`)
      .join("")}</ul>`;

  // Custom cursor, only with a mouse.
  if (matchMedia("(pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const root = document.documentElement;
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.append(dot, ring);
    root.classList.add("has-cursor");
    let mx = 0, my = 0, rx = 0, ry = 0;
    addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      root.classList.add("cursor-on");
      root.classList.toggle("cursor-hover", !!e.target.closest("a, button"));
    });
    document.addEventListener("mouseleave", () => root.classList.remove("cursor-on"));
    const follow = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(follow);
    };
    follow();
  }

  // Mobile menu
  $(".nav-toggle").addEventListener("click", () => $(".nav").classList.toggle("open"));

  // Language menu
  const langBtn = $(".lang-btn");
  const langMenu = $(".lang-menu");
  langMenu.innerHTML = I.languages
    .map((l) => `<li><button type="button" data-lang="${l.code}" lang="${l.code}">${l.label}</button></li>`)
    .join("");
  const setMenuOpen = (open) => {
    langMenu.hidden = !open;
    langBtn.setAttribute("aria-expanded", String(open));
  };
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    setMenuOpen(langMenu.hidden);
  });
  langMenu.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-lang]");
    if (!b) return;
    lang = b.dataset.lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
    setMenuOpen(false);
    render();
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".lang")) setMenuOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenuOpen(false);
  });

  $("[data-fill='name']").innerHTML = `<strong>${esc(P.firstName)}</strong> ${esc(P.lastName)}`;
  $("[data-fill='year']").textContent = new Date().getFullYear();
  $("[data-fill='fullname']").textContent = fullName;

  // Highlight the nav link of the section in view.
  const navLinks = [...$$(".nav a[data-section]")];
  navLinks.forEach((a) => a.addEventListener("click", () => $(".nav").classList.remove("open")));
  const sections = navLinks.map((a) => document.getElementById(a.dataset.section));
  const onScroll = () => {
    let current = sections[0].id;
    for (const sec of sections) if (sec.getBoundingClientRect().top <= 120) current = sec.id;
    if (innerHeight + scrollY >= document.body.scrollHeight - 2) current = sections.at(-1).id;
    navLinks.forEach((a) => a.classList.toggle("active", a.dataset.section === current));
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("load", onScroll);

  // Project images match the height of their card text, then all take the tallest
  // height. Setting the height changes the width and so the text height, hence the loop.
  // Images with data-fit="width" take the shared width instead.
  const fitProjectImages = () => {
    const stacked = matchMedia("(max-width: 720px)").matches;
    const byHeight = [];
    const byWidth = [];
    $$(".project").forEach((card) => {
      const img = card.querySelector("img");
      const body = card.querySelector(".project-body");
      if (!img) return;
      img.style.height = "";
      img.style.width = "";
      if (stacked || !img.naturalWidth) return;
      if (img.dataset.fit === "width") return byWidth.push(img);
      for (let i = 0; i < 6 && Math.abs(img.offsetHeight - body.offsetHeight) >= 1; i++) {
        img.style.height = `${body.offsetHeight}px`;
      }
      byHeight.push(img);
    });
    const h = Math.max(0, ...byHeight.map((img) => img.offsetHeight));
    byHeight.forEach((img) => (img.style.height = `${h}px`));
    const w = Math.max(0, ...byHeight.map((img) => img.offsetWidth));
    if (w) byWidth.forEach((img) => (img.style.width = `${w}px`));
  };
  addEventListener("resize", fitProjectImages);

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // clipboard API is unavailable on file://
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.append(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
  };

  const paperHtml = (t) => {
    const title = t.url ? `<a href="${esc(t.url)}">${esc(t.title)}</a>` : esc(t.title);
    const bib = t.bibtex ? `<a href="#" class="bibtex-copy" data-bibtex="${esc(t.bibtex)}">bibtex</a>` : "";
    const links = [...linkList(t.links), bib].filter(Boolean).join(" / ");
    return `<li class="research-item">
      <a class="research-img" href="${esc(t.image)}"><img src="${esc(t.image)}" alt=""></a>
      <div>
        <h3 class="research-title">${title}</h3>
        <p class="research-authors">${boldMe(t.authors)}</p>
        <p class="research-meta">${trMeta(t.meta)}</p>
        ${links ? `<p class="research-links">${links}</p>` : ""}
        <p class="research-text">${tr(t.text)}</p>
      </div>
    </li>`;
  };

  const projectHtml = (p) => {
    const points = (p.points || [])
      .map((pt) => (typeof pt === "string" ? `<li>${tr(pt)}</li>` : `<li><strong>${esc(tr(pt[0]))}:</strong> ${tr(pt[1])}</li>`))
      .join("");
    const links = [...linkList(p.links), p.note ? esc(tr(p.note)) : ""].filter(Boolean).join(" / ");
    return `<article class="project" id="${esc(p.id)}">
      ${p.image ? `<img src="${esc(p.image)}" alt=""${p.imageFit === "width" ? ' data-fit="width"' : ""}>` : ""}
      <div class="project-body">
        <h3>${esc(tr(p.name))}</h3>
        <p class="tagline">${esc(tr(p.tagline))}</p>
        <p>${tr(p.description)}</p>
        ${points ? `<ul class="project-points">${points}</ul>` : ""}
        ${links ? `<p class="research-links">${links}</p>` : ""}
      </div>
    </article>`;
  };

  // Everything that depends on the language.
  const render = () => {
    document.documentElement.lang = lang;
    $(".lang-code").textContent = lang.toUpperCase();
    langBtn.setAttribute("aria-label", tr("Language"));
    $$(".lang-menu button").forEach((b) => b.setAttribute("aria-current", String(b.dataset.lang === lang)));

    $$("[data-i18n]").forEach((el) => {
      el.dataset.src ??= el.innerHTML;
      el.innerHTML = tr(el.dataset.src);
    });

    $("#subtitle").innerHTML = `<strong>${esc(tr(P.title))}</strong> ${esc(tr("at"))} <a href="${esc(P.affiliationUrl)}">${esc(P.affiliation)}</a>`;
    $("#keywords").textContent = tr(P.keywords);
    $("#bio").innerHTML = P.bio.map((p) => `<p>${tr(p)}</p>`).join("");
    $("#photo").src = P.photo;
    $("#photo").alt = fullName;
    $("#photo-caption").textContent = P.photoCaption;
    const social = [
      [tr("Email"), `mailto:${P.email}`],
      ["Google Scholar", P.scholar],
      ["GitHub", P.github],
      ["LinkedIn", P.linkedin],
      ["CV", P.cv],
    ].filter(([, url]) => url);
    $("#social").innerHTML = social
      .map(([label, url]) => `<li><a href="${esc(url)}"${url === P.cv ? " download" : ""}>${esc(label)}</a></li>`)
      .join("");

    $("#research-intro").innerHTML = tr(S.research.intro);
    $("#research-themes").innerHTML = S.research.papers.map(paperHtml).join("");
    $$(".bibtex-copy").forEach((btn) =>
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        await copyText(btn.dataset.bibtex);
        btn.textContent = tr("copied!");
        setTimeout(() => (btn.textContent = "bibtex"), 1500);
      })
    );

    $("#news").innerHTML = timeline(S.news, "date");
    $("#awards").innerHTML = timeline(S.awards, "year");

    $("#project-list").innerHTML = S.projects.map(projectHtml).join("");
    $$(".project img").forEach((img) => img.addEventListener("load", fitProjectImages));
    fitProjectImages();

    $("#talks-list").innerHTML = timeline(S.talks, "date");
    $("#teaching-list").innerHTML = timeline(S.teaching, "term");
    $("#email-line").innerHTML =
      `${esc(tr("Email"))}: <a href="mailto:${esc(P.email)}">${esc(P.email)}</a>.` +
      (P.cv ? ` <a href="${esc(P.cv)}" download>${esc(tr("Download my CV"))}</a>.` : "");

    // External links open in a new tab.
    $$("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      if (href.startsWith("#") || href.startsWith("mailto:") || a.hasAttribute("download")) return;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });
  };

  render();
  onScroll();
})();
