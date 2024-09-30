window.addEventListener('resize', updateCardDimensions);

function updateCardDimensions() {
  const card = document.querySelector('.neon-gradient-card');
  const { offsetWidth: width, offsetHeight: height } = card;

  document.documentElement.style.setProperty('--card-width', `${width}px`);
  document.documentElement.style.setProperty('--card-height', `${height}px`);
  document.documentElement.style.setProperty('--pseudo-element-width', `${width + 2 * 5}px`);
  document.documentElement.style.setProperty('--pseudo-element-height', `${height + 2 * 5}px`);
  document.documentElement.style.setProperty('--after-blur', `${width / 3}px`);
}

// Initial call to set dimensions
updateCardDimensions();
