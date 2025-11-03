"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-evenly max-w-screen h-[100px]">
      <div className="flex bg-gray-200 max-w-screen w-[97%] rounded-[36px] justify-evenly items-center">
        <div className="flex gap-15px">
          <Link href={"/"}>
            <Image
              src="/images/website-logo.png"
              alt="src.image"
              width={500}
              height={500}
              className="w-[70px] h-[70px]"
            />
          </Link>

          <div className="flex gap-10px">
            <Navbar bg="none" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    as={Link}
                    href="/Home"
                    className="text-black hover:!text-orange-300 duration-300"
                  >
                    Home
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    href="/About"
                    className="text-black hover:!text-orange-300 duration-300"
                  >
                    About
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    href="/Contact"
                    className="text-black hover:!text-orange-300 duration-300"
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>

        <div className="flex gap-[8px] outline-1 rounded-[12px] h-[28px] items-center justify-center w-[220px]">
          <FaSearch size={20} />

          <input
            type="text"
            placeholder="Search for pink pussy..."
            className="rounded-[12px] outline"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
