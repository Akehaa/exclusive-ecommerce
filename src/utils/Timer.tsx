import { useTimer } from "react-timer-hook";

 {/* @ts-ignore: slickPrev library type*/}
export function Timer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });

  return (
    <div>
      <div className="flex gap-8">
        <span className="text-xs font-medium mr-2">Days</span>
        <span className="text-xs font-medium ml-2">Minutes</span>
        <span className="text-xs font-medium">Hours</span>
        <span className="text-xs font-medium ml-2">Seconds</span>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col">
          {days < 10
            ? <span className="font-inter font-bold text-4xl">0{days}</span>
            : <span className="font-inter font-bold text-4xl">{days}</span>
          }
        </div>
        <span className="font-bold text-4xl text-exclusive-secondary opacity-70">:</span>

        {hours < 10
          ? <span className="font-inter font-bold text-4xl">0{hours}</span>
          : <span className="font-inter font-bold text-4xl">{hours}</span>
        }
        <span className="font-bold text-4xl text-exclusive-secondary opacity-70">:</span>

        {minutes < 10
          ? <span className="font-inter font-bold text-4xl">0{minutes}</span>
          : <span className="font-inter font-bold text-4xl">{minutes}</span>
        }
        <span className="font-bold text-4xl text-exclusive-secondary opacity-70">:</span>

        {seconds < 10
          ? <span className="font-inter font-bold text-4xl">0{seconds}</span>
          : <span className="font-inter font-bold text-4xl">{seconds}</span>
        }
      </div>
    </div>
  );
}