import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

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
            {<Button variant={"contained"} href={'/tripList'}>My Trips</Button>}
          </li>
        </ul>
      </nav>
    </header>
  );
}
