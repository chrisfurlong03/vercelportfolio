import React from "react";
import Link from "next/link";

const Nav = () => (
  <footer>
    <div className={"pb-8"}>
      <div className={"flex flex-wrap"}>
        <div className={"text-gray-400 hover:text-black pt-3"}>
          <a href="/aboutsite">☞ how this portfolio was built.</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Nav;
