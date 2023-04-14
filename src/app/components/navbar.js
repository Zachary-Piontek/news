"use client";

import ".././globals.css";
import { useState } from "react";
import Image from "next/image";
import NewsLogo from "../NewsLogo.png";
import Hamburger from "../menu.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={NewsLogo} alt="News Logo" width={50} height={50} />
      </div>
      <ul className={`menu-list ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sports">Sports</a>
        </li>
        <li>
          <a href="/business">Business</a>
        </li>
        <li>
          <a href="/lifestyle">Lifestyle</a>
        </li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        <Image src={Hamburger} alt="Hamburger Menu" width={40} height={40} />
      </button>
    </nav>
  );
}
