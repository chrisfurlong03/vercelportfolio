import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/footer";
var json = require("../data.json");
var dataItems = json.doItems;
var initialItems = dataItems.slice(0, 3);
var additionalItems = dataItems.slice(3);
var extraDisplay = "hidden";
var btnDisplay = "inline";

function Home() {
  return (
    <div>
      <Head>
        <title>Chris's Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Trocchi&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className={" max-w-[85%] md:max-w-[70%] ml-6 md:ml-40 xl:ml-60 mt-20"}
      >
        <Nav />
        <div id="thingsDone" className={"container"}>
          <h2 className={"pt-8 font-display text-2xl"}>Things I've Done:</h2>
          <div className={"do-blog flex flex-wrap"}>
            {initialItems.map((post) => (
              <div
                className={"w-64 h-24 ml-2 mt-2 flex"}
                style={{ backgroundColor: post.color }}
              >
                <img
                  className="h-24 w-24 object-cover"
                  src={post.img}
                  alt=""
                ></img>
                <div className="link font-serif px-1 text-base w-40 hover:underline inline-block justify-end pl-3 pt-1">
                  <Link href={post.link}>
                    <a>{post.title}</a>
                  </Link>
                </div>
              </div>
            ))}
            <div
              className={
                "bg-gray-100 hover:bg-gray-200 ml-2 mt-2 max-h-325 not-italic " +
                btnDisplay
              }
            >
              <Link href="/" passHref>
                <div
                  className="px-8 py-3 text-gray-700 w-full flex items-center justify-center link"
                  onClick={() => (
                    (extraDisplay = "inline"), (btnDisplay = "hidden")
                  )}
                >
                  Load More
                </div>
              </Link>
            </div>
            {additionalItems.map((post) => (
              <div
                id="extraItems"
                className={"w-64 h-24 ml-2 mt-2 flex bg-" + " " + extraDisplay}
                style={{ backgroundColor: post.color }}
              >
                <img className="h-24 w-24 object-cover" src={post.img}></img>
                <div className="link font-serif px-1 text-base w-40 hover:underline inline-block justify-end pl-3 pt-1">
                  <a href={post.link}>{post.title} ></a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
