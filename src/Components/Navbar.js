import React from "react";
import { Link } from "react-router-dom";
import img2 from "./../Images/2.PNG";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bb-solid-gray p-0">
        <div className="collapse navbar-collapse d-flex justify-content-center" >
          <ul className="navbar-nav c-white">
            <li className="nav-item active">
              <Link className="nav-link" to="/Home">
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/Images">
                Images
              </Link>
            </li>
            <li className="nav-item contact">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <h6 className="h-6 text-light">Sanober</h6>
          <img
              src={img2}
              alt="2"
              className="rounded-circle customImg mt-2"
            />
      </nav>
      <h3 className="h3">Setting</h3>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Contact">
            Profile
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About">
            Notification
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Images">
            Privacy
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">
            Number
          </a>
        </li>
      </ul>
    </>
  );
}
export default Navbar;
