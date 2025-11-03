import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/website-logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <span className="text-xl font-semibold text-black">Nudex</span>
          </Link>

          <p className="mt-4 text-sm text-gray-400">
            Explore the world of p*rn like never before with Nudex – your
            ultimate destination for adult content.
          </p>
        </div>

        <div>
          <h3 className="text-black text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook size={20} />
            </Link>

            <Link href="https://twitter.com" target="_blank">
              <FaTwitter size={20} />
            </Link>

            <Link href="https://instagram.com" target="_blank">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nudex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
