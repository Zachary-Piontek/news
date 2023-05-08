"use client";

import ".././globals.css";
import { useState } from "react";
import Image from "next/image";
import NewsLogo from "../NewsLogo.png";
import Hamburger from "../menu.png";

const WEATHER = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${WEATHER}&q=${location}&aqi=no`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  console.log(location);

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="header">
          <Image src={NewsLogo} alt="News Logo" width={60} height={60} />
          <h1>The Philippine Sun</h1>
          <form onSubmit={handleFormSubmit}>
            <h3>Weather</h3>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          <div className="weather-info">
            {data && (
              <>
                <div>
                  <h3>{data.location.name}</h3>
                </div>
                <div>
                  <p>{data.current.condition.text}</p>
                </div>
                <div>
                  <p>{data.current.temp_c}°C</p>
                </div>
                <div>
                  <img src={data.current.condition.icon} alt="Weather Icon" />
                </div>
                <div>
                  <p>Feels like {data.current.feelslike_c}°C</p>
                </div>
              </>
            )}
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <Image
              src={Hamburger}
              alt="Hamburger Menu"
              width={40}
              height={40}
            />
          </button>
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
          <li>
            <a href="/visayas">Visayas</a>
          </li>
          <li>
            <a href="/cebu">Cebu</a>
          </li>
          <li>
            <a href="/danao">Danao City</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
