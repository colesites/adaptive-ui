import { useEffect, useState } from "react";
import { AdaptiveUI } from "./adaptive";
import { detectSlowNetwork } from "./signals/network";
import { detectLowBattery } from "./signals/battery";
import { detectImpatience } from "./signals/behavior";

export function useAdaptive() {
  const [adaptive] = useState(() => new AdaptiveUI());

  useEffect(() => {
    detectSlowNetwork(() => adaptive.addContext("slow-network"));
    detectLowBattery(() => adaptive.addContext("low-battery"));
    detectImpatience(() => adaptive.addContext("impatient"));
  }, []);

  return adaptive;
}
