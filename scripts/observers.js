// Header and Hero Section observers:
(function() {
  const elements = [
    document.querySelector('.header'),
    document.querySelector('.hero-section'),
    document.querySelector('.hero-section-content'),
    document.querySelector('.hero-section-bg')
  ]

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        entry.target.classList.add('fade-in')
    })
  }, {})

  elements.forEach(item => observer.observe(item));
})();

(function addFeaturedBooksObservers() {
  const elements = [
    document.querySelector('.active-fb-container'),
    document.querySelector('.other-fbs-container')
  ]

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        entry.target.classList.add('fade-in')
    })
  }, {})

  elements.forEach(item => observer.observe(item));
})()

export function addCarouselCardObservers() {
  const elements = document.querySelectorAll('.carousel-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        entry.target.classList.add('fade-in')
    })
  }, {})

  elements.forEach(item => observer.observe(item));
};
