/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { BarLoader } from "react-spinners";
import CountDown from "../components/Countdown";
import { errorAlert, successAlert } from "./ToastGroup";

type Props = {
  price: number;
  imgUrl: string;
};

export default function Box({ price, imgUrl }: Props) {
  const [loadingStart, setLoadingStart] = useState<boolean>(false);
  const [endTimeState, setEndTimeState] = useState(false);

  const handleBuyBoxFunc = async () => {
    if (price === 0) {
      if (!endTimeState) {
        errorAlert("please wait until end the time!");
      } else {
        successAlert("success!");
      }
    } else {
      setLoadingStart(true);
      setInterval(() => {
        setLoadingStart(false);
      }, 3000);
      successAlert("success!");
    }
  };

  const handleSetEndTimeState = () => {
    setEndTimeState(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center border-[1px] border-gray-700 rounded-lg bg-gray-700 bg-opacity-10 py-10 px-10">
        <h1 className="my-5 text-3xl font-bold text-white">
          {price === 0 ? "Free" : price + " SOL"}
        </h1>
        <div className="flex items-center justify-center p-4 bg-gray-900 rounded-lg border-[1px] border-red-300 max-w-[200px] max-h-[200px] min-h-[200px] min-w-[200px]">
          <img
            src={imgUrl}
            className="max-w-[200px] max-h-[200px] hover:animate-ping"
            alt=""
          />
        </div>
        <button
          className="w-full py-3 border-[1px] rounded-lg border-gray-600 bg-gray-800 mt-5 cursor-pointer hover:scale-[1.03] transition-all duration-300
          font-bold"
          onClick={() => handleBuyBoxFunc()}
        >
          {price === 0 ? (
            <>
              {!endTimeState ? (
                <>
                  <CountDown
                    endDateTime={16999899423}
                    setEndTime={handleSetEndTimeState}
                  />
                </>
              ) : (
                "Open"
              )}
            </>
          ) : (
            "Open"
          )}
        </button>
      </div>
      {loadingStart && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center backdrop-blur-sm">
          <BarLoader color="white" />
        </div>
      )}
    </>
  );
}
