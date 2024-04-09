import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Sticker from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

import img1 from "../public/we.jpg";
import img2 from "../public/appdev.jpg";
import html from "../public/html.png";
import css from "../public/css.png";
import javascript from "../public/javascript.png";
import github from "../public/git.png";
import react from "../public/react.png";
import nodejs from "../public/node.png";
import java from "../public/java.png";
import python from "../public/python.png";
import mysql from "../public/mysql.png";
import mongodb from "../public/mongodb.png";
import GoogleMapReact from "google-map-react";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <Head>
        <title>Smit Jogani</title>
        <meta name="condescription" />
        <link rel="icon" href="/dl.jpg" />
      </Head>

      <main className="bg-slate-50 px-10 md:px-20 lg:px-40 dark:bg-gray-950 dark:text-white">
        <section className="min-h-screen">
          <nav className="p-6 mb-12 flex justify-between">
            <h1 className="text-2xl">
              <span className=" text-blue-500 text-2xl">S</span>mit
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDark(!dark)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              // <li>
              //   <a
              //     className=" bg-blue-500 text-slate-100 text-right px-4 py-2 rounded-md ml-8"
              //     href=""
              //   >
              //     Resume
              //   </a>
              // </li>
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-blue-500 font-medium md:text-6xl">
              Smit Jogani
            </h2>
            <h3 className="txt-2xl py-2">Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-400">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 cursor-pointer">
            <a href="https://github.com/smitjogani">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/smit-jogani-4b0277228/">
              <AiFillLinkedin />
            </a>
            <a href="https://www.instagram.com/smit_jogani__/">
              <AiFillInstagram />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-blue-300 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={Sticker} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-blue-400 ">
              Features
            </h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-blue-500 ">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-black">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-blue-500">
                Code your dream project
              </h3>
              <p className="py-2 dark:text-black">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-blue-500">
                Consulting
              </h3>
              <p className="py-2 dark:text-black">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-blue-500">
              Services
            </h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1 ">
              <h4 className="py-1 text-xl text-gray-600 dark:text-slate-400">
                Website Devlopement
              </h4>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img1}
              />
            </div>
            <div className="basis-1/4 flex-1">
              <h4 className="py-1 text-xl text-gray-600 dark:text-slate-400">
                App Devlopement
              </h4>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={img2}
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-blue-400 ">
              Technology
            </h3>
          </div>
          <div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 sm:px0 ">
              <div className="shadow-md hover:scale-105 py-2 duration-500 rounded-lg">
                <Image src={html} className="w-20 mx-auto " />
                <p className="mt-4 dark:text-gray-400">HTML</p>
              </div>

              <div className="shadow-md hover:scale-105 py-2 duration-500 rounded-lg">
                <Image src={css} className="w-20 mx-auto" />
                <p className="mt-4 dark:text-gray-400">CSS</p>
              </div>

              <div className="shadow-md hover:scale-105 py-2 duration-500 rounded-lg">
                <Image src={javascript} className="w-20 mx-auto" />
                <p className="mt-4 dark:text-gray-400">Javascript</p>
              </div>

              <div className="shadow-md hover:scale-105 py-2 duration-500 rounded-lg">
                <Image src={react} className="w-20 mx-auto" />
                <p className="mt-4 dark:text-gray-400">React JS</p>
              </div>

              <div className="shadow-md hover:scale-105 py-2 duration-500 rounded-lg">
                <Image src={nodejs} className="w-20 mx-auto" />
                <p className="mt-4 dark:text-gray-400">Node JS</p>
              </div>

              <div className="shadow-md hover:scale-105 py-2 duration-500 rounded-lg">
                <Image src={java} className="w-20 mx-auto" />
                <p className="mt-4 dark:text-gray-400">Java</p>
              </div>

              <div className="shadow-md hover:scale-105 py-2 duration-500 rounded-lg">
                <Image src={python} className="w-20 mx-auto" />
                <p className="mt-4 dark:text-gray-400">Python</p>
              </div>

              <div className="shadow-md hover:scale-105 py-2 duration-500 rounded-lg">
                <Image src={mysql} className="w-20 mx-auto" />
                <p className="mt-4 dark:text-gray-400">MySql</p>
              </div>

              <div className="shadow-md hover:scale-105 py-2 duration-500 rounded-lg">
                <Image src={mongodb} className="w-20 mx-auto" />
                <p className="mt-4 dark:text-gray-400">Mongo DB</p>
              </div>

              <div className="shadow-md hover:scale-105 py-2 duration-500 rounded-lg">
                <Image src={github} className="w-20 mx-auto" />
                <p className="mt-4 dark:text-gray-400">Git</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div name="contact" className="w-full">
            <div className="flex flex-col justify-center max-w-screen-lg">
              <div className="pb-8">
                <h3 className="text-3xl  dark:text-white text-blue-400">
                  Contact Us
                </h3>
              </div>
              <div className="flex justify-start place-items-center">
                <form
                  method="post"
                  action="https://getform.io/f/f4290cc6-d733-4961-af54-4dfbf4f182b7"
                  className="flex flex-col w-full dark:text-black"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="p-2
               bg-white border-2 rounded-md focus:outline-none"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email  "
                    className="p-2
               bg-white border-2 my-4 rounded-md focus:outline-none"
                    required
                  />

                  <input
                    type="tel"
                    name="telphone"
                    placeholder="Enter Your Contact Number"
                    maxlength="12"
                    className="p-2
               bg-white border-2 rounded-md focus:outline-none mb-4"
                    required
                  />

                  <textarea
                    name="message"
                    placeholder="Enter Your Message"
                    rows="5"
                    className="p-2 bg-white border-2 rounded-md focus:outline-none"
                    required
                  ></textarea>

                  <button className=" bg-blue-500 text-slate-100 text-center px-4 py-2 rounded-md w-50 my-4">
                    Let's talk
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
