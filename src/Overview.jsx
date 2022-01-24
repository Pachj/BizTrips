import React, {useEffect, useState} from "react";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Trip from "./Trip";
import {getTripList} from "./services/getTripList";

export default function Overview(props) {
  const [month, setMonth] = useState("");
  const [tripListIds, setTripListIds] = useState([]);

  const { data: trips, loading: loadingTrips, error: errorTrips } = useFetch(
    "trips"
  );
  const months = ["Idle", "Jan", "Feb", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];

  // if month selected then filter the trips from month === month
  const filteredTrips = month
    ? trips.filter((t) => t.startTrip[1] === parseInt(month))
    : trips;

  useEffect(() => {
      getTripList().then((trips) => {
        setTripListIds(trips.trips);
      });
    },
    [])

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
              <FormControl>
                <InputLabel id={'monthFilter'}>Filter by Month</InputLabel>
                <Select
                  labelId={'monthFilter'}
                  value={month}
                  onChange={(e) => {
                    //debugger;
                    setMonth(e.target.value);
                  }}
                  defaultValue=""
                  MenuProps={{ disableScrollLock: true }}
                  sx={{width: 200}}
                  variant={'standard'}
                >
                  <MenuItem value="">All Months</MenuItem>
                  <MenuItem value="1">January</MenuItem>
                  <MenuItem value="2">February</MenuItem>
                  <MenuItem value="3">March</MenuItem>
                  <MenuItem value="4">April</MenuItem>
                  <MenuItem value="5">Mai</MenuItem>
                  <MenuItem value="6">June</MenuItem>
                  <MenuItem value="7">July</MenuItem>
                  <MenuItem value="8">August</MenuItem>
                  <MenuItem value="9">September</MenuItem>
                  <MenuItem value="10">October</MenuItem>
                  <MenuItem value="11">November</MenuItem>
                  <MenuItem value="12">December</MenuItem>
                </Select>
              </FormControl>
              {month && (
                <h2>
                  Found {filteredTrips.length}
                  {filteredTrips.length > 1 ? " trips" : " trip"} for the month of
                  {" " + months[month]}
                </h2>
              )}
            </section>
            <section id="products">{filteredTrips.map((t) => {return <Trip key={`trip-${t.id}`} trip={t}
              addTripButton={!tripListIds.includes(t.id)}/>})}</section>
            {/*<button onClick={}>Add new Trip</button>*/}
        </main>
        <div className="centered bottomMargin">
          <Button variant="contained" href="/createTrip">Create New Trip</Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
