(function () {
  // ===== existing: mobile nav toggle (있으면 유지) =====
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const year = document.querySelector("#year");

  if (year) year.textContent = new Date().getFullYear();

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    });

    document.addEventListener("click", (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const inside = nav.contains(t) || toggle.contains(t);
      if (!inside && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "메뉴 열기");
      }
    });
  }

  // ===== NEW: hero carousel (single-box fade) =====
  const carousel = document.querySelector(".hero-carousel");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll(".hero-carousel__slide"));
  const prevBtn = carousel.querySelector(".hero-carousel__btn--prev");
  const nextBtn = carousel.querySelector(".hero-carousel__btn--next");
  const dots = Array.from(carousel.querySelectorAll(".hero-carousel__dot"));

  let index = 0;
  let timer = null;
  const autoplay = carousel.dataset.autoplay === "true";
  const interval = Number(carousel.dataset.interval || 5000);

  function setActive(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("is-active", k === index));
    dots.forEach((d, k) => d.classList.toggle("is-active", k === index));
  }

  function next() { setActive(index + 1); }
  function prev() { setActive(index - 1); }

  function start() {
    if (!autoplay) return;
    stop();
    timer = window.setInterval(next, interval);
  }

  function stop() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  if (nextBtn) nextBtn.addEventListener("click", () => { next(); start(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prev(); start(); });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { setActive(i); start(); });
  });

  // hover 시 멈춤 (선택)
  const viewport = carousel.querySelector(".hero-carousel__viewport");
  if (viewport) {
    viewport.addEventListener("mouseenter", stop);
    viewport.addEventListener("mouseleave", start);
    viewport.addEventListener("focusin", stop);
    viewport.addEventListener("focusout", start);
  }

  setActive(0);
  start();
})();
// ===== Gallery carousels (auto dots + autoplay) =====
(function () {
  const carousels = Array.from(document.querySelectorAll(".gallery-carousel"));
  if (carousels.length === 0) return;

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".gallery-slide"));
    const viewport = carousel.querySelector(".gallery-viewport");
    const prevBtn = carousel.querySelector(".gallery-btn--prev");
    const nextBtn = carousel.querySelector(".gallery-btn--next");
    const dotsWrap = carousel.querySelector(".gallery-dots");

    if (!viewport || slides.length === 0 || !dotsWrap) return;

    // dots 생성
    dotsWrap.innerHTML = "";
    const dots = slides.map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "gallery-dot" + (i === 0 ? " is-active is-active--accent" : "");
      b.setAttribute("aria-label", `Slide ${i + 1}`);
      dotsWrap.appendChild(b);
      return b;
    });

    let index = 0;
    let timer = null;
    const autoplay = carousel.dataset.autoplay === "true";
    const interval = Number(carousel.dataset.interval || 5000);

    function setActive(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("is-active", k === index));
      dots.forEach((d, k) => {
        d.classList.toggle("is-active", k === index);
        d.classList.toggle("is-active--accent", k === index);
      });
    }

    function next(){ setActive(index + 1); }
    function prev(){ setActive(index - 1); }

    function start(){
      if (!autoplay || slides.length <= 1) return;
      stop();
      timer = window.setInterval(next, interval);
    }
    function stop(){
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    // 슬라이드 1장이면 arrows/dots 숨김
    if (slides.length <= 1) {
      if (prevBtn) prevBtn.style.display = "none";
      if (nextBtn) nextBtn.style.display = "none";
      dotsWrap.style.display = "none";
      setActive(0);
      return;
    }

    if (nextBtn) nextBtn.addEventListener("click", () => { next(); start(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { prev(); start(); });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => { setActive(i); start(); });
    });

    viewport.addEventListener("mouseenter", stop);
    viewport.addEventListener("mouseleave", start);

    setActive(0);
    start();
  });
})();
