import Header from "./Header";
import Trip from "./Trip";
import React, {useEffect, useState} from "react";
import {getTripList} from "./services/getTripList";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import Footer from "./Footer";

export default function MyTripList() {
  const [tripListIds, setTripListIds] = useState([]);

  const { data: trips, loading: loadingTrips, error: errorTrips } = useFetch(
    "trips"
  );

  useEffect(() => {
      getTripList().then((trips) => {
        setTripListIds(trips.trips);
      });
    },
    [])

  // if error then throw the errror
  if (errorTrips) throw errorTrips;
  if (loadingTrips) return <Spinner />;
  return (
    <>
      <Header />
      <main>
        {tripListIds.length === 0 ? (<h2>You have no trips on you're trip list</h2>) :
          (<section id="products">{trips.filter((trip) => {return tripListIds.includes(trip.id)}).map((t) => {
          return <Trip key={`trip-${t.id}`} trip={t} addTripButton={!tripListIds.includes(t.id)}/>})}
        </section>)}
      </main>
      <Footer />
    </>
  )
}
