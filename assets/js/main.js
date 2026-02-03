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

// ===== Gallery carousels (multiple) =====
(function () {
  const carousels = Array.from(document.querySelectorAll(".gallery-carousel"));
  if (carousels.length === 0) return;

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".gallery-carousel__slide"));
    const prevBtn = carousel.querySelector(".gallery-carousel__btn--prev");
    const nextBtn = carousel.querySelector(".gallery-carousel__btn--next");
    const dots = Array.from(carousel.querySelectorAll(".gallery-carousel__dot"));

    let index = 0;
    let timer = null;
    const autoplay = carousel.dataset.autoplay === "true";
    const interval = Number(carousel.dataset.interval || 5000);

    function setActive(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("is-active", k === index));
      dots.forEach((d, k) => d.classList.toggle("is-active", k === index));
    }

    function next(){ setActive(index + 1); }
    function prev(){ setActive(index - 1); }

    function start(){
      if (!autoplay) return;
      stop();
      timer = window.setInterval(next, interval);
    }
    function stop(){
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

    const viewport = carousel.querySelector(".gallery-carousel__viewport");
    if (viewport) {
      viewport.addEventListener("mouseenter", stop);
      viewport.addEventListener("mouseleave", start);
    }

    setActive(0);
    start();
  });
})();
