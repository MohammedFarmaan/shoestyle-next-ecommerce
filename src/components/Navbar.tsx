import Menu from "./Menu";
import Link from "next/link";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="md:hidden h-full flex items-center justify-between">
        <Link href="/">
          <div>
            <img
              src="/shoestylelogo.png"
              alt=""
              className="max-sm:h-8 max-md:h-10 max-lg:h-12 max-xl:h-12 max-2xl:h-12"
            />
          </div>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden md:flex items-center h-full justify-between gap-8 ">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="">
            <div>
              {/* <img src="/shopping-bag.png" alt="" width={24} height={24} /> */}
              <img
                src="/shoestylelogo.png"
                alt=""
                className="max-sm:h-8 max-md:h-10 max-lg:h-10 max-xl:h-10 max-2xl:h-10"
              />
            </div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
