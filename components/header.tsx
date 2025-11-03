"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <header className="flex items-center justify-evenly max-w-screen">
      <div>
        <div className="flex gap-15px">
          <Image
            src="/images/website-logo.png"
            alt="src.image"
            width={500}
            height={500}
            className="w-[70px] h-[70px]"
          />

          <div className="flex gap-10px">
            <Navbar bg="none" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    as={Link}
                    href="/Home"
                    className="text-white hover:!text-orange-300 duration-300"
                  >
                    Home
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    href="/About"
                    className="text-white hover:!text-orange-300 duration-300"
                  >
                    About
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    href="/Contact"
                    className="text-white hover:!text-orange-300 duration-300"
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
