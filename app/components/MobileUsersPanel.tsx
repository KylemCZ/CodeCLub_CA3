import Image from "next/image";
import Link from "next/link";
import { logout } from "@/app/action/auth";

type User = { id: string; name: string; role: string; image: string | null } | null;

export default function MobileUsersPanel({ user, closeMenu }: { user: User; closeMenu: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 w-full px-8 pb-4">
      {user ? (
        <div className="flex flex-col gap-3 w-full">
          <Link
            href={user.role === "admin" ? "/admin" : "/profile"}
            onClick={closeMenu}
            className="flex flex-col items-center gap-2 group"
          >
            <Image
              src={user.image ?? "/user_icon.svg"}
              width={72}
              height={72}
              className="rounded-full border-3 border-emerald-400 w-18 h-18"
              alt="User icon"
            />
            <span className="text-center text-xl text-white font-semibold truncate group-hover:text-amber-400">
              {user.name}
            </span>
          </Link>
          <p className="text-center text-emerald-400 text-sm capitalize tracking-wide">{user.role}</p>
          <form action={logout}>
            <button
              type="submit"
              className="flex items-center justify-center w-full py-3 rounded-lg border border-emerald-400 text-emerald-300 text-lg font-semibold hover:bg-emerald-400 hover:text-gray-700 cursor-pointer"
            >
              Logout
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-3 w-full">
          <Image
            src="/user_icon.svg"
            width={72}
            height={72}
            className="rounded-full border-3 border-emerald-400 w-18 h-18 self-center"
            alt="User icon"
          />
          <Link
            href="/signup"
            onClick={closeMenu}
            className="flex items-center justify-center w-full py-3 rounded-lg bg-emerald-500 text-white text-lg font-semibold hover:bg-emerald-600"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            onClick={closeMenu}
            className="flex items-center justify-center w-full py-3 rounded-lg border border-emerald-400 text-emerald-300 text-lg font-semibold hover:bg-emerald-400 hover:text-gray-700"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
