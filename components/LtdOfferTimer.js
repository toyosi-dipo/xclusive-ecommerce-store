import useCountdownTimer from "../utils/hooks/useCountDown";
import LtdOfferTimerDigit from "./LtdOfferTimerDigit";

function LtdOfferTimer() {
  const [countdown] = useCountdownTimer(6, 12, 0, 45);
  console.log();

  if (countdown[4] < 1) {
    return <h4 className="">Limited offer time has elapsed</h4>;
  }
  return (
    <div className="mb-10 mt-5 flex items-end gap-4">
      <LtdOfferTimerDigit parameter={"Days"} value={countdown[0]} />
      <LtdOfferTimerDigit parameter={"Hours"} value={countdown[1]} />
      <LtdOfferTimerDigit parameter={"Minutes"} value={countdown[2]} />
      <LtdOfferTimerDigit parameter={"Seconds"} value={countdown[3]} />
    </div>
  );
}

export default LtdOfferTimer;
