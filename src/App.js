import window from "./Assets/window.jpg";
import facebook from "./Assets/facebook.svg";
import twitter from "./Assets/twitter.svg";
import googleplus from "./Assets/googleplus.svg";
import tick from "./Assets/Tick-new.svg";
import cross from "./Assets/Cross-new.svg";
import strategy from "./Assets/strategy.svg";
import target1 from "./Assets/target1.svg";
import target2 from "./Assets/target2.svg";
import target3 from "./Assets/target3.svg";
import target4 from "./Assets/target4.svg";
import growth from "./Assets/growth.svg";
import check from "./Assets/check.svg";
import redcircle from "./Assets/redcircle.svg";
// import Widget from "./Widget";
import { useState } from "react";

export default function App() {
  const arrowPos = ["rotate-0", "rotate-180"];
  const contentVisibility = ["hidden", ""];
  const [contentState, setContentState] = useState(0);
  const [forumState, setForumState] = useState(0);
  const [guidance, setGuidance] = useState(false);
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  function showContent() {
    setContentState(+!contentState);
  }

  function handleRightClick() {
    document.getElementById("slideContainer").scrollLeft += 200;
  }

  function handleLeftClick() {
    document.getElementById("slideContainer").scrollLeft -= 200;
  }

  return (
    <>
      {/* <span className="absolute z-50 right-4 bottom-4">
        <Widget />
      </span> */}
      <div
        className={
          step1
            ? "fixed w-screen h-screen bg-black z-50 bg-opacity-50 flex justify-center overflow-y-scroll"
            : "hidden"
        }
      >
        <div
          className="xl:w-4/12 md:w-2/5 sm:w-2/3 w-5/6 h-fit bg-white rounded-lg my-auto flex flex-col gap-3 justify-center text-center md:text-2xl py-10 px-4 shadow-md relative"
          onClick={() => setStep1((curr) => !curr)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="absolute top-4 right-4 text-slate-600 w-6 h-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="font-bold heading-font">Step-1:</span>
          <span>We provide you right methodology</span>
          <span className="flex flex-col gap-3 w-3/4 mx-auto">
            <img src={strategy} className="w-24 mx-auto" />
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Proven backtested strategy
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Clear entry and exit rules
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Market conditions adaptability
            </span>
            <img src={growth} className="w-24 mx-auto" />
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Consistent profitability
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Small losses - Big profits
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              All these builds confidence
            </span>
          </span>
        </div>
      </div>
      <div
        className={
          step2
            ? "fixed w-screen h-screen bg-black z-50 bg-opacity-50 flex justify-center overflow-y-scroll"
            : "hidden"
        }
      >
        <div
          className="xl:w-4/12 md:w-2/5 sm:w-2/3 w-5/6 h-fit bg-white rounded-lg my-auto flex flex-col gap-3 justify-center text-center md:text-2xl py-10 px-4 shadow-md relative"
          onClick={() => setStep2((curr) => !curr)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="absolute top-4 right-4 text-slate-600 w-6 h-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="font-bold heading-font">
            Step-2: Master Tool Tredcode
          </span>
          <span>
            Designed & developed by TCI to find right trading opportunity at
            right time.
          </span>
          <span className="flex flex-col gap-3 w-3/4 mx-auto">
            <img src={target4} className="w-24 mx-auto" />
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Track big players activity
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Best stocks to trade
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Nifty, BankNifty OI compass
            </span>
            <img src={target3} className="w-24 mx-auto" />
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Moneyflux - Trend checker
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Identify trends & changes early on
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Learning from others mistakes
            </span>
          </span>
        </div>
      </div>
      <div
        className={
          step3
            ? "fixed w-screen h-screen bg-black z-50 bg-opacity-50 flex justify-center overflow-y-scroll"
            : "hidden"
        }
      >
        <div
          className="xl:w-4/12 md:w-2/5 sm:w-2/3 w-5/6 h-fit bg-white rounded-lg my-auto flex flex-col gap-3 justify-center text-center md:text-2xl py-10 px-4 shadow-md relative"
          onClick={() => setStep3((curr) => !curr)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="absolute top-4 right-4 text-slate-600 w-6 h-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="font-bold heading-font">Step-3:</span>
          <span>
            TCI community of Pro traders & get live market trade ideas
          </span>
          <span className="flex flex-col gap-3 w-3/4 mx-auto">
            <img src={target1} className="w-24 mx-auto" />
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Get Live trade signals
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Get strategy of pro traders
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Get Pro trader's trading plan
            </span>
            <img src={target2} className="w-24 mx-auto" />
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Get Daily analysis
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Best trading setups
            </span>
            <span className="flex gap-2 items-center">
              <img src={check} className="w-6 h-6" />
              Learning from others mistakes
            </span>
          </span>
        </div>
      </div>
      <div
        className={
          guidance
            ? "fixed w-screen h-screen bg-black z-50 bg-opacity-50 flex justify-center"
            : "hidden"
        }
      >
        <div className="lg:w-1/2 lg:h-1/2 md:w-3/4 md:h-3/4 w-5/6 h-fit bg-white rounded-lg my-auto relative flex flex-col justify-center p-4 shadow-md overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="absolute top-4 right-4 text-slate-600 w-6 h-6 cursor-pointer"
            onClick={() => setGuidance((curr) => !curr)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <form className="flex flex-col gap-4 md:w-2/5 text-slate-600 mx-auto">
            <label className="md:text-xl">Enter Full Name</label>
            <input
              type="text"
              className="md:text-md text-sm px-2 py-1 outline-slate-600 border border-slate-300 md:rounded-md rounded-sm text-slate-500"
              placeholder="enter your name here"
            />
            <label className="md:text-lg">Enter Whatsapp Number</label>
            <span className="flex justify-center flex-1">
              <span className="bg-slate-300 rounded-l-md py-1 px-2 md:text-md text-sm">
                +91
              </span>
              <input
                type="text"
                className="md:text-md text-sm px-2 py-1 flex-1 outline-slate-600 border border-slate-300 rounded-r-md text-slate-500"
              />
            </span>
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="bg-slate-600 md:text-md text-sm text-white font-bold md:px-8 py-2 px-4 rounded-full w-fit mx-auto"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#EC4E4E] p-3 md:hidden rounded-full fixed bottom-4 right-4 z-30 shadow-md text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>

      <img src={window} className="w-full h-72 object-cover" />
      <div className="flex text-slate-800 absolute top-0 flex-col w-full text-center webfont">
        {/* Navbar */}
        <div className="text-white flex top-0 w-full justify-between lg:px-48 px-6 py-2 items-center cursor-pointer ">
          <span className="font-bold text-3xl tracking-wider">IREF</span>
          <span className=" flex gap-8 items-center">
            <span className="bg-[#EC4E4E] hover:bg-[#F78484] px-4 py-2 md:inline-block hidden">
              Start a discussion
            </span>
            <span>Login</span>
            <span className="md:inline-block hidden">Sign-up</span>
          </span>
        </div>

        {/* Heading */}
        <div className="text-white flex flex-col gap-2 p-4">
          <span className="lg:text-[12vh] md:text-[8vh] sm:text-[5vh] text-3xl heading-font">
            LET'S TALK PROPERTY
          </span>

          {/* Search bar */}
          <span className="p-1 md:my-8 bg-white flex lg:mx-48 sm:mx-12 m-4 md:text-md text-sm">
            <input
              type="text"
              placeholder="Search for discussions about city, locality, project, developer"
              className="outline-none w-full md:px-4 p-1 text-black"
            />
            <div className="bg-[#EC4E4E] hover:bg-[#F78484] sm:px-6 p-2">
              Search
            </div>
          </span>
        </div>

        {/* City forums */}
        <span className="md:text-3xl text-xl mt-32 heading-font">
          DISCOVER CITY FORUMS
        </span>
        <div className="lg:px-48 md:px-24 px-4 md:py-24 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="p-4 shadow-slate-300 shadow-md flex flex-col text-left overflow-clip hover:scale-110 cursor:pointer transition duration-300 text-sm h-fit justify-between relative">
            <span className="leading-tight flex flex-col">
              <span className="webfont-bold md:text-lg">Pune Real Estate</span>
              <span className="text-slate-500">Last reply: 1 hrs. ago</span>
            </span>
            <span className="mt-4 leading-tight flex flex-col">
              <span>7210 Discussions</span>
              <span>179K+ Replies</span>
            </span>
          </div>
          <div className="p-4 shadow-slate-300 shadow-md flex flex-col text-left overflow-clip hover:scale-110 cursor:pointer transition duration-300 text-sm justify-between relative">
            <span className="leading-tight flex flex-col">
              <span className="webfont-bold md:text-lg">
                Mumbai Real Estate
              </span>
              <span className="text-slate-500">Last reply: 1 hrs. ago</span>
            </span>
            <span className="mt-4 leading-tight flex flex-col">
              <span>3524 Discussions</span>
              <span>92K+ Replies</span>
            </span>
          </div>
          <div className="p-4 shadow-slate-300 shadow-md flex flex-col text-left overflow-clip hover:scale-110 cursor:pointer transition duration-300 text-sm justify-between relative">
            <span className="leading-tight flex flex-col">
              <span className="webfont-bold md:text-lg">
                Bangalore Real Estate
              </span>
              <span className="text-slate-500">Last reply: 10 hrs. ago</span>
            </span>
            <span className="mt-4 leading-tight flex flex-col">
              <span>4868 Discussions</span>
              <span>52K+ Replies</span>
            </span>
          </div>
          <div className="p-4 shadow-slate-300 shadow-md flex flex-col text-left overflow-clip hover:scale-110 cursor:pointer transition duration-300 text-sm justify-between relative">
            <span className="leading-tight flex flex-col">
              <span className="webfont-bold md:text-lg">
                Chennai Real Estate
              </span>
              <span className="text-slate-500">Last reply: 10 hrs. ago</span>
            </span>

            <span className="mt-4 leading-tight flex flex-col">
              <span>5003 Discussions</span>
              <span>73K+ Replies</span>
            </span>
          </div>
          <div className="p-4 shadow-slate-300 shadow-md flex flex-col text-left overflow-clip hover:scale-110 cursor:pointer transition duration-300 text-sm  justify-between relative">
            <span className="leading-tight flex flex-col">
              <span className="webfont-bold md:text-lg">
                Kolkata Real Estate
              </span>
              <span className="text-slate-500">Last reply: 1 days ago</span>
            </span>
            <span className="mt-4 leading-tight flex flex-col">
              <span>692 Discussions</span>
              <span>7641 Replies</span>
            </span>
          </div>
          <div className="p-4 shadow-slate-300 shadow-md flex flex-col text-left overflow-clip hover:scale-110 cursor:pointer transition duration-300 text-sm justify-between relative">
            <span className="leading-tight flex flex-col">
              <span className="webfont-bold md:text-lg">
                Gurgaon Real Estate
              </span>
              <span className="text-slate-500">Last reply: 2 hrs. ago</span>
            </span>
            <span className="mt-4 leading-tight flex flex-col">
              <span>7210 Discussions</span>
              <span>179K+ Replies</span>
            </span>
          </div>
          <div className="p-4 shadow-slate-300 shadow-md flex flex-col text-left overflow-clip hover:scale-110 cursor:pointer transition duration-300 text-sm  justify-between relative">
            <span className="leading-tight flex flex-col">
              <span className="webfont-bold md:text-lg">Noida Real Estate</span>
              <span className="text-slate-500">Last reply: 16 hrs. ago</span>
            </span>
            <span className="mt-4 leading-tight flex flex-col">
              <span>7210 Discussions</span>
              <span>179K+ Replies</span>
            </span>
          </div>
          <div className="p-4 shadow-slate-300 shadow-md flex flex-col text-left overflow-clip hover:scale-110 cursor:pointer transition duration-300 text-sm justify-between relative">
            <span className="leading-tight flex flex-col">
              <span className="webfont-bold md:text-lg">Delhi Real Estate</span>
              <span className="text-slate-500">Last reply: 15 hrs. ago</span>
            </span>
            <span className="mt-4 leading-tight flex flex-col">
              <span>7210 Discussions</span>
              <span>179K+ Replies</span>
            </span>
          </div>
        </div>

        {/* More Cities */}

        <div className=" mx-auto mb-24 text-[#39BD99]">
          <span className="font-bold flex items-center space-x-4 w-full my-2 justify-center">
            <hr className="lg:w-72 md:w-24 w-12 border-slate-400" />
            <span>More cities</span>
            <span
              className={
                "cursor-pointer w-5 h-5 duration-300 " + arrowPos[contentState]
              }
              onClick={showContent}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
            <hr className="lg:w-72 md:w-24 w-12 border-slate-400" />
          </span>

          <div
            className={
              "grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:gap-x-4 gap-x-2 mx-4 text-sm duration-300 text-left text-[#39BD99] " +
              contentVisibility[contentState]
            }
          >
            <div className="flex justify-around flex-col gap-2 -space-y-2">
              <span className="hover:underline cursor-pointer">
                NCR Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Hyderabad Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Ahmedabad Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Nagpur Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Bhiwadi Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Bhubaneshwar Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Chandigarh Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Coimbatore Real Estate
              </span>
            </div>
            <div className="flex justify-around flex-col gap-2  -space-y-2">
              <span className="hover:underline cursor-pointer">
                Goa Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Himachal Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Hisar Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Indore Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Jaipur Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Jharkhand Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Kochi Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Kerala Real Estate
              </span>
            </div>
            <div className="flex flex-col justify-around gap-2 -space-y-2">
              <span className="hover:underline cursor-pointer">
                NCR Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Hyderabad Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Ahmedabad Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Nagpur Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Bhiwadi Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Bhubaneshwar Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Chandigarh Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Coimbatore Real Estate
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-around -space-y-2">
              <span className="hover:underline cursor-pointer">
                Goa Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Himachal Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Hisar Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Indore Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Jaipur Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Jharkhand Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Kochi Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Kerala Real Estate
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-around -space-y-2">
              <span className="hover:underline cursor-pointer">
                NCR Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Hyderabad Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Ahmedabad Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Nagpur Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Bhiwadi Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Bhubaneshwar Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Chandigarh Real Estate
              </span>
              <span className="hover:underline cursor-pointer">
                Coimbatore Real Estate
              </span>
            </div>
          </div>
        </div>

        {/* Other Forums */}

        <div className="bg-slate-100 flex flex-col py-12">
          <span className="md:text-3xl text-xl heading-font">OTHER FORUMS</span>
          <div className="mx-auto webfont-bold lg:w-[60vw] md:w-[75vw] w-[90vw] text-sm md:text-md bg-white p-4 m-12 flex flex-col gap-4 shadow-lg shadow-slate-300">
            <span className="flex flex-wrap justify-evenly gap-4">
              <span
                onClick={() => setForumState(0)}
                className={
                  "hover:text-[#FF5F33] hover:underline hover:underline-offset-8 cursor-pointer " +
                  (forumState === 0
                    ? "text-[#FF5F33] underline underline-offset-8"
                    : "")
                }
              >
                General Real Estate Discussion
              </span>
              <span
                onClick={() => setForumState(1)}
                className={
                  "hover:text-[#FF5F33] hover:underline hover:underline-offset-8 cursor-pointer " +
                  (forumState === 1
                    ? "text-[#FF5F33] underline underline-offset-8"
                    : "")
                }
              >
                NRI Real Estate
              </span>
              <span
                onClick={() => setForumState(2)}
                className={
                  "hover:text-[#FF5F33] hover:underline hover:underline-offset-8 cursor-pointer " +
                  (forumState === 2
                    ? "text-[#FF5F33] underline underline-offset-8"
                    : "")
                }
              >
                Indian Property Laws
              </span>
              <span
                onClick={() => setForumState(3)}
                className={
                  "hover:text-[#FF5F33] hover:underline hover:underline-offset-8 cursor-pointer " +
                  (forumState === 3
                    ? "text-[#FF5F33] underline underline-offset-8"
                    : "")
                }
              >
                Home Loans in India
              </span>
              <span
                onClick={() => setForumState(4)}
                className={
                  "hover:text-[#FF5F33] hover:underline hover:underline-offset-8 cursor-pointer " +
                  (forumState === 4
                    ? "text-[#FF5F33] underline underline-offset-8"
                    : "")
                }
              >
                Vastu
              </span>
            </span>
            <hr className="border-slate-300 mx-2" />
            {forumState === 0 && (
              <>
                <div className="flex flex-wrap items-center justify-between cursor-pointer">
                  <span className="flex items-center gap-4">
                    <span className="text-slate-600 h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>

                    <span>Indian Real Estate News</span>
                  </span>
                  <span className="flex flex-col text-right leading-tight md:text-sm text-[1.5vh]">
                    <span className="flex gap-2 items-center">
                      <span>5666 Replies</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>951K+ Views</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>Last Reply:- 62483340 seconds ago</span>
                    </span>
                    <span className="text-slate-500">
                      Started by{" "}
                      <span className="text-[#39BD99]">amit2222</span> on 8
                      years ago
                    </span>
                  </span>
                </div>
                <hr className="border-slate-300 mx-2" />
                <div className="flex flex-wrap items-center justify-between cursor-pointer">
                  <span className="flex items-center gap-4">
                    <span className="text-slate-600 h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>

                    <span>Indian Real Estate News</span>
                  </span>
                  <span className="flex flex-col text-right leading-tight md:text-sm text-[1.5vh]">
                    <span className="flex gap-2 items-center">
                      <span>5666 Replies</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>951K+ Views</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>Last Reply:- 62483340 seconds ago</span>
                    </span>
                    <span className="text-slate-500 webfont-bold">
                      Started by{" "}
                      <span className="text-[#39BD99]">amit2222</span> on 8
                      years ago
                    </span>
                  </span>
                </div>
                <hr className="border-slate-300 mx-2" />
                <div className="flex flex-wrap items-center justify-between cursor-pointer">
                  <span className="flex items-center gap-4">
                    <span className="text-slate-600 h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>

                    <span>Indian Real Estate News</span>
                  </span>
                  <span className="flex flex-col text-right leading-tight md:text-sm text-[1.5vh]">
                    <span className="flex gap-2 items-center">
                      <span>5666 Replies</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>951K+ Views</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>Last Reply:- 62483340 seconds ago</span>
                    </span>
                    <span className="text-slate-500">
                      Started by{" "}
                      <span className="text-[#39BD99]">amit2222</span> on 8
                      years ago
                    </span>
                  </span>
                </div>
                <hr className="border-slate-300 mx-2" />
                <div className="flex flex-wrap items-center justify-between cursor-pointer">
                  <span className="flex items-center gap-4">
                    <span className="text-slate-600 h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>

                    <span>Indian Real Estate News</span>
                  </span>
                  <span className="flex flex-col text-right leading-tight md:text-sm text-[1.5vh]">
                    <span className="flex gap-2 items-center">
                      <span>5666 Replies</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>951K+ Views</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>Last Reply:- 62483340 seconds ago</span>
                    </span>
                    <span className="text-slate-500">
                      Started by{" "}
                      <span className="text-[#39BD99]">amit2222</span> on 8
                      years ago
                    </span>
                  </span>
                </div>
              </>
            )}

            {forumState === 1 && <>Oops! Something went wrong here.</>}
            {forumState === 2 && <>Oops! Something went wrong here.</>}
            {forumState === 3 && (
              <>
                <div className="flex flex-wrap items-center justify-between cursor-pointer">
                  <span className="flex items-center gap-4">
                    <span className="text-slate-600 h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>

                    <span>Home Loans and Related News</span>
                  </span>
                  <span className="flex flex-col text-right leading-tight md:text-sm text-[1.5vh]">
                    <span className="flex gap-2 items-center">
                      <span>5666 Replies</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>951K+ Views</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>Last Reply:- 62483340 seconds ago</span>
                    </span>
                    <span className="text-slate-500">
                      Started by{" "}
                      <span className="text-[#39BD99]">amit2222</span> on 8
                      years ago
                    </span>
                  </span>
                </div>
                <hr className="border-slate-300 mx-2" />
                <div className="flex flex-wrap items-center justify-between cursor-pointer">
                  <span className="flex items-center gap-4">
                    <span className="text-slate-600 h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>

                    <span>PMAY Enrollment</span>
                  </span>
                  <span className="flex flex-col text-right leading-tight md:text-sm text-[1.5vh]">
                    <span className="flex gap-2 items-center">
                      <span>5666 Replies</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>951K+ Views</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>Last Reply:- 62483340 seconds ago</span>
                    </span>
                    <span className="text-slate-500 webfont-bold">
                      Started by{" "}
                      <span className="text-[#39BD99]">amit2222</span> on 8
                      years ago
                    </span>
                  </span>
                </div>
                <hr className="border-slate-300 mx-2" />
                <div className="flex flex-wrap items-center justify-between cursor-pointer">
                  <span className="flex items-center gap-4">
                    <span className="text-slate-600 h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>

                    <span>Home Loan Term Resetting to Original Term</span>
                  </span>
                  <span className="flex flex-col text-right leading-tight md:text-sm text-[1.5vh]">
                    <span className="flex gap-2 items-center">
                      <span>5666 Replies</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>951K+ Views</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>Last Reply:- 62483340 seconds ago</span>
                    </span>
                    <span className="text-slate-500">
                      Started by{" "}
                      <span className="text-[#39BD99]">amit2222</span> on 8
                      years ago
                    </span>
                  </span>
                </div>
                <hr className="border-slate-300 mx-2" />
                <div className="flex flex-wrap items-center justify-between cursor-pointer">
                  <span className="flex items-center gap-4">
                    <span className="text-slate-600 h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>

                    <span>No Allotment Letter from Khada 1983 Flat</span>
                  </span>
                  <span className="flex flex-col flex-wrap text-right leading-tight md:text-sm text-[1.5vh]">
                    <span className="flex gap-2 items-center">
                      <span>5666 Replies</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>951K+ Views</span>
                      <span className="p-1 rounded-full bg-slate-400"></span>
                      <span>Last Reply:- 62483340 seconds ago</span>
                    </span>
                    <span className="text-slate-500">
                      Started by{" "}
                      <span className="text-[#39BD99]">amit2222</span> on 8
                      years ago
                    </span>
                  </span>
                </div>
              </>
            )}
            {forumState === 4 && <>Oops! Something went wrong here.</>}

            <hr className="border-slate-300 mx-2" />
            <span className="flex text-[#39BD99] items-center text-sm">
              <div className="text-left cursor-pointer">
                View All Discussions
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* IREF Lounge */}

        <span className="md:px-24 px-4 py-8 md:text-3xl text-xl heading-font">
          IREF LOUNGE
        </span>
        <div className="pb-12 md:px-48 px-4 flex items-center">
          <button
            id="slideLeft"
            type="button"
            className="w-10 h-10 md:w-16 md:h-16"
            onClick={handleLeftClick}
          >
            <svg
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <g>
                <path
                  fill="#39BD99"
                  d="M44.942,50.412l14.037-15.487c0.742-0.818,0.68-2.083-0.139-2.824c-0.817-0.742-2.083-0.679-2.824,0.139L40.784,49.044
		c-0.409,0.451-0.565,1.038-0.493,1.598c-0.016,0.564,0.196,1.131,0.647,1.539L57.74,67.412c0.383,0.348,0.864,0.519,1.344,0.519
		c0.545,0,1.087-0.222,1.482-0.657c0.741-0.818,0.68-2.083-0.139-2.824L44.942,50.412z"
                />
                <path
                  fillOpacity="0.3"
                  d="M84.133,49.756c0-18.448-15.01-33.457-33.458-33.457S17.218,31.308,17.218,49.756c0,18.449,15.009,33.458,33.457,33.458
		S84.133,68.205,84.133,49.756z M50.675,79.214c-16.243,0-29.457-13.215-29.457-29.458c0-16.242,13.214-29.457,29.457-29.457
		c16.243,0,29.458,13.215,29.458,29.457C80.133,65.999,66.918,79.214,50.675,79.214z"
                />
              </g>
            </svg>
          </button>
          <div
            id="slideContainer"
            className="md:w-[60vw] w-[90vw] flex overflow-x-scroll scrollbar-hide scroll-smooth mx-auto p-4 gap-8 my-4"
          >
            <div className="p-4 shadow-slate-300 shadow-md flex flex-col justify-between hover:scale-110 cursor:pointer transition duration-300 text-sm leading-tight h-[25vh] w-[30vh] text-left">
              <span className="webfont-bold md:text-lg">IREF Socials</span>
              <span className="flex items-center sm:gap-8 gap-4 md:gap-12">
                <span className="flex flex-col">
                  <span>62</span>
                  <span>Discussions</span>
                </span>
                <span className="flex flex-col">
                  <span>639</span>
                  <span>Replies</span>
                </span>
              </span>
            </div>
            <div className="p-4 shadow-slate-300 shadow-md flex flex-col justify-between hover:scale-110 cursor:pointer transition duration-300 text-sm leading-tight h-[25vh] md:w-[30vh] w-[25vh] text-left">
              <span className="webfont-bold md:text-lg">
                Introduce Yourself
              </span>
              <span>Introduce yourself to the IREF community</span>
              <span className="flex items-center sm:gap-8 gap-4 md:gap-12">
                <span className="flex flex-col">
                  <span>455</span>
                  <span>Discussions</span>
                </span>
                <span className="flex flex-col">
                  <span>1347</span>
                  <span>Replies</span>
                </span>
              </span>
            </div>
            <div className="p-4 shadow-slate-300 shadow-md flex flex-col hover:scale-110 cursor:pointer transition duration-300 text-sm leading-tight h-[25vh] md:w-[30vh] w-[25vh] text-left justify-between">
              <span className="webfont-bold md:text-lg">Fun & Promotions</span>
              <span>A place to exchange fun IREF materials</span>
              <span className="flex items-center sm:gap-8 gap-4 md:gap-12">
                <span className="flex flex-col">
                  <span>62</span>
                  <span>Discussions</span>
                </span>
                <span className="flex flex-col">
                  <span>639</span>
                  <span>Replies</span>
                </span>
              </span>
            </div>
            <div className="p-4 shadow-slate-300 shadow-md flex flex-col hover:scale-110 cursor:pointer transition duration-300 text-sm leading-tight h-[25vh] md:w-[30vh] w-[25vh] justify-between text-left">
              <span className="webfont-bold md:text-lg">Testimonials</span>
              <span className="flex items-center sm:gap-8 gap-4 md:gap-12">
                <span className="flex flex-col">
                  <span>22</span>
                  <span>Discussions</span>
                </span>
                <span className="flex flex-col">
                  <span>571</span>
                  <span>Replies</span>
                </span>
              </span>
            </div>
            <div className="p-4 shadow-slate-300 shadow-md flex flex-col hover:scale-110 cursor:pointer transition duration-300 text-sm leading-tight h-[25vh] md:w-[30vh] w-[25vh] justify-between text-left">
              <span className="webfont-bold md:text-lg">
                Questions & Suggestions
              </span>
              <span>Suggestions on how IREF can be improved</span>
              <span className="flex items-center sm:gap-8 gap-4 md:gap-12">
                <span className="flex flex-col">
                  <span>165</span>
                  <span>Discussions</span>
                </span>
                <span className="flex flex-col">
                  <span>2586</span>
                  <span>Replies</span>
                </span>
              </span>
            </div>
            <div className="p-4 shadow-slate-300 shadow-md flex flex-col hover:scale-110 cursor:pointer transition duration-300 text-sm leading-tight h-[25vh] md:w-[30vh] w-[25vh] justify-between">
              <span className="webfont-bold md:text-lg">
                The Off Topic Forum
              </span>
              <span className="flex items-center sm:gap-8 gap-4 md:gap-12">
                <span className="flex flex-col text-left">
                  <span>954</span>
                  <span>Discussions</span>
                </span>
                <span className="flex flex-col">
                  <span>54K+</span>
                  <span>Replies</span>
                </span>
              </span>
            </div>
            <div className="p-4 shadow-slate-300 shadow-md flex flex-col hover:scale-110 cursor:pointer transition duration-300 text-sm leading-tight h-[25vh] md:w-[30vh] w-[25vh] justify-between text-left">
              <span className="webfont-bold md:text-lg">
                Missing Threads / Posts - Report Here
              </span>
              <span className="flex items-center sm:gap-8 gap-4 md:gap-12">
                <span className="flex flex-col">
                  <span>7</span>
                  <span>Discussions</span>
                </span>
                <span className="flex flex-col">
                  <span>101</span>
                  <span>Replies</span>
                </span>
              </span>
            </div>
            <div className="p-4 shadow-slate-300 shadow-md flex flex-col hover:scale-110 cursor:pointer transition duration-300 text-sm leading-tight h-[25vh] md:w-[30vh] w-[25vh] justify-between text-left">
              <span className="webfont-bold md:text-lg">Real Estate Humor</span>
              <span className="flex items-center sm:gap-8 gap-4 md:gap-12">
                <span className="flex flex-col">
                  <span>35</span>
                  <span>Discussions</span>
                </span>
                <span className="flex flex-col">
                  <span>679</span>
                  <span>Replies</span>
                </span>
              </span>
            </div>
            <div className="p-4 shadow-slate-300 shadow-md flex flex-col hover:scale-110 cursor:pointer transition duration-300 text-sm leading-tight h-[25vh] md:w-[30vh] w-[25vh] justify-between text-left">
              <span className="webfont-bold md:text-lg">
                Report Technical Issues
              </span>
              <span className="flex items-center sm:gap-8 gap-4 md:gap-12">
                <span className="flex flex-col">
                  <span>28</span>
                  <span>Discussions</span>
                </span>
                <span className="flex flex-col">
                  <span>282</span>
                  <span>Replies</span>
                </span>
              </span>
            </div>
          </div>
          <button
            id="slideRight"
            type="button"
            onClick={handleRightClick}
            className="w-10 h-10 md:w-16 md:h-16 rotate-180"
          >
            <svg
              fill="#BFBFBF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <g>
                <path
                  fill="#39BD99"
                  d="M44.942,50.412l14.037-15.487c0.742-0.818,0.68-2.083-0.139-2.824c-0.817-0.742-2.083-0.679-2.824,0.139L40.784,49.044
		c-0.409,0.451-0.565,1.038-0.493,1.598c-0.016,0.564,0.196,1.131,0.647,1.539L57.74,67.412c0.383,0.348,0.864,0.519,1.344,0.519
		c0.545,0,1.087-0.222,1.482-0.657c0.741-0.818,0.68-2.083-0.139-2.824L44.942,50.412z"
                />
                <path
                  fillOpacity="0.3"
                  d="M84.133,49.756c0-18.448-15.01-33.457-33.458-33.457S17.218,31.308,17.218,49.756c0,18.449,15.009,33.458,33.457,33.458
		S84.133,68.205,84.133,49.756z M50.675,79.214c-16.243,0-29.457-13.215-29.457-29.458c0-16.242,13.214-29.457,29.457-29.457
		c16.243,0,29.458,13.215,29.458,29.457C80.133,65.999,66.918,79.214,50.675,79.214z"
                />
              </g>
            </svg>
          </button>
        </div>

        {/* Get Guidance */}

        <div className="bg-slate-100 flex flex-col py-12 w-full">
          <span className="md:text-3xl text-xl heading-font mb-12">
            TCI = TAKE CONSISTENT INCOME
          </span>
          <div className="grid grid-cols-6 grid-rows-8 lg:w-[60vw] md:w-[80vw] rounded-lg mx-auto sm:text-lg text-sm  border border-slate-300 mb-4">
            <span className="bg-slate-400 font-bold sm:text-xl text-md col-span-4 items-center py-1 px-2 border-r border-slate-300">
              Features
            </span>
            <span className="bg-slate-400 font-bold sm:text-xl text-md col-span-1 items-center py-1 px-2 border-r border-slate-300">
              TCI
            </span>
            <span className="bg-slate-400 font-bold sm:text-xl text-md col-span-1 items-center py-1 px-2 ">
              Other
            </span>
            <span className="col-span-4 items-center py-1 px-2 text-left border-l border-r">
              Live Market Sessions
            </span>
            <span className="col-span-1 items-center p-1 border-r">
              <img src={tick} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-1 items-center p-1">
              <img src={cross} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-4 items-center py-1 px-2 text-left border-l border-r">
              Master tool - Tredcode
            </span>
            <span className="col-span-1 items-center p-1 border-r">
              <img src={tick} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-1 items-center p-1">
              <img src={cross} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-4 items-center py-1 px-2 text-left border-l border-r">
              Hindi/English sessions
            </span>
            <span className="col-span-1 items-center p-1 border-r">
              <img src={tick} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-1 items-center p-1">
              <img src={cross} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-4 items-center py-1 px-2 text-left border-l border-r">
              Students Portal
            </span>
            <span className="col-span-1 items-center p-1 border-r">
              <img src={tick} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-1 items-center p-1">
              <img src={cross} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-4 items-center py-1 px-2 text-left border-l border-r">
              Dedicated support Portal
            </span>
            <span className="col-span-1 items-center p-1 border-r">
              <img src={tick} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-1 items-center p-1">
              <img src={cross} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-4 items-center py-1 px-2 text-left border-l border-r">
              Trader's Community to share ideas
            </span>
            <span className="col-span-1 items-center p-1 border-r">
              <img src={tick} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-1 items-center p-1">
              <img src={cross} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-4 items-center py-1 px-2 text-left border-l border-r">
              Job Placement cell
            </span>
            <span className="col-span-1 items-center p-1 border-r">
              <img src={tick} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-1 items-center p-1">
              <img src={cross} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-4 items-center py-1 px-2 text-left border-l border-r">
              NISM exam preparation
            </span>
            <span className="col-span-1 items-center p-1 border-r">
              <img src={tick} className="sm:w-8 w-6 mx-auto" />
            </span>
            <span className="col-span-1 items-center p-1">
              <img src={cross} className="sm:w-8 w-6 mx-auto" />
            </span>
          </div>
          <div
            className="sm:px-6 sm:py-3 px-2 py-1 bg-slate-600 text-white sm:text-xl w-fit rounded-md mx-auto cursor-pointer my-2 heading-font tracking-wide"
            onClick={() => setGuidance((curr) => !curr)}
          >
            GET FREE GUIDANCE
          </div>
        </div>

        {/* Be a Pro in 3 Steps */}

        <div className=" flex flex-col py-24 w-full">
          <span className="md:text-3xl text-xl heading-font mb-12">
            BE A <span className="text-slate-400">PRO</span> IN 3 STEPS
          </span>
          <div className="grid md:grid-cols-3 grid-cols-1 mx-auto sm:text-lg text-sm mb-4 md:gap-8 gap-4 md:px-24 px-6">
            <span
              className="bg-slate-200 rounded-lg col-span-1 flex flex-col md:gap-10 gap-4 pt-8 lg:w-80 relative cursor-pointer"
              onClick={() => setStep1((curr) => !curr)}
            >
              <span className="absolute xl:p-5 md:p-4 p-5 md:block bg-gradient-to-r from-slate-500 to-slate-200 rounded-full top-4 right-4"></span>
              <img src={redcircle} className="w-[45%] mx-auto" />
              {/* <img src={tasklist} className="w-[45%] mx-auto" /> */}
              <span className="heading-font lg:text-[6vh] md:text-[4vh] text-2xl">
                Step-1
              </span>
              <span className="bg-slate-600 text-white heading-font lg:text-3xl text-lg md:p-4 p-1 rounded-b-lg tracking-wide">
                CLICK HERE
              </span>
            </span>
            <span
              className="bg-slate-200 rounded-lg col-span-1 flex flex-col md:gap-10 gap-4 pt-8 lg:w-80 relative cursor-pointer"
              onClick={() => setStep2((curr) => !curr)}
            >
              <span className="absolute xl:p-5 md:p-4 p-5 md:block bg-gradient-to-r from-slate-500 to-slate-200 rounded-full top-4 right-4"></span>
              {/* <img src={tredcode} className="w-[45%] mx-auto" /> */}
              <img src={redcircle} className="w-[45%] mx-auto" />
              <span className="heading-font lg:text-[6vh] md:text-[4vh] text-2xl">
                Step-2
              </span>
              <span className="bg-slate-600 text-white heading-font lg:text-3xl text-lg md:p-4 p-1 rounded-b-lg tracking-wide">
                CLICK HERE
              </span>
            </span>
            <span
              className="bg-slate-200 rounded-lg col-span-1 flex flex-col md:gap-10 gap-4 pt-8 lg:w-80 relative cursor-pointer"
              onClick={() => setStep3((curr) => !curr)}
            >
              <span className="absolute xl:p-5 md:p-4 p-5 md:block bg-gradient-to-r from-slate-500 to-slate-200 rounded-full top-4 right-4"></span>
              {/* <img src={citizens} className="w-[45%] mx-auto" /> */}
              <img src={redcircle} className="w-[45%] mx-auto" />
              <span className="heading-font lg:text-[6vh] md:text-[4vh] text-2xl">
                Step-3
              </span>
              <span className="bg-slate-600 text-white heading-font lg:text-3xl text-lg md:p-4 p-1 rounded-b-lg tracking-wide">
                CLICK HERE
              </span>
            </span>
          </div>
        </div>

        {/* Footer */}

        <div className="bg-slate-950 lg:px-52 md:px-44 p-6 text-white text-[1.5vh]">
          <span className="flex justify-between my-2">
            <span className="font-bold text-3xl tracking-wider">IREF</span>
            <span className="flex gap-4 items-center">
              <img src={twitter} className="sm:w-9 sm:h-9 w-6 h-6 text-white" />
              <img
                src={facebook}
                className="sm:w-10 sm:h-10 w-7 h-7 text-white"
              />
              <img
                src={googleplus}
                className="sm:w-11 sm:h-11 w-8 h-8 text-white"
              />
            </span>
          </span>
          <span className="lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-rows-12 text-left hidden md:grid">
            <span className="hover:underline cursor:pointer">
              Real Estate Group Buying
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Pune
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Goa
            </span>
            <span className="hover:underline cursor:pointer">Housing.com</span>
            <span className="hover:underline cursor:pointer">
              Indian Property Laws
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Banglore
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Kochi
            </span>
            <span className="hover:underline cursor:pointer">
              Announcements
            </span>
            <span className="hover:underline cursor:pointer">
              Homeloan Laws in India
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Chennai
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Kerala
            </span>
            <span className="hover:underline cursor:pointer">About Us</span>
            <span className="hover:underline cursor:pointer">
              NRI Real Estate
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Ahmedabad
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Coimbatore
            </span>
            <span className="hover:underline cursor:pointer">FAQs</span>
            <span className="hover:underline cursor:pointer">
              Vastu and Home Improvement
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Kolkata
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Bhubaneshwar
            </span>
            <span className="hover:underline cursor:pointer">
              Real Estate Group Buying
            </span>
            <span className="hover:underline cursor:pointer">Promotions</span>
            <span className="hover:underline cursor:pointer">
              Off topic Discussion
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Hyderabad
            </span>
            <span className="hover:underline cursor:pointer">
              Property in Mysore
            </span>
            <span className="hover:underline cursor:pointer">Feedback</span>
            <span className="hover:underline cursor:pointer">Contact Us</span>
          </span>
          <span className="lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-rows-12 text-left grid md:hidden">
            <span className="hover:underline cursor:pointer">Housing.com</span>
            <span className="hover:underline cursor:pointer">About Us</span>
            <span className="hover:underline cursor:pointer">Promotions</span>
            <span className="hover:underline cursor:pointer">
              Announcements
            </span>
            <span className="hover:underline cursor:pointer">FAQs</span>
            <span className="hover:underline cursor:pointer">Feedback</span>
          </span>
          <span className="flex flex-wrap justify-between my-2 text-left gap-2">
            <span className="flex gap-2">
              <span className="underline cursor-pointer">Rules</span>
              <span className="underline cursor-pointer">Terms of Use</span>
              <span className="underline cursor-pointer">Copyright Policy</span>
              <span className="underline cursor-pointer">
                Change to Old Theme
              </span>
            </span>
            <span>
              Copyright © 2016-17 indianrealestateforum.com | All Rights
              Reserved
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
