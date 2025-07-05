document.addEventListener('DOMContentLoaded', function () {
  fetch('/Pages/Testimonials/testimonials.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('testimonials-placeholder').innerHTML = html;
      setupTestimonialsLogic();
    });
});

function setupTestimonialsLogic() {
  const track = document.getElementById('logo-track');
  const banner = document.getElementById('logo-banner');
  if (!track || !banner) return;

  let isDragging = false, startX, baseX, hasCloned = false;

  const isOverflowing = () => track.scrollWidth > banner.clientWidth;

  const initScroll = () => {
    if (!isOverflowing()) {
      cancelAnimation();
      disableDragging();
      return;
    }

    // clone only once
    if (!hasCloned) {
      track.innerHTML += track.innerHTML;
      hasCloned = true;
    }

    enableDragging();
    startAnimation();
  };

  const startAnimation = () => {
    const fullWidth = track.scrollWidth / 2;
    const duration = fullWidth / 100;
    track.style.setProperty('--scroll-end', `-${fullWidth}px`);
    track.style.animation = `scroll ${duration}s linear infinite`;
    track.classList.add('animate-scroll');
  };

  const cancelAnimation = () => {
    track.classList.remove('animate-scroll');
    track.style.animation = 'none';
    track.style.transform = '';
  };

  const enableDragging = () => {
    banner.style.touchAction = 'none';
    banner.addEventListener('pointerdown', onPointerDown);
    banner.addEventListener('pointermove', onPointerMove);
    banner.addEventListener('pointerup', onPointerUp);
  };

  const disableDragging = () => {
    banner.style.touchAction = '';
    banner.removeEventListener('pointerdown', onPointerDown);
    banner.removeEventListener('pointermove', onPointerMove);
    banner.removeEventListener('pointerup', onPointerUp);
  };

  function onPointerDown(e) {
    isDragging = true;
    startX = e.clientX;
    const m = new WebKitCSSMatrix(getComputedStyle(track).transform);
    baseX = m.m41;
    cancelAnimation();
    banner.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    track.style.transform = `translateX(${baseX + dx}px)`;
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    const m = new WebKitCSSMatrix(getComputedStyle(track).transform);
    const pos = m.m41;
    const fullWidth = track.scrollWidth / 2;
    const normalized = ((pos % fullWidth) + fullWidth) % fullWidth * -1;
    track.style.transform = `translateX(${-normalized}px)`;
    startAnimation();
  }

  Promise.all(
    Array.from(track.querySelectorAll('img')).map(img =>
      img.complete ? Promise.resolve() : new Promise(r => img.onload = r)
    )
  ).then(initScroll);

  window.addEventListener('resize', initScroll);
}
