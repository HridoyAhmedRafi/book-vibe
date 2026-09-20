import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <Link href="/">
        <li className="border border-[#23BE0A] px-4 py-2 rounded text-[#23BE0A] font-semibold">
          Home
        </li>
      </Link>
      <Link href="/books">
        <li className="text-[#424242] hover:text-[#23BE0A]">Books</li>
      </Link>
      <Link href="/listed-books">
        <li className="text-[#424242] hover:text-[#23BE0A]">Listed Books</li>
      </Link>
      <Link href="/read-books">
        <li className="text-[#424242] hover:text-[#23BE0A]">Pages to Read</li>
      </Link>
    </>
  );

  return (
    <nav className=" border-b border-[#e5e7e3]  ">
      <div className="container mx-auto px-4">
        <div className="navbar">
          <div className="navbar-start  ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="flex items-center justify-between gap-4 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="btn btn-ghost  text-[#131313] text-[20px]">
              Book <span className="text-[#23BE0A]">Vibe</span>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center justify-between gap-4 menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-2 font-sans ">
            <button className="btn  px-5 bg-[#23BE0A] text-white ">
              Sign In
            </button>
            <button className="btn  px-5 bg-[#59C6D2] text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
