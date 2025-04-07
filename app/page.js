import React from "react";
import Nav from "./components/Nav";
import { GiOpenBook } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiCertificateDuotone } from "react-icons/pi";
import { FaPersonMilitaryPointing } from "react-icons/fa6";
import CourseCategories from "./components/CourseCart";
import PricingPlans from "./components/PricePlan";
import Footer from "./components/footer";

export default function page() {
  return (
    <div className="home bg-bg-primary overflow-y-scroll">
      <Nav />

      <div className="flex flex-col w-[60vw]  text-white px-30 py-[10rem] gap-5">
        <h1 className="text-3xl font-bold uppercase">
          welcome to furious leaners
        </h1>
        <h1 className="text-5xl font-extrabold">
          Best Online Eduction Expertise
        </h1>
        <p className="text-lg">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="flex gap-4 uppercase">
          <button className="flex items-center gap-4 bg-[#09887D] px-5 py-3 font-bold rounded">
            GET STARTED NOW <FaArrowRightLong />
          </button>
          <button className="flex items-center gap-4 text-[#09887D] bg-white px-5 py-3 font-bold rounded">
            VIEW COURSE <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="w-full h-[100vh] bg-gray-50 flex">
        <img src="./image/about.webp" className="w-[55vw] h-full" />
        <div className="flex flex-col gap-10 p-10">
          <h4 className="text-xl font-bold text-[#09887D]">LEARN ANYTHING</h4>
          <h1 className="text-5xl font-extrabold text-black">
            Benefits About Online Learning Expertise
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-gray-100 p-4 hover:bg-[#09887D] transition-all hover:text-white">
              <GiOpenBook className="text-[6rem]" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Online Courses</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 p-4 hover:bg-[#09887D] transition-all hover:text-white">
              <PiCertificateDuotone className="text-[6rem]" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Earn A Certificates</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 p-4 hover:bg-[#09887D] transition-all hover:text-white">
              <FaPersonMilitaryPointing className="text-[6rem]" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Learn with Expert</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
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
