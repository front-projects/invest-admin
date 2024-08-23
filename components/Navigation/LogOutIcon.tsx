import { BiLogOut } from "react-icons/bi";
import { logout } from "@/app/auth/actions";

export default function LogOutIcon() {
  return (
    <button
      onClick={() => logout()}
      className="md:absolute right-4 justify-center flex items-center gap-2 px-4 p-2 border-2 rounded-xl hover:bg-gray-600/40"
    >
      LOGOUT <BiLogOut />
    </button>
  );
}
