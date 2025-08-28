import React from "react";
import { FaGithub, FaTelegramPlane, FaFileAlt } from "react-icons/fa";
import "./SocialSidebar.css";

function SocialSidebar() {
  return (
    <div className="socials-sidebar">
      <ul>
        <li>
          <a href="/RESUME.pdf" target="_blank" rel="noreferrer">
            <FaFileAlt />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rrkk000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://t.me/pemceoomqc" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
        </li>
      </ul>
      <div className="line"></div>
    </div>
  );
}

export default SocialSidebar;