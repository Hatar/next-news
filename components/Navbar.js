import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/feed/1">
                <a className="nav-link active" aria-current="page">
                  Feed
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/eom">
                <a className="nav-link active" aria-current="page">
                  EOM
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://twitter.com/AmineHatar">
                <a className="nav-link active" aria-current="page">
                  Twitter
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
