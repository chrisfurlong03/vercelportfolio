import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";

function _01_07_2022() {
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
        <div class="grid-cols-1 mt-8 md:max-w-xl xl:max-w-2xl">
          <h2 id="headLine" class="font-display text-4xl">
            StudentForward
          </h2>
          <p id="subTitle" class="font-serif text-gray-600 mt-2 italic">
            The platform that first provided interactive learning exchanges for
            over 100 students across the globe also connected students during
            the first COVID lockdowns in March 2020.
          </p>

          <div class="mt-8 relative inline-block after:content-[''] after:absolute after:left-12 after:top-32 md:after:left-20 md:after:top-24 after:border-2 after:border-solid after:border-blue-200 after:w-[80%] after:h-full after:-z-10 after:bg-blue-200">
            <img
              class="align-bottom md:ml-8 w-[80%]"
              src="https://i.imgur.com/27bbUaN.jpg"
            ></img>
          </div>
          <p class="italic h-32 md:h-24 pl-14 md:pl-24 max-w-[85%] md:max-w-[85%]">
            This is a picture of the COVID Korero Hub. A special report on what
            went down in this initial connection will be released at the
            relaunch of StudentForward.
          </p>

          <p class="mt-5">
            StudntForward went on the back-burner in 2021 partially beause the
            platform was getting too hard to manage. The site,
            studentforward.world, will be relaunced in Term 2, 2022. I am
            excited bring the student users a new simplified platform, and a
            second connection opportunity similar to the original COVID Korero
            Project. I'll come back and update this page with the full
            StudentForward story at that time.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default _01_07_2022;
