document.body.style.zoom="120%"
document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const carousel = {
    container: document.querySelector('.carousel-items'),
    items: Array.from(document.querySelectorAll('.item')),
    prevButton: document.getElementById('prevButton'),
    nextButton: document.getElementById('nextButton'),
    indicators: document.querySelectorAll('.carousel-indicator')
  };

  // Carousel state
  const state = {
    currentIndex: 0,
    visibleItems: 3,
    isTransitioning: false,
    isDragging: false,
    startPosX: 0,
    currentTranslate: 0,
    prevTranslate: 0,
    animationID: null,
    currentSlidePosition: 0
  };

  // Configuration
  const config = {
    breakpoints: {
      mobile: 768,
      tablet: 1024
    },
    transitionDuration: 300,
    dragThreshold: 50, // pixels needed to trigger slide change
    dragSensitivity: 1.5 // lower = more sensitive
  };

  // Update carousel position with smooth transition
  const updateCarousel = () => {
    state.isTransitioning = true;
    carousel.container.style.transition = `transform ${config.transitionDuration}ms ease`;
    
    const offset = state.currentIndex * (100 / state.visibleItems);
    state.currentTranslate = -offset;
    carousel.container.style.transform = `translateX(${state.currentTranslate}%)`;
    
    updateIndicators();
    
    setTimeout(() => {
      state.isTransitioning = false;
      carousel.container.style.transition = '';
    }, config.transitionDuration);
  };

  // Navigation functions
  const nextItem = () => {
    if (state.isTransitioning || state.isDragging) return;
    
    if (state.currentIndex < carousel.items.length - state.visibleItems) {
      state.currentIndex++;
    } else {
      state.currentIndex = 0;
    }
    updateCarousel();
  };

  const prevItem = () => {
    if (state.isTransitioning || state.isDragging) return;
    
    if (state.currentIndex > 0) {
      state.currentIndex--;
    } else {
      state.currentIndex = carousel.items.length - state.visibleItems;
    }
    updateCarousel();
  };

  const goToItem = (index) => {
    if (state.isTransitioning || state.isDragging) return;
    
    if (index >= 0 && index <= carousel.items.length - state.visibleItems) {
      state.currentIndex = index;
      updateCarousel();
    }
  };

  // Update navigation indicators
  const updateIndicators = () => {
    if (carousel.indicators.length) {
      carousel.indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === state.currentIndex);
      });
    }
  };

  // Responsive adjustments
  const updateVisibleItems = () => {
    const width = window.innerWidth;
    
    if (width < config.breakpoints.mobile) {
      state.visibleItems = 1;
    } else if (width < config.breakpoints.tablet) {
      state.visibleItems = 2;
    } else {
      state.visibleItems = 3;
    }
    
    state.currentIndex = Math.min(
      state.currentIndex, 
      Math.max(0, carousel.items.length - state.visibleItems)
    );
    
    updateCarousel();
  };

  // Drag functionality
  const getPositionX = (event) => {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  };

  const setSliderPosition = () => {
    carousel.container.style.transform = `translateX(${state.currentTranslate}%)`;
  };

  const animation = () => {
    setSliderPosition();
    if (state.isDragging) {
      state.animationID = requestAnimationFrame(animation);
    }
  };

  const touchStart = (index) => (event) => {
    if (state.isTransitioning) return;
    
    state.isDragging = true;
    state.startPosX = getPositionX(event);
    state.animationID = requestAnimationFrame(animation);
    state.currentSlidePosition = state.currentIndex * (100 / state.visibleItems);
    carousel.container.style.cursor = 'grabbing';
    event.preventDefault();
  };

  const touchMove = (event) => {
    if (!state.isDragging || state.isTransitioning) return;
    
    const currentPosition = getPositionX(event);
    state.currentTranslate = state.prevTranslate + (currentPosition - state.startPosX) / config.dragSensitivity;
    setSliderPosition();
  };

  const touchEnd = () => {
    if (!state.isDragging || state.isTransitioning) return;
    
    cancelAnimationFrame(state.animationID);
    state.isDragging = false;
    carousel.container.style.cursor = 'grab';
    
    const movedBy = state.currentTranslate - (state.currentIndex * (100 / state.visibleItems));
    
    // Determine if drag was significant enough to change slide
    if (movedBy < -config.dragThreshold && state.currentIndex < carousel.items.length - state.visibleItems) {
      state.currentIndex++;
    } else if (movedBy > config.dragThreshold && state.currentIndex > 0) {
      state.currentIndex--;
    }
    
    state.prevTranslate = state.currentIndex * (100 / state.visibleItems);
    state.currentTranslate = state.prevTranslate;
    updateCarousel();
  };

  // Event listeners
  const setupEventListeners = () => {
    carousel.nextButton.addEventListener('click', nextItem);
    carousel.prevButton.addEventListener('click', prevItem);
    
    if (carousel.indicators.length) {
      carousel.indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToItem(index));
      });
    }
    
    // Mouse events
    carousel.container.addEventListener('mousedown', touchStart());
    window.addEventListener('mousemove', touchMove);
    window.addEventListener('mouseup', touchEnd);
    
    // Touch events
    carousel.container.addEventListener('touchstart', touchStart(), { passive: false });
    carousel.container.addEventListener('touchmove', touchMove, { passive: false });
    carousel.container.addEventListener('touchend', touchEnd, { passive: true });
    
    // Window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateVisibleItems, 100);
    });
  };

  // Initialize the carousel
  const init = () => {
    setupEventListeners();
    updateVisibleItems();
    carousel.container.style.cursor = 'grab';
  };

  init();
});