import React, { useState } from "react";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import {Button} from "@mui/material";
import Trip from "./Trip";

export default function Overview(props) {
  const [month, setMonth] = useState("");

  const { data: trips, loading: loadingTrips, error: errorTrips } = useFetch(
    "trips"
  );
  const months = ["Idle", "Jan", "Feb", "March", "April", "Mai", "June"];

  // if month selected then filter the trips from month === month
  const filteredTrips = month
    ? trips.filter((t) => t.startTrip[1] === parseInt(month))
    : trips;

  // if error then throw the errror
  if (errorTrips) throw errorTrips;
  if (loadingTrips) return <Spinner />;
  // shorthand for react fragment
  return (
    <>
      <div>
        <Header />
          <main>
            <section id="filters">
              <label htmlFor="month">Filter by Month:</label>
              <select
                id="month"
                value={month} // controlled component
                onChange={(e) => {
                  //debugger;
                  setMonth(e.target.value);
                }}
              >
                <option value="">All Months</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">Mai</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              {month && (
                <h2>
                  Found {filteredTrips.length}
                  {filteredTrips.length > 1 ? " trips" : " trip"} for the month of
                  {" " + months[month]}
                </h2>
              )}
            </section>
            <section id="products">{filteredTrips.map((t) => {return <Trip trip={t} plannedTrips={props.plannedTrips}
              setPlannedTrips={props.setPlannedTrips} removeTripFromTripList={props.removeTripFromTripList}/>})}</section>
            {/*<button onClick={}>Add new Trip</button>*/}
        </main>
        <Button variant="contained" href="/createTrip">Create New Trip</Button>
      </div>
      <Footer />
    </>
  );
}
