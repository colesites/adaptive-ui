export function detectSlowNetwork(onDetect: () => void) {
  const connection = (navigator as any).connection;
  if (!connection) return;

  if (
    connection.effectiveType === "2g" ||
    connection.effectiveType === "slow-2g"
  ) {
    onDetect();
  }
}
