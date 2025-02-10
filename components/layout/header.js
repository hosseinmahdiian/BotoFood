import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex sticky -top-14 items-center justify-between container mx-auto px-5 py-3 my-2  mb-10 border-b bg-white">
      <Link href="/" className="text-lime-400  text-xl font-semibold">
        Boto Food
      </Link>
      <div className="flex gap-2 items-center">
        <Link href="/menu">Menu</Link>
        <Link href="/categories">Categories</Link>
      </div>
    </header>
  );
};

export default Header;
