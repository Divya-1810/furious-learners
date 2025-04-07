import React from "react";
import Nav from "./components/Nav";
import { GiOpenBook } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiCertificateDuotone } from "react-icons/pi";
import { FaPersonMilitaryPointing } from "react-icons/fa6";
import CourseCategories from "./components/CourseCart";
import PricingPlans from "./components/PricePlan";
import Footer from "./components/footer";

export default function Page() {
  return (
    <div className="home bg-bg-primary overflow-x-hidden">
      <Nav />
      <div className="flex flex-col items-start px-6 py-20 gap-5 text-white md:px-20 lg:w-3/5">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">
          Welcome to Furious Learners
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Best Online Education Expertise
        </h2>
        <p className="text-base md:text-lg">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 uppercase">
          <button className="flex items-center gap-3 bg-[#09887D] px-6 py-3 font-bold rounded">
            GET STARTED NOW <FaArrowRightLong />
          </button>
          <button className="flex items-center gap-3 text-[#09887D] bg-white px-6 py-3 font-bold rounded">
            VIEW COURSE <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className="w-full bg-gray-50 flex flex-col lg:flex-row">
        <img
          src="./image/about.webp"
          alt="About"
          className="w-full h-[300px] object-cover lg:w-1/2 lg:h-auto"
        />
        <div className="flex flex-col gap-6 p-6 lg:p-10">
          <h4 className="text-md md:text-xl font-bold text-[#09887D]">
            LEARN ANYTHING
          </h4>
          <h1 className="text-2xl md:text-4xl font-extrabold text-black">
            Benefits About Online Learning Expertise
          </h1>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-100 p-4 hover:bg-[#09887D] hover:text-white transition-all rounded-md">
              <GiOpenBook className="text-[4rem]" />
              <div>
                <h3 className="text-lg font-bold">Online Courses</h3>
                <p className="text-sm">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-100 p-4 hover:bg-[#09887D] hover:text-white transition-all rounded-md">
              <PiCertificateDuotone className="text-[4rem]" />
              <div>
                <h3 className="text-lg font-bold">Earn A Certificate</h3>
                <p className="text-sm">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-100 p-4 hover:bg-[#09887D] hover:text-white transition-all rounded-md">
              <FaPersonMilitaryPointing className="text-[4rem]" />
              <div>
                <h3 className="text-lg font-bold">Learn with Experts</h3>
                <p className="text-sm">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CourseCategories />
      <PricingPlans />
      <Footer />
    </div>
  );
}
