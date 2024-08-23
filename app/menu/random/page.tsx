
import Random from "@/components/Random/Random";


export default async function RandomPage() {

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h3 className="w-full text-center font-bold text-2xl max-sm:hidden">RANDOM</h3>
      <Random/>
    </div>
  );
}