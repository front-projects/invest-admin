import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <HashLoader color="rgb(139, 92, 246)" size={130} />
    </div>
  );
}