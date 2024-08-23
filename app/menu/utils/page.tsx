import Util from "@/components/Utils/Util";
import { getUtils } from "@/lib/requests";


export default async function TopUsers() {
  const utils = await getUtils();

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h3 className="w-full text-center font-bold text-2xl max-sm:hidden">
        UTILS
      </h3>
      <div className="mt-4 w-1/2 max-xl:w-2/3 max-lg:w-[80%] max-sm:w-full flex flex-col gap-4 overflow-auto py-4">
        {utils ? (
          utils.map((util:any) => (
            <div key={util.entityKey}>
              <Util util={util} />
            </div>
          ))
        ) : (
          <div className="w-full text-center">No utils</div>
        )}
      </div>
    </div>
  );
}
