const mail = document.querySelector('.letter-image');
const confettiCanvas = document.getElementById('confetti-canvas');
const myConfetti = confetti.create(confettiCanvas, { resize: true });
let isConfettiActive = false;

mail.addEventListener('mouseenter', () => {
  if (!isConfettiActive) {
    isConfettiActive = true;
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    (function shoot() {
      myConfetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
      myConfetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(shoot);
      } else {
        isConfettiActive = false;
      }
    })();
  }
});

