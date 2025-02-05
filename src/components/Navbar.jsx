import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className=" bg-gray-100 text-black">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <p className=" text-xl font-bold ">Simple Blog</p>
        </div>
        <div className="dropdown navbar-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link href="/api/auth/logout">Log out</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/api/auth/login">Log in</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link href="/api/auth/logout">Log out</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/api/auth/login">Log in</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
