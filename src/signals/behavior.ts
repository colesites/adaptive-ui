export function detectImpatience(onDetect: () => void) {
  let clicks = 0;

  window.addEventListener("click", () => {
    clicks++;
    if (clicks >= 6) {
      onDetect();
    }
  });
}
