"use client";

import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const handleLogout = async (): Promise<void> => {
    await signOut();
    router.push("/login");
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
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
              tabIndex={-1}
              role="menu"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {!isPending && !session ? (
                <>
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/rooms">Rooms</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/rooms">Rooms</Link>
                  </li>

                  <li>
                    <Link href="/addRoom">Add Room</Link>
                  </li>

                  <li>
                    <Link href="/myListings">My Listings</Link>
                  </li>

                  <li>
                    <Link href="/myBookings">My Bookings</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <a className="md:px-3 font-bold text-2xl">
            Study<i>Hub</i>
          </a>
        </div>

        {!isPending && !session ? (
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/rooms">Rooms</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/rooms">Rooms</Link>
              </li>

              <li>
                <Link href="/addRoom">Add Room</Link>
              </li>

              <li>
                <Link href="/myListings">My Listings</Link>
              </li>

              <li>
                <Link href="/myBookings">My Bookings</Link>
              </li>
            </ul>
          </div>
        )}

        {!isPending && !session ? (
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 flex justify-end gap-2">
              <li>
                <Link
                  href="/login"
                  className="btn rounded-xl bg-[#D7CCC8] hover:text-[#ffffff] hover:bg-[#ad8d7d] text-[#4E342E]"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="btn rounded-xl border-[#4A3B32] text-[#4A3B32] btn-outline"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 flex justify-end gap-2">
              <Dropdown>
                <Button className="p-0">
                  <Avatar>
                    <Avatar.Image
                      alt="John Doe"
                      src={
                        session?.user?.image ||
                        "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                      }
                    />

                    <Avatar.Fallback>
                      {session?.user?.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                </Button>

                <Dropdown.Popover>
                  <Dropdown.Menu
                    onAction={(key) =>
                      console.log(`Selected: ${key}`)
                    }
                  >
                    <Dropdown.Item id="new-file">
                      <Label>{session?.user?.name}</Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                      onClick={handleLogout}
                      id="delete-file"
                    >
                      <Label>
                        <li>
                          <Link
                            href="/register"
                            className="text-red-400"
                          >
                            Logout
                          </Link>
                        </li>
                      </Label>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

