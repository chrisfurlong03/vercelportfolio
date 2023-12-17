import React from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";

function _01_08_2022() {
  return (
    <div>
      <Head>
        <title>Waste Team</title>
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
            Campus-wide Composting
          </h2>
          <p id="subTitle" class="font-serif text-gray-600 mt-2 italic">
            During my two years leading the Waste Team, I focussed on creating a
            solution to Kristin's landfill waste addiction.
          </p>

          <div class="mt-8 relative inline-block after:content-[''] after:absolute after:left-12 after:top-32 md:after:left-20 md:after:top-24 after:border-2 after:border-solid after:border-green-200 after:w-[80%] after:h-full after:-z-10 after:bg-green-200">
            <img
              class="align-bottom md:ml-8 w-[80%]"
              src="https://i.imgur.com/mnx2YmV.png"
            ></img>
          </div>
          <p class="italic h-32 md:h-24 pl-14 md:pl-24 max-w-[85%] md:max-w-[85%]">
            This green cone (funded by the KFF) is a set and forget compost bin
            that never needs to be emptied or turned. Perfect for a school!
          </p>

          <p class="mt-5">
            What Waste Team accomplished, 2020-2021: {"\n"} {"\n"}
            <ul class="list-disc">
              <li>
                We ran a trial composting system in 2020 that provided a food
                waste option in all eight staffrooms at Kristin. The waste was
                composted onsite between three bins.
              </li>
              <li>
                We got the funding to purchase a green cone, to trial as a
                school-wide composting option.
              </li>
              <li>
                The Waste Team's 2021 audit added further data that showed
                redirecting food waste was key to making Kristin landfill-free.
              </li>
              <li>
                In 2021 we made the Summer Carnival (500-700 attendees) nearly
                zero waste (reducing landfill bin use by 70%).
              </li>
              <li>
                Kristin obtained one trial bin from a commercial composting
                provider, WeCompost. WeCompost was trialed at individual events
                with great success. These bins would work alongside the green
                cones.
              </li>
              <li>
                During lockdown 2021, the Waste Team compiled a proposal to
                purchase more bins from WeCompost in 2022. This was positively
                recieved by the Sustainability Council's Advisory Board.
              </li>
              <li>
                Beyond 2022, composting will continue to grow at Kristin. The
                waste team grew from 8 to 29 members in the last two years,
                making our goal of school-wide composting realistic.
              </li>
            </ul>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default _01_08_2022;
