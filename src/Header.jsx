import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home" >
              <img
                width="150px"
                alt="Carved Rock Fitness"
                src="/images/logo.png"
              />
            </Link>
          </li>
          <li>
            {<Link to={'/tripList'}>My Trips</Link>}
          </li>
        </ul>
      </nav>
    </header>
  );
}
