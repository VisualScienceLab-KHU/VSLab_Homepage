---
layout: default
title: Home
permalink: /
---

<section class="hero hero--carousel">
  <div class="wrap">
    <div class="hero-carousel" data-autoplay="true" data-interval="5000">
      <div class="hero-carousel__viewport" aria-label="Hero carousel">
        <!-- Slide 1 -->
        <div class="hero-carousel__slide is-active">
          <img class="hero-carousel__img" src="{{ '/assets/img/main_slide-1.png' | relative_url }}" alt="Lab main visual 1">
          <div class="hero-carousel__shade" aria-hidden="true"></div>

          <div class="hero-carousel__overlay hero-carousel__overlay--minimal">
            <div class="hero-carousel__kicker">WELCOME TO</div>
            <div class="hero-carousel__headline">Visual Science Lab.</div>
            <div class="hero-carousel__sub">
              Our mission is to bridge the gap between human cognition and artificial intelligence —
              enabling machines to perceive the world more like humans do.
            </div>
            <div class="hero-carousel__actions">
              <a class="btn primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdumy7iowdScouDLq62i9QIUTZsFBz3r7YXkZj0eFpPVFygYA/viewform" target="_blank" rel="noopener">Application</a>
              <a class="btn" href="{{ '/publications/' | relative_url }}">See Publications</a>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="hero-carousel__slide hero-carousel__slide--contain">
          <img class="hero-carousel__img" src="{{ '/assets/img/main_slide-2.png' | relative_url }}" alt="Research highlight 1">
          <div class="hero-carousel__shade" aria-hidden="true"></div>

          <div class="hero-carousel__overlay">
            <div class="hero-carousel__paperTitle">
              Object-Centric Representation Learning for Enhanced 3D Semantic Scene Graph Prediction, NeurIPS 2025
            </div>
            <a class="hero-carousel__learnMore" href="https://visualsciencelab-khu.github.io/OCRL-3DSSG/" target="_blank" rel="noopener">
              Learn more
            </a>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="hero-carousel__slide hero-carousel__slide--contain">
          <img class="hero-carousel__img" src="{{ '/assets/img/main_slide-3.png' | relative_url }}" alt="Research highlight 2">
          <div class="hero-carousel__shade" aria-hidden="true"></div>

          <div class="hero-carousel__overlay">
            <div class="hero-carousel__paperTitle">
              Do We Need Perfect Data? Leveraging Noise for Domain Generalized Segmentation, AAAI 2026
            </div>
            <a class="hero-carousel__learnMore" href="https://visualsciencelab-khu.github.io//FLEXSeg_project/" target="_blank" rel="noopener">
              Learn more
            </a>
          </div>
        </div>

        <!-- Slide 4 -->
        <div class="hero-carousel__slide hero-carousel__slide--contain">
          <img class="hero-carousel__img" src="{{ '/assets/img/main_slide-4.jpg' | relative_url }}" alt="Research highlight 3">
          <div class="hero-carousel__shade" aria-hidden="true"></div>

          <div class="hero-carousel__overlay">
            <div class="hero-carousel__paperTitle">
              RefineVAD: Semantic-Guided Feature Recalibration for Weakly Supervised Video Anomaly Detection, AAAI 2026
            </div>
            <a class="hero-carousel__learnMore" href="https://visualsciencelab-khu.github.io/RefineVAD-project/" target="_blank" rel="noopener">
              Learn more
            </a>
          </div>
        </div>

        <!-- Slide 5 -->
        <div class="hero-carousel__slide hero-carousel__slide--contain">
          <img class="hero-carousel__img" src="{{ '/assets/img/main_slide-5.png' | relative_url }}" alt="Research highlight 4">
          <div class="hero-carousel__shade" aria-hidden="true"></div>

          <div class="hero-carousel__overlay">
            <div class="hero-carousel__paperTitle">
              PlugTrack: Multi-Perceptive Motion Analysis for Adaptive Fusion in Multi-Object Tracking, AAAI 2026
            </div>
            <a class="hero-carousel__learnMore" href="https://visualsciencelab-khu.github.io/PlugTrack_project/" target="_blank" rel="noopener">
              Learn more
            </a>
          </div>
        </div>

        <!-- Controls -->
        <button class="hero-carousel__btn hero-carousel__btn--prev" type="button" aria-label="Previous slide">‹</button>
        <button class="hero-carousel__btn hero-carousel__btn--next" type="button" aria-label="Next slide">›</button>
      </div>
      <!-- Dots -->
        <div class="hero-carousel__dots hero-carousel__dots--outside" aria-label="Carousel pagination">
          <button class="hero-carousel__dot is-active" type="button" aria-label="Go to slide 1"></button>
          <button class="hero-carousel__dot" type="button" aria-label="Go to slide 2"></button>
          <button class="hero-carousel__dot" type="button" aria-label="Go to slide 3"></button>
          <button class="hero-carousel__dot" type="button" aria-label="Go to slide 4"></button>
          <button class="hero-carousel__dot" type="button" aria-label="Go to slide 5"></button>
        </div>
    </div>
  </div>
