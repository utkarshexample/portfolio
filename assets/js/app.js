/* ============================================================
   Renders the portfolio from SITE (assets/js/data.js).
   Vanilla JS. No dependencies.
   ============================================================ */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- hero ---------- */
  $("hero-eyebrow").textContent = SITE.hero.eyebrow;
  $("hero-headline").textContent = SITE.hero.headline;
  $("hero-subline").textContent = SITE.hero.subline;
  var cta = $("hero-cta");
  cta.textContent = "→ " + SITE.hero.cta.label;
  cta.href = SITE.hero.cta.href;

  /* ---------- metrics ---------- */
  $("metric-tiles").innerHTML = SITE.metrics
    .map(function (m) {
      return (
        '<div class="tile">' +
        '<div class="value">' + esc(m.value) + "</div>" +
        '<div class="label">' + esc(m.label) + "</div>" +
        '<div class="note">' + esc(m.note) + "</div>" +
        "</div>"
      );
    })
    .join("");

  /* ---------- experience (skip entries with empty title) ---------- */
  var jobs = SITE.experience.filter(function (j) { return j.title; });
  $("timeline").innerHTML = jobs
    .map(function (j) {
      var points = (j.points || [])
        .map(function (p) { return "<li>" + esc(p) + "</li>"; })
        .join("");
      return (
        "<li>" +
        '<div class="job-head">' +
        '<span class="job-company">' + esc(j.company) + "</span>" +
        '<span class="job-title">' + esc(j.title) + "</span>" +
        '<span class="job-meta">' + esc(j.location) + " · " + esc(j.period) + "</span>" +
        "</div>" +
        (points ? '<ul class="job-points">' + points + "</ul>" : "") +
        "</li>"
      );
    })
    .join("");

  /* ---------- lab ---------- */
  $("lab-list").innerHTML = SITE.lab
    .map(function (item) {
      var pillClass = item.status === "in progress" ? "progress" : "planned";
      return (
        "<li>" +
        '<div class="lab-name">' + esc(item.name) +
        '<span class="pill ' + pillClass + '">' + esc(item.status) + "</span></div>" +
        '<p class="lab-note">' + esc(item.note) + "</p>" +
        "</li>"
      );
    })
    .join("");

  /* ---------- stack ---------- */
  $("stack-groups").innerHTML = SITE.stack
    .map(function (g) {
      var chips = g.items
        .map(function (i) { return '<span class="chip">' + esc(i) + "</span>"; })
        .join("");
      return (
        '<div class="stack-group"><h3>' + esc(g.group) + '</h3><div class="chips">' +
        chips + "</div></div>"
      );
    })
    .join("");

  /* ---------- about + education ---------- */
  $("about-text").textContent = SITE.about;
  $("edu-list").innerHTML = SITE.education
    .map(function (e) {
      return (
        "<li>" +
        '<div class="edu-school">' + esc(e.school) + "</div>" +
        '<div class="edu-program">' + esc(e.program) + "</div>" +
        '<div class="edu-meta">' + esc(e.location) + " · " + esc(e.period) + "</div>" +
        "</li>"
      );
    })
    .join("");

  /* ---------- personal ---------- */
  $("personal-title").textContent = SITE.personal.title;
  $("personal-list").innerHTML = SITE.personal.lines
    .map(function (l) { return "<li>" + esc(l) + "</li>"; })
    .join("");

  /* ---------- contact ---------- */
  $("contact-loc").textContent = SITE.location + " · " + SITE.timezone.replace("_", " ");
  $("contact-email").href = "mailto:" + SITE.email;
  $("contact-github").href = SITE.github;
  $("year").textContent = new Date().getFullYear();

  /* ---------- live Toronto clock ---------- */
  function tick() {
    try {
      var t = new Intl.DateTimeFormat("en-CA", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: SITE.timezone,
      }).format(new Date());
      $("clock").textContent = t;
    } catch (e) {
      $("clock").textContent = "";
    }
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- reveal on scroll ---------- */
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
})();
