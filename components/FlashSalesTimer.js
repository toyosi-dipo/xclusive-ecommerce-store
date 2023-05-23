import FlashSalesTimerDigit from "./FlashSalesTimerDigit";
import useCountdownTimer from "../utils/hooks/useCountDown";
import { useEffect } from "react";

function FlashSalesTimer() {
  const [countdown] = useCountdownTimer(4);

  return (
    <div className="mt-5 flex items-end gap-4">
      <FlashSalesTimerDigit parameter={"Days"} value={countdown[0]} />
      <p className="text-3xl font-bold text-secondary2">:</p>
      <FlashSalesTimerDigit parameter={"Hours"} value={countdown[1]} />
      <p className="text-3xl font-bold text-secondary2">:</p>
      {/* minutes */}
      <FlashSalesTimerDigit parameter={"Minutes"} value={countdown[2]} />
      <p className="text-3xl font-bold text-secondary2">:</p>
      {/* seconds */}
      <FlashSalesTimerDigit parameter={"Seconds"} value={countdown[3]} />
    </div>
  );
}

export default FlashSalesTimer;
