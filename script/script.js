console.log('Hello from the script 👋');
// Parallax animation
document.addEventListener('scroll', function () {
  const scrolltop = window.scrollY;
  const layers = document.querySelectorAll('.parallax-layer');

  layers.forEach((layer) => {
    const depth = layer.getAttribute('data-depth');
    const movement = -(scrolltop * depth);
    const translate3d =
      'translate3d(0, ' + movement + 'px, 0) translateX(-50%) scale(1)';
    layer.style.transform = translate3d;
  });
});

// Toggle dusk
function toggleDusk() {
  const parallaxContainer = document.getElementById('parallax-container');
  console.log('Toggle dusk?');
  parallaxContainer.style.display === 'none'
    ? (parallaxContainer.style.display = 'block')
    : (parallaxContainer.style.display = 'none');
}

// toggle hamburger
function toggleMenu() {
  const navbar = document.querySelector('.navbar ul');
  navbar.classList.toggle('active');
}
