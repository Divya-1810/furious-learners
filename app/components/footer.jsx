import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                FURIOUS <span className="text-teal-600">LEARNERS</span>
              </h2>
              <p className="text-teal-600 text-sm font-medium">
                ONLINE EDUCATION & LEARNING
              </p>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Empowering minds through quality online education. Join us on a journey of continuous learning and growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1AKyjmuCvQ/"
                className="bg-teal-100 p-2 rounded-full hover:bg-teal-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="https://twitter.com/srishanmugha"
                className="bg-teal-100 p-2 rounded-full hover:bg-teal-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/shanmughainstitutions"
                className="bg-teal-100 p-2 rounded-full hover:bg-teal-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="bg-teal-100 p-2 rounded-full hover:bg-teal-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { text: "Home", href: "/" },
                { text: "About Us", href: "/about" },
                { text: "Courses", href: "/course" },
                { text: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="flex items-center group text-sm hover:text-teal-600 transition-colors"
                  >
                    <FaChevronRight className="mr-2 text-teal-600 text-xs group-hover:translate-x-1 transition-transform" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-teal-600 mt-1 flex-shrink-0" />
                <span>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaPhoneAlt className="text-teal-600 flex-shrink-0" />
                <a href="tel:+2392392210" className="hover:text-teal-600 transition-colors">
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaPaperPlane className="text-teal-600 flex-shrink-0" />
                <a href="mailto:info@yourdomain.com" className="hover:text-teal-600 transition-colors">
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-6">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-teal-600 text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} FURIOUS LEARNERS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
