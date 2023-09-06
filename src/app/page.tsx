"use client";

import React from "react";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Menu,
  Star,
  X,
} from "lucide-react";

export default function LandinngPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-gradient-to-tr from-[#febbcc] via-[#ffeecc] to-[#febbcc]">
      {/* <header className="relative w-full pb-4">
        <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl">
          <div className="inline-flex items-center mt-2 space-x-2">
            <span className="font-bold tracking-wider">Vitality Her</span>
          </div>
        </div>
      </header> */}
      {/* Hero Section */}
      <div className="relative flex w-full h-screen">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div className="flex items-center p-1 mt-8 space-x-2 bg-gray-100 rounded-full max-w-max">
              <div className="p-1 px-2 bg-white rounded-full">
                <p className="text-lg font-bold">Vitality</p>
              </div>
              <p className="pr-1 text-lg font-medium">Her</p>
            </div>
            <h1 className="mt-8 text-lg font-bold tracking-tight text-black md:text-3xl">
              Empower yourself today and embark on a journey towards improved
              well-being.
            </h1>
            <p className="mt-8 text-gray-700 text-md">
              {`Tackle PCOS hurdles with our AI-driven solution. Empower yourself
              through accurate detection and prediction, enhancing well-being.
              By engaging with our carefully crafted questions, you'll unlock
              personalized insights into your health profile which will provide
              clarity on PCOS risk and mental health. Join us for a better
              health journey.`}
            </p>

            <div>
              <a href="/login">
                <button
                  type="button"
                  className="mt-4 mr-5 rounded-md bg-black px-4 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Login
                </button>
              </a>
              <a href="/signup">
                <button
                  type="button"
                  className="mt-4 rounded-md bg-black px-4 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Signup
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="350"
              height="350"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.75 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.25 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.15 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM17.15 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.75 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.2 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.1 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.05 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.1 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.05 18.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.25 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13.75 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                stroke="#ffeecc"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M12 2.45v0"
                stroke="#ffeecc"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17.5 2.85v0M17.5 21.2v0M20 16.5v0M20 7v0M4 16.5v0M4 7v0M6.5 2.85v0M6.5 21.2v0"
                stroke="#ffeecc"
                stroke-width="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 21.5v0M1.55 12v0M22.5 12v0"
                stroke="#ffeecc"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="px-2 mx-auto pb-14 max-w-7xl lg:px-8">
        <div className="mb-12 text-2xl font-bold text-center">
          Upcoming Features
        </div>
        <div className="grid grid-cols-1 text-center gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.02 5.97A9.966 9.966 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2"
                  stroke="#FF8A65"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7"
                  stroke="#FF8A65"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4"
                  stroke="#FF8A65"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Period Tracking
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 22h20M3.11 22v-9c0-1.66 1.49-3 3.33-3h11.11c1.84 0 3.33 1.34 3.33 3v9M5.56 10V7.17C5.56 5.97 6.64 5 7.98 5h8.05c1.33 0 2.41.97 2.41 2.17V10"
                  stroke="#FF8A65"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="m3.53 13.98.37.01c.74.01 1.33.61 1.33 1.35v.33a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31c0-.74.6-1.35 1.35-1.35h.45M8 5V3M16 5V3M12 5V2"
                  stroke="#FF8A65"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Personalized Diet Plans
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.96 10.83H12.9l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29M9.54 16.17v-5.34l-1.5 1.67M10.02 4.47 12 2"
                  stroke="#FF8A65"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.91 7.8c-1.11 1.48-1.8 3.31-1.8 5.31A8.89 8.89 0 0 0 12 22a8.89 8.89 0 0 0 8.89-8.89A8.89 8.89 0 0 0 12 4.22c-.68 0-1.34.09-1.98.24"
                  stroke="#FF8A65"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Personalized Reminders
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM8 12h8M12 16V8"
                  stroke="#FF8A65"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Access to healthcare professionals
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
