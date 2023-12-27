import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";

function _01_09_2022() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Trocchi&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div class="container max-w-[85%] md:max-w-[70%] ml-6 md:ml-40 xl:ml-60 mt-20">
        <Nav />
        <btn
            className={"aeroBtn place-items-center"}
            style={{
              width: 75,
              height: 75,

              position: "absolute",
              borderRadius: 9999,
              color: "white",
              fontSize: 18,
              fontStyle: "italic",
              fontWeight: "700",
            }}
          >
            <span className={"relative top-[24px] left-[15px]"}>Back</span>
            <div
            style={{
              width: 47,
              height: 49,
              bottom: 35,
              right: -1,
              position: "absolute",
            }}
            className={"rotate-180"}
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
        <div class="grid-cols-1 mt-8 md:max-w-xl xl:max-w-2xl">
          <h2 id="headLine" class="font-display text-4xl">
            Making Pride @ Kristin School
          </h2>
          <p id="subTitle" class="font-serif text-gray-600 mt-2 italic">
            
          </p>
          <p class="mt-5">
            {" "}
            What do I know?{" "}
          </p>
          <div class="mt-8 relative inline-block after:content-[''] after:absolute after:left-12 after:top-32 md:after:left-20 md:after:top-24 after:border-2 after:border-solid after:border-purple-200 after:w-[80%] after:h-full after:-z-10 after:bg-purple-200">
            <img
              class="align-bottom md:ml-8 w-[80%]"
              src="https://i.imgur.com/9TipKL8.jpg"
            ></img>
          </div>
          <p class="italic h-32 md:h-24 pl-14 md:pl-24 max-w-[85%] md:max-w-[85%]">
            Sets pushed this project forward and did the hard work when it was needed.
          </p>

          <p class="mt-5">
            Over the summer, we put our ideas down on paper. We created a Pride
            vision for Kristin, we laid out our reasoning, and devised a brief
            action plan. We took this plan to an iconic teacher, and out
            school's principal. The teacher supported us and gave us
            connections, and the principle feedback and approval. After months
            of planning, and back and forth with various school staff, we
            launched Kristin Pride.
          </p>
          {"\n"}
          <p>
            What we accomplished: {"\n"}
            {"\n"}
            <ul class="list-disc">
              <li>
                We held a senior school assembly where a recent alum talked to
                students and teachers about the need for safe LGBTQ+ spaces at
                Kristin.
              </li>
              <li>
                We held a movie night for the LGBTQ+ community and allies, to
                engage them with our work.
              </li>
              <li>
                We ran a teacher workshop with a presentation and Q&A, which
                lead to productive discussion around athletics, younger LGBT
                kids, and dealing with parents. We also built support for safe
                LGBT spaces.
              </li>
              <li>
                We fundraised at the Summer Carnival and Service Market, selling
                positve merchandise like pronoun pins.
              </li>
              <li>
                We ran another assembly, but focussed on HIV/AIDS. We launched
                our Red Ribbon campaign to fundraise for UNAIDS. We sold over
                100 ribbons and raised over NZ$400.
              </li>
              <li>
                During lockdown 2021, we compiled a 10-page teacher handbook
                about the Kristin LGBTQ+ community. It included answers to
                questions they submitted. As well as personal student
                experiences, and a collection of resources. This helped convey
                the hopes and aspirations of LGBTQ+ students.
              </li>
              <li>
                We passed on the role in the Kristin Pride group to a new set of
                students. We've also created a wave of external support for
                LGBTQ-safe policies that is helping to turn the tide against the
                residual homophobia/transphobia in the corners of our community.
              </li>
            </ul>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default _01_09_2022;
