export async function detectLowBattery(onDetect: () => void) {
  if (!("getBattery" in navigator)) return;

  const battery = await (navigator as any).getBattery();
  if (battery.level < 0.2) {
    onDetect();
  }
}
