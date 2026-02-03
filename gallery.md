---
layout: default
title: Gallery
permalink: /gallery/
---

<section class="section gallery-page">
  <div class="wrap">
    <h1 class="gallery-title">Gallery</h1>
    <p class="muted gallery-subtitle">Lab life, events, and moments.</p>
  </div>
</section>

<section class="section gallery-page">
  <div class="wrap">

    <div class="gallery-grid">

      <!-- Card 1 -->
      <article class="gallery-card">
        <div class="gallery-card__head">
          <div class="gallery-card__title">Lab Events</div>
          <div class="gallery-card__meta">#seminar #dinner #workshop</div>
        </div>

        <div class="gallery-carousel" data-autoplay="true" data-interval="5000">
          <div class="gallery-carousel__viewport">
            <div class="gallery-carousel__slide is-active">
              <img class="gallery-carousel__img" src="{{ '/assets/img/gallery/placeholder-1.jpg' | relative_url }}" alt="Lab Events 1">
            </div>
            <div class="gallery-carousel__slide">
              <img class="gallery-carousel__img" src="{{ '/assets/img/gallery/placeholder-2.jpg' | relative_url }}" alt="Lab Events 2">
            </div>
            <div class="gallery-carousel__slide">
              <img class="gallery-carousel__img" src="{{ '/assets/img/gallery/placeholder-3.jpg' | relative_url }}" alt="Lab Events 3">
            </div>

            <button class="gallery-carousel__btn gallery-carousel__btn--prev" type="button" aria-label="Previous">‹</button>
            <button class="gallery-carousel__btn gallery-carousel__btn--next" type="button" aria-label="Next">›</button>
          </div>

          <div class="gallery-carousel__dots" aria-label="Carousel pagination">
            <button class="gallery-carousel__dot is-active" type="button" aria-label="Slide 1"></button>
            <button class="gallery-carousel__dot" type="button" aria-label="Slide 2"></button>
            <button class="gallery-carousel__dot" type="button" aria-label="Slide 3"></button>
          </div>
        </div>
      </article>

      <!-- Card 2 -->
      <article class="gallery-card">
        <div class="gallery-card__head">
          <div class="gallery-card__title">Conferences</div>
          <div class="gallery-card__meta">#CVPR #NeurIPS #AAAI</div>
        </div>

        <div class="gallery-carousel" data-autoplay="true" data-interval="5000">
          <div class="gallery-carousel__viewport">
            <div class="gallery-carousel__slide is-active">
              <img class="gallery-carousel__img" src="{{ '/assets/img/gallery/placeholder-4.jpg' | relative_url }}" alt="Conferences 1">
            </div>
            <div class="gallery-carousel__slide">
              <img class="gallery-carousel__img" src="{{ '/assets/img/gallery/placeholder-5.jpg' | relative_url }}" alt="Conferences 2">
            </div>
            <div class="gallery-carousel__slide">
              <img class="gallery-carousel__img" src="{{ '/assets/img/gallery/placeholder-6.jpg' | relative_url }}" alt="Conferences 3">
            </div>

            <button class="gallery-carousel__btn gallery-carousel__btn--prev" type="button" aria-label="Previous">‹</button>
            <button class="gallery-carousel__btn gallery-carousel__btn--next" type="button" aria-label="Next">›</button>
          </div>

          <div class="gallery-carousel__dots" aria-label="Carousel pagination">
            <button class="gallery-carousel__dot is-active" type="button" aria-label="Slide 1"></button>
            <button class="gallery-carousel__dot" type="button" aria-label="Slide 2"></button>
            <button class="gallery-carousel__dot" type="button" aria-label="Slide 3"></button>
          </div>
        </div>
      </article>

      <!-- Card 3 -->
      <article class="gallery-card">
        <div class="gallery-card__head">
          <div class="gallery-card__title">Lab Space</div>
          <div class="gallery-card__meta">#office #equipment #demo</div>
        </div>

        <div class="gallery-carousel" data-autoplay="true" data-interval="5000">
          <div class="gallery-carousel__viewport">
            <div class="gallery-carousel__slide is-active">
              <img class="gallery-carousel__img" src="{{ '/assets/img/gallery/placeholder-7.jpg' | relative_url }}" alt="Lab Space 1">
            </div>
            <div class="gallery-carousel__slide">
              <img class="gallery-carousel__img" src="{{ '/assets/img/gallery/placeholder-8.jpg' | relative_url }}" alt="Lab Space 2">
            </div>
            <div class="gallery-carousel__slide">
              <img class="gallery-carousel__img" src="{{ '/assets/img/gallery/placeholder-9.jpg' | relative_url }}" alt="Lab Space 3">
            </div>

            <button class="gallery-carousel__btn gallery-carousel__btn--prev" type="button" aria-label="Previous">‹</button>
            <button class="gallery-carousel__btn gallery-carousel__btn--next" type="button" aria-label="Next">›</button>
          </div>

          <div class="gallery-carousel__dots" aria-label="Carousel pagination">
            <button class="gallery-carousel__dot is-active" type="button" aria-label="Slide 1"></button>
            <button class="gallery-carousel__dot" type="button" aria-label="Slide 2"></button>
            <button class="gallery-carousel__dot" type="button" aria-label="Slide 3"></button>
          </div>
        </div>
      </article>

    </div>

  </div>
</section>
