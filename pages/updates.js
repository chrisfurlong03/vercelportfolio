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
        <div
          style={{
            width: 1440,
            height: 1024,
            position: "relative",
            background: "white",
          }}
        >
          <div
            style={{
              width: 750,
              height: 650,
              left: 345,
              top: 187,
              position: "absolute",
              background: "#0E00AC",
              boxShadow: "1px 1px 6px 8px rgba(255, 255, 255, 0.25) inset",
              borderRadius: 23,
            }}
          />
          <div
            style={{
              width: 700,
              height: 487,
              left: 370,
              top: 324,
              position: "absolute",
              background: "#9D94FF",
              boxShadow:
                "1px 1px 6px 8px rgba(120.32, 120.32, 120.32, 0.25) inset",
              borderRadius: 23,
            }}
          />
          <div
            style={{
              width: 75,
              height: 75,
              left: 979,
              top: 220,
              position: "absolute",
              background: "#00AAAA",
              boxShadow:
                "3px 3px 3.700000047683716px 2px rgba(254.51, 254.51, 254.51, 0.25) inset, -4px -3px 4px rgba(0, 0, 0, 0.25) inset, -2px -2px 8.199999809265137px 3.5px #090258, 3px 3px 4px #7468FF",
              borderRadius: 9999,
            }}
          />
          <div
            style={{
              left: 1002,
              top: 223,
              position: "absolute",
              color: "#005656",
              fontSize: 48,
              fontStyle: "italic",
              fontWeight: "800",
              wordWrap: "break-word",
            }}
          >
            ?
          </div>
          <div
            style={{
              width: 140,
              height: 59,
              left: 566,
              top: 255,
              position: "absolute",
              background: "#A3A3A3",
              boxShadow: "3px 3px 4px #7468FF",
              borderTopLeftRadius: 52,
              borderTopRightRadius: 52,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />
          <div
            style={{
              width: 183,
              height: 77,
              left: 398,
              top: 237,
              position: "absolute",
              background: "white",
              boxShadow: "-4px -3px 4px rgba(0, 0, 0, 0.25) inset",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 52,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 10,
            }}
          />
          <div
            style={{
              left: 421,
              top: 267,
              position: "absolute",
              color: "black",
              fontSize: 32,
              fontStyle: "italic",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            myNotes
          </div>
          <div
            style={{
              left: 421,
              top: 248,
              position: "absolute",
              color: "#D40000",
              fontSize: 20,
              fontStyle: "italic",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            viewing:
          </div>
          <div
            style={{
              left: 620,
              top: 252,
              position: "absolute",
              color: "#6C6C6C",
              fontSize: 36,
              fontStyle: "italic",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            ...
          </div>
          <div
            style={{
              width: 647,
              height: 206,
              left: 396,
              top: 350,
              position: "absolute",
              background:
                "linear-gradient(180deg, #D9D9D9 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          />
          <div
            style={{
              width: 378,
              height: 198,
              left: 396,
              top: 582,
              position: "absolute",
              background:
                "linear-gradient(180deg, #D9D9D9 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          ></div>
          <div
            style={{
              width: 238,
              height: 198,
              left: 805,
              top: 582,
              position: "absolute",
              background:
                "linear-gradient(180deg, #D9D9D9 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          />
          <div
            style={{
              width: 260,
              height: 142,
              left: 759,
              top: 384,
              position: "absolute",
              background: "#7468FF",
              boxShadow: "-4px -3px 4px 5px rgba(0, 0, 0, 0.23) inset",
              borderRadius: 15,
            }}
          />
          <div
            style={{
              width: 237,
              height: 118,
              left: 770,
              top: 396,
              position: "absolute",
              background: "#D9D9D9",
              borderRadius: 6,
            }}
          />
          <div
            style={{
              width: 290,
              left: 416,
              top: 369,
              position: "absolute",
              color: "#FFF500",
              fontSize: 36,
              fontStyle: "italic",
              fontWeight: "800",
              wordWrap: "break-word",
            }}
          >
            newjeans to me
          </div>
          <div
            style={{
              left: 416,
              top: 415,
              position: "absolute",
              color: "#707070",
              fontSize: 18,
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Kpop is growing with no end in site
            <br />
            and girl groups are at the center. While
            <br />
            legacy groups like BlackPink remain at
            <br />
            the core, NewJeans is massive meteor
            <br />
            that has just entered the atmosphere...
          </div>
          <btn
            className={"aeroBtn place-items-center"}
            style={{
              width: 75,
              height: 75,
              left: 741,
              top: 488,
              position: "absolute",
              borderRadius: 9999,
              color: "white",
              fontSize: 18,
              fontStyle: "italic",
              fontWeight: "700",
            }}
          >
            <span className={"relative top-[22px] left-[15px]"}>Read</span>
            <div
            style={{
              width: 47,
              height: 49,
              top: 33,
              left: -2,
              position: "absolute",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="49"
              viewBox="0 0 47 49"
              fill="none"
            >
              <g clip-path="url(#clip0_16_34)">
                <g filter="url(#filter0_ii_16_34)">
                  <path
                    d="M26.4574 23.9117L25.0004 14.2125C24.9469 13.8485 25.0446 13.4644 25.3003 13.1656C25.7628 12.6254 26.5693 12.568 27.0995 13.0392L46.564 30.3153L46.7079 30.4676C47.1562 31.0192 47.0801 31.8391 46.5387 32.295L27.0741 48.7052C26.793 48.9361 26.4198 49.0491 26.0373 48.9801C25.3473 48.8537 24.8876 48.1794 25.0117 47.4774L26.4631 39.2569C24.773 39.0568 22.9296 38.6277 21.0327 37.9774C16.0827 36.2831 10.6965 33.0535 6.62062 28.3682C2.50436 23.6368 -0.283679 17.4296 0.023701 9.82495C0.133681 7.05511 0.658201 4.10329 1.68092 0.980031C1.80688 0.474333 2.228 0.0749469 2.76662 0.00981913C3.46598 -0.0744638 4.10048 0.435065 4.18226 1.14668C5.30368 10.732 8.93208 16.2898 13.4178 19.5165C17.4269 22.4013 22.1776 23.4769 26.4574 23.9117Z"
                    fill="#D40000"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_ii_16_34"
                  x="-1.99941"
                  y="-1.9993"
                  width="50.9995"
                  height="52.9995"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-2" dy="-2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_16_34"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_16_34"
                    result="effect2_innerShadow_16_34"
                  />
                </filter>
                <clipPath id="clip0_16_34">
                  <rect width="47" height="49" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          </btn>
          
          <div
            style={{
              width: 214.31,
              height: 145,
              left: 817,
              top: 630,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 214.31,
                height: 145,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#00AAAA",
                boxShadow: "-4px -3px 4px 5px rgba(0, 0, 0, 0.23) inset",
                borderRadius: 15,
              }}
            />
            <div
              style={{
                width: 195.35,
                height: 124,
                left: 8.84,
                top: 11,
                position: "absolute",
                background: "white",
                borderRadius: 6,
              }}
            />
          </div>
          <div
            style={{
              width: 224,
              left: 819,
              top: 586,
              position: "absolute",
              color: "#FFF500",
              fontSize: 36,
              fontStyle: "italic",
              fontWeight: "800",
              wordWrap: "break-word",
            }}
          >
            archive
          </div>
          <div
            style={{
              width: 170,
              height: 131,
              left: 581,
              top: 630,
              position: "absolute",
              background: "#7468FF",
              boxShadow: "-4px -3px 4px 5px rgba(0, 0, 0, 0.23) inset",
              borderRadius: 15,
            }}
          />
          <div
            style={{
              width: 145,
              height: 105,
              left: 593,
              top: 643,
              position: "absolute",
              background: "#D9D9D9",
              borderRadius: 6,
            }}
          />
          <div
            style={{
              width: 165,
              left: 416,
              top: 599,
              position: "absolute",
              color: "#FFF500",
              fontSize: 32,
              fontStyle: "italic",
              fontWeight: "800",
              wordWrap: "break-word",
            }}
          >
            Fall HUM Essay
          </div>
          <div
            style={{
              width: 141,
              left: 416,
              top: 689,
              position: "absolute",
              color: "#707070",
              fontSize: 16,
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Kpop is growing with no end in site
            <br />
            and girl groups are at the center...
          </div>
          <div
            style={{
              width: 75,
              height: 75,
              left: 568,
              top: 713,
              position: "absolute",
              background: "#0E00AC",
              boxShadow:
                "3px 3px 3.700000047683716px 2px rgba(254.51, 254.51, 254.51, 0.25) inset, -4px -3px 4px rgba(0, 0, 0, 0.25) inset",
              borderRadius: 9999,
            }}
          />
          <div
            style={{
              left: 583,
              top: 735,
              position: "absolute",
              color: "white",
              fontSize: 18,
              fontStyle: "italic",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Read
          </div>
          <div
            style={{
              width: 47,
              height: 49,
              left: 566,
              top: 746,
              position: "absolute",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="49"
              viewBox="0 0 47 49"
              fill="none"
            >
              <g clip-path="url(#clip0_16_34)">
                <g filter="url(#filter0_ii_16_34)">
                  <path
                    d="M26.4574 23.9117L25.0004 14.2125C24.9469 13.8485 25.0446 13.4644 25.3003 13.1656C25.7628 12.6254 26.5693 12.568 27.0995 13.0392L46.564 30.3153L46.7079 30.4676C47.1562 31.0192 47.0801 31.8391 46.5387 32.295L27.0741 48.7052C26.793 48.9361 26.4198 49.0491 26.0373 48.9801C25.3473 48.8537 24.8876 48.1794 25.0117 47.4774L26.4631 39.2569C24.773 39.0568 22.9296 38.6277 21.0327 37.9774C16.0827 36.2831 10.6965 33.0535 6.62062 28.3682C2.50436 23.6368 -0.283679 17.4296 0.023701 9.82495C0.133681 7.05511 0.658201 4.10329 1.68092 0.980031C1.80688 0.474333 2.228 0.0749469 2.76662 0.00981913C3.46598 -0.0744638 4.10048 0.435065 4.18226 1.14668C5.30368 10.732 8.93208 16.2898 13.4178 19.5165C17.4269 22.4013 22.1776 23.4769 26.4574 23.9117Z"
                    fill="#D40000"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_ii_16_34"
                  x="-1.99941"
                  y="-1.9993"
                  width="50.9995"
                  height="52.9995"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-2" dy="-2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_16_34"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_16_34"
                    result="effect2_innerShadow_16_34"
                  />
                </filter>
                <clipPath id="clip0_16_34">
                  <rect width="47" height="49" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            style={{
              width: 195,
              height: 19,
              left: 826,
              top: 654,
              position: "absolute",
              background:
                "linear-gradient(90deg, rgba(13.77, 0, 172.14, 0.25) 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          />
          <div
            style={{
              width: 195,
              height: 19,
              left: 826,
              top: 677,
              position: "absolute",
              background:
                "linear-gradient(90deg, rgba(9.21, 0, 115.15, 0.25) 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          />
          <div
            style={{
              width: 195,
              height: 19,
              left: 826,
              top: 700,
              position: "absolute",
              background:
                "linear-gradient(90deg, rgba(6.65, 0, 83.09, 0.25) 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          />
          <div
            style={{
              width: 195,
              height: 19,
              left: 826,
              top: 723,
              position: "absolute",
              background:
                "linear-gradient(90deg, rgba(2.22, 0, 27.73, 0.25) 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          />
          <div
            style={{
              left: 829,
              top: 656,
              position: "absolute",
              color: "black",
              fontSize: 12,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            10/8 NC trip
          </div>
          <div
            style={{
              left: 829,
              top: 679,
              position: "absolute",
              color: "black",
              fontSize: 12,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            3/7 Melb trip
          </div>
          <div
            style={{
              left: 829,
              top: 702,
              position: "absolute",
              color: "black",
              fontSize: 12,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            12/10 Japan trip
          </div>
          <div
            style={{
              left: 829,
              top: 725,
              position: "absolute",
              color: "black",
              fontSize: 12,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            11/11 Flight reviews
          </div>
          <div
            style={{
              width: 1,
              height: 0,
              left: 993,
              top: 664,
              position: "absolute",
              border: "1px black solid",
            }}
          ></div>
          <div
            style={{
              width: 1,
              height: 0,
              left: 993,
              top: 687,
              position: "absolute",
              border: "1px black solid",
            }}
          ></div>
          <div
            style={{
              width: 1,
              height: 0,
              left: 993,
              top: 710,
              position: "absolute",
              border: "1px black solid",
            }}
          ></div>
          <div
            style={{
              width: 1,
              height: 0,
              left: 993,
              top: 733,
              position: "absolute",
              border: "1px black solid",
            }}
          ></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
