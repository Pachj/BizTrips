import Header from "./Header";

export default function MyTripList(props) {
  return (
    <>
      <Header />
      <main>
        <section id="products">{props.plannedTrips.map((t) => {return props.renderTrip(t, false)})}</section>
      </main>
    </>
  )
}
