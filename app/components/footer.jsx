import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <h2 className="text-2xl font-bold">
            FURIOUS <br /> LEARNERS
          </h2>
          <p className="text-teal-500 mt-2 mb-4">ONLINE EDUCATION & LEARNING</p>
          <p className="text-sm text-gray-500 mb-4">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="flex gap-4 text-white">
            <div className="bg-teal-500 p-2 rounded-full">
              <FaFacebookF />
            </div>
            <div className="bg-teal-500 p-2 rounded-full">
              <FaTwitter />
            </div>
            <div className="bg-teal-500 p-2 rounded-full">
              <FaInstagram />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-teal-500">
            <li>→ About Us</li>
            <li>→ Courses</li>
            <li>→ Contact us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-teal-500">
            <li>→ Contact Us</li>
            <li>→ Pricing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Recent Post</h4>
          <div className="space-y-4 text-sm">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-teal-500 w-12 h-12 rounded flex items-center justify-center text-white text-lg">
                  <BsFillFileEarmarkTextFill />
                </div>
                <div>
                  <p className="text-teal-500">
                    📅 {["JAN. 18, 2021", "APR. 25, 2022", "MAY. 15, 2022"][i]}{" "}
                    <span className="text-green-600">
                      👤 {["Admin", "Admin", "User"][i]}
                    </span>
                  </p>
                  <p className="text-gray-700">
                    Build your Dream Software & Engineering ...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Have a Questions?</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-teal-500 mt-1" />
              <span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-teal-500" />
              <span>+2 392 3929 210</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaPaperPlane className="text-teal-500" />
              <span>info@yourdomain.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        Copyright ©2025 All rights reserved | This template is made with
        <span className="text-teal-500 mx-1">♥</span> by{" "}
        <strong>FURIOUS LEARNERS</strong>
      </div>
    </footer>
  );
}
