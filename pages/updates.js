import React from "react";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";
import BlogItems from "../components/blog_items";
import Footer from "../components/footer";
import CryptoJS from "crypto-js";

function Home() {
  var blogView = "hidden";
  function passSubmit(e) {
    e.preventDefault();
    var ciphertext =
      "U2FsdGVkX19+UZOZuSvX3mQSJJxUdSQdBwEQ7hD0YzqfhUZEmCxDNRTHmgO+o1A5sJWC8xfSdqUf5rukt53r0/h8sNjLEmFAqjokFPFmsrE=";
    var bytes = CryptoJS.AES.decrypt(
      ciphertext,
      document.getElementById("pwd").value,
    );
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("passResult").innerHTML = originalText;
  }
  return (
    <div>
      <Head>
        <title>Chris's Updates</title>
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
      <div className={"stickerDiv hidden lg:flex xl:mr-40 mr-10"}>
        <div className={"sticker"}></div>
        <img
          className={"floatimg1"}
          alt="The latest images from my blog."
          src="https://uploads-ssl.webflow.com/6264ee5543813d17e835da06/63a984482e85b3e53a909022_IMG_5515.webp"
        ></img>
        <img
          id="floatimg2"
          className={"floatimg2"}
          alt="The latest images from my blog."
          src="https://uploads-ssl.webflow.com/6264ee5543813d17e835da06/63aa38a9c753bd5aab591d30_IMG_5448.webp"
        ></img>
        <img
          className={"floatdrawing"}
          alt="The latest images from my blog."
          src="https://imgur.com/QbDkZfR.png"
        ></img>
      </div>
      <div
        className={"max-w-[85%] md:max-w-[70%] ml-6 md:ml-40 xl:ml-60 mt-20"}
      >
        <Nav />
        <div className={"passBox hidden"}>
          <form onSubmit={passSubmit}>
            <label htmlFor={"pwd"}>Pass:</label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              className={"bg-gray-200 mr-2 ml-2"}
            ></input>
            <input type="submit" value="Submit"></input>
          </form>
          <span id="passResult"></span>
        </div>
        <div id="blogList" className={"container pt-8"}>
          <div id="blogNav" className={"flex pl-4"}>
            <button
              href="#"
              className={
                "font-serif border border-solid border-red-500 rounded-t-lg py-1 px-3 border border-b-0 hover:bg-gray-100"
              }
            >
              Blog List
            </button>
          </div>
          <div
            className={
              "border border-solid border-red-500 rounded-t-2xl h-6 grow w-full border border-b-0"
            }
          ></div>
          <BlogItems />
          <div className={blogView}></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