</section>



<section class="section">
  <div class="wrap">
    <div class="section__head">
      <div class="section__icon" aria-hidden="true">📰</div>
      <h2 class="section__title">Announcement</h2>
    </div>

    <div class="card callout">
      <blockquote class="quote">
        “Our mission is to bridge the gap between human cognition and artificial intelligence,
        unraveling the complexities of how machines can perceive the world akin to humans.”
      </blockquote>

      <p class="muted">
        We are always looking for self-motivated and passionate <b>PhD/MS students</b>, <b>Postdoc</b>,
        and <b>Undergraduate interns</b> to join our lab.
        <a class="inline-link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdumy7iowdScouDLq62i9QIUTZsFBz3r7YXkZj0eFpPVFygYA/viewform"
            target="_blank" rel="noopener">
            ( Application )
          </a>
      </p>

      <a class="see-more" href="{{ '/contact/' | relative_url }}">See more...</a>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section__head">
      <div class="section__icon" aria-hidden="true">🗞️</div>
      <h2 class="section__title">News</h2>
    </div>

    <div class="news">
      <article class="news-item">
        <div class="news-thumb" aria-hidden="true">AAAI</div>
        <div class="news-body">
          <div class="news-date">January 2026</div>
          <div class="news-text">
            <span class="news-highlight">Three papers</span> led by Taeyeong Kim, Junhee Lee, and Seungjae Kim have been accepted to
            <a href="https://aaai.org/conference/aaai/aaai-26/" target="_blank" rel="noopener">AAAI 2026</a>.
          </div>
        </div>
      </article>

      <article class="news-item">
        <div class="news-thumb" aria-hidden="true">NeurIPS</div>
        <div class="news-body">
          <div class="news-date">September 2025</div>
          <div class="news-text">
            Our paper, KH Heo etal. "Object-Centric Representation Learning for Enhanced 3D Semantic Scene Graph Prediction," has been accepted to
            <a href="https://nips.cc/" target="_blank" rel="noopener">NeurIPS 2025</a>.
          </div>
        </div>
      </article>

      <article class="news-item">
        <div class="news-thumb" aria-hidden="true">NRF</div>
        <div class="news-body">
          <div class="news-date">September 2025</div>
          <div class="news-text">
            Myoungchul Kim has been awarded the NRF "Research Subsidies for Master’s Students" grant (Annual research budget: 12 million KRW).
          </div>
        </div>
      </article>

      <article class="news-item">
        <div class="news-thumb" aria-hidden="true">KCC</div>
        <div class="news-body">
          <div class="news-date">August 2025</div>
          <div class="news-text">
            Our paper "Distance-based Bi-directional Edge Update Graph Neural Network for 3D Scene Graph Generation" has won the Excellence Award at the Junior Paper Competition from KCC2025.
          </div>
        </div>
      </article>

      <article class="news-item">
        <div class="news-thumb" aria-hidden="true">PR</div>
        <div class="news-body">
          <div class="news-date">May 2025</div>
          <div class="news-text">
            Our paper has been accepted to ELSEVIER
            <a href="https://www.sciencedirect.com/journal/pattern-recognition" target="_blank" rel="noopener">Pattern Recognition</a>.
            (IF: 7.6).
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

