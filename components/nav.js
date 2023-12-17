import React from "react";
import Link from "next/link";

const Nav = () => (
  <header>
    <h1 className={"font-display text-3xl font-bold"}>Chris Furlong</h1>
    <div className={"flex flex-wrap"}>
      <div
        className={
          "underline underline-offset-4 hover:bg-black hover:text-white mb-3"
        }
      >
        <Link href="/">
          <a href="">PORTFOLIO</a>
        </Link>
      </div>
      <div
        className={
          "underline underline-offset-4 hover:bg-black hover:text-white ml-8 mr-8 mb-3"
        }
      >
        <Link href="/contact">
          <a href="">CONTACT</a>
        </Link>
      </div>
      <div
        className={
          "underline underline-offset-4 hover:bg-black hover:text-white mr-8 mb-3"
        }
      >
        <Link href="/aboutsite">
          <a href="">SITE INFO</a>
        </Link>
      </div>
      <div
        className={
          "underline underline-offset-4 hover:bg-black hover:text-white mr-8 mb-3"
        }
      >
        <Link href="/updates">
          <a href="">BLOG.exe</a>
        </Link>
      </div>
    </div>
  </header>
);

export default Nav;
