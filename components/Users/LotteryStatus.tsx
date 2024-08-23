import { Lottery } from "./types";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineCheck } from "react-icons/md";

export default function LotteryStatus({ lottery }: { lottery: Lottery }) {
  return (
    <div
      className={`max-md:text-[16px] max-sm:text-[12px] border-[1px] rounded-xl p-4 bg-gray-600/10
        max-sm:p-2 shadow-xl flex flex-col flex-1 justify-center items-center ${lottery.investModelStatus === "BOUGHT" ? "border-green-600 text-green-600" : ""}`}
    >
      <div>{lottery.naming}</div>
      {lottery.investModelStatus === "BOUGHT" ? (
        <div>
          <MdOutlineCheck />
        </div>
      ) : (
        <div>
          <MdOutlineClose />
        </div>
      )}
    </div>
  );
}
