"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    // Convert to lowercase for URLs like /brand/puma
    const formatted = trimmed.toLowerCase();
    router.push(`/brand/${formatted}`);
  };

  return (
    <header className="flex items-center justify-evenly max-w-screen h-[100px]">
      <div className="flex bg-gray-200 max-w-screen w-[97%] rounded-[36px] justify-evenly items-center">
        {/* Left side: Logo + Nav */}
        <div className="flex items-center gap-[15px]">
          <Link href={"/"}>
            <Image
              src="/images/website-logo.png"
              alt="Website Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
          </Link>

          <Navbar bg="none" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto flex gap-[16px]">
                <Nav.Link
                  as={Link}
                  href="/Home"
                  className="text-black hover:!text-orange-400 duration-300"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href="/About"
                  className="text-black hover:!text-orange-400 duration-300"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href="/Contact"
                  className="text-black hover:!text-orange-400 duration-300"
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        {/* Right side: Search */}
        <form
          onSubmit={handleSearch}
          className="flex gap-[8px] bg-white border border-gray-300 rounded-[12px] h-[36px] px-3 items-center justify-center w-[240px]"
        >
          <FaSearch
            size={18}
            className="text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search brand..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none flex-1 text-sm bg-transparent"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
