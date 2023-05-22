import { useState } from "react";
import { default as ReactCountdown } from "react-countdown";

const Countdown = ({ endDateTime, setEndTime }) => {
  const [endTimeState, setEndTimeState] = useState(false);

  const setWinnerFunc = async () => {
    setEndTimeState(true);
    setEndTime();
  };

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <>
        {!endTimeState ? (
          <div className="text-sm font-extrabold text-white">
            <span>{days} D</span> :<span>{hours} H</span> :
            <span>{minutes} M</span> :<span>{seconds} S</span>
          </div>
        ) : (
          <div className="text-sm font-extrabold text-red-500">
            <span>ended raffles</span>
          </div>
        )}
      </>
    );
  };

  return (
    <ReactCountdown
      date={endDateTime * 1000}
      renderer={renderer}
      onComplete={() => setWinnerFunc()}
    />
  );
};

export default Countdown;
