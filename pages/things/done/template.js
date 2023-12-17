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
        <div class="grid-cols-1 mt-8 md:max-w-xl xl:max-w-2xl">
          <h2 id="headLine" class="font-display text-4xl">
            Making Pride @ Kristin School
          </h2>
          <p id="subTitle" class="font-serif text-gray-600 mt-2 italic">
            We, the Pride Team, set out to create a positve LGBT movement at
            Kristin. While efforts to create safe spaces for LGBT students
            continued in the background, we wanted to create some noise in the
            wider community to expose LGBT issues at Kristin.
          </p>
          <p class="mt-5">
            {" "}
            It a 6th period physics class, near the end of 2020, and after the
            IB had just finished dragging us through the mud to the end of Year
            1. I was sitiing next to my two fav besties. There had been some
            discussion over the past couple of days about the state of LGBT
            affairs at Kristin. At the time, the school lacked good LGBT policy
            and our safe spaces were under threat (more on that later).{" "}
          </p>
          <div class="mt-8 relative inline-block after:content-[''] after:absolute after:left-12 after:top-32 md:after:left-20 md:after:top-24 after:border-2 after:border-solid after:border-purple-200 after:w-[80%] after:h-full after:-z-10 after:bg-purple-200">
            <img
              class="align-bottom md:ml-8 w-[80%]"
              src="https://i.imgur.com/9TipKL8.jpg"
            ></img>
          </div>
          <p class="italic h-32 md:h-24 pl-14 md:pl-24 max-w-[85%] md:max-w-[85%]">
            Sets was my partner in crime. They pushed this project forward and
            did the hard work when it was needed.
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
