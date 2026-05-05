import Image from "next/image";
import Link from "next/link";
import { logout } from "@/app/action/auth";

type User = { id: string; name: string; role: string; image: string | null } | null;

export default function UserPanel({ user }: { user: User }) {
  return (
    <div className="hidden lg:flex flex-col items-center gap-4 lg:mt-auto lg:mb-10 w-full">
      <div className="w-3/4 h-px bg-emerald-400 opacity-40"></div>
      <div className="flex flex-col gap-3 w-3/4">
        {user ? (
          <span>
            <Link
              href={user.role === "admin" ? "/admin" : "/profile"}
              className="flex flex-col items-center gap-2 group"
            >
              <Image
                src={user.image ?? "/user_icon.svg"}
                width={80}
                height={80}
                className="rounded-full border-3 border-emerald-400 w-20 h-20"
                alt="User icon"
              />
              <span className="text-center first-letter:capitalize text-white font-semibold truncate group-hover:text-amber-400">
                {user.name}
              </span>
            </Link>
            <p className="text-center text-emerald-400 text-xs capitalize tracking-wide mb-2">{user.role}</p>
            <form action={logout}>
              <button
                type="submit"
                className="flex items-center justify-center w-full py-2 rounded-lg border border-emerald-400 text-emerald-300 font-semibold hover:bg-emerald-400 hover:text-gray-700 cursor-pointer"
              >
                Logout
              </button>
            </form>
          </span>
        ) : (
          <span>
            <Image
              src="/user_icon.svg"
              width={80}
              height={80}
              className="rounded-full border-3 border-emerald-400 w-20 h-20"
              alt="User icon"
            />
            <Link
              href="/signup"
              className="flex items-center justify-center w-full py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 hover:text-gray-300"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="flex items-center justify-center w-full py-2 rounded-lg border border-emerald-400 text-emerald-300 font-semibold hover:bg-emerald-400 hover:text-gray-700"
            >
              Login
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}
