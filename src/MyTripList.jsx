import Header from "./Header";
import Trip from "./Trip";
import React from "react";

export default function MyTripList(props) {
  return (
    <>
      <Header />
      <main>
        <section id="products">{props.plannedTrips.map((t) => {
          return <Trip trip={t} plannedTrips={props.plannedTrips} setPlannedTrips={props.setPlannedTrips}
            removeTripFromTripList={props.removeTripFromTripList} addTripButton={false}/>})}
        </section>
      </main>
    </>
  )
}
