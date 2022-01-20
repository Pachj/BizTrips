import {Route, Routes} from "react-router-dom";
import Overview from "./Overview";
import {useState} from "react";
import MyTripList from "./MyTripList";
import CreateTrip from "./CreateTrip";

// TODO: Trip component

export default function App() {
  const [plannedTrips, setPlannedTrips] = useState([]);

  const renderTrip = (t, addTripButton)  => {
    return (
      <div className="product" key={t.id}>
        <figure>
          <div>
            <img src={"images/items/" + t.id + ".jpg"} alt="name " />
          </div>
          <figcaption>
            <a href="#. . . ">{t.title}</a>
            <div>
              <span>
                {t.startTrip[2] + "-" + t.startTrip[1] + "-" + t.startTrip[0]}
              </span>
            </div>
            <p>{t.description}</p>
            <div>
              {addTripButton === true ? (
                <button type="button" onClick={() => {setPlannedTrips([...plannedTrips, t])}}>
                  Add to my Triplist
                </button>
              ) : (
                <button type="button" onClick={() => {removeTripFromTripList(t)}}>
                  Remove from my Triplist
                </button>
              )}
            </div>
          </figcaption>

        </figure>

      </div>
    );
  }

  const removeTripFromTripList = (t) => {
    let tmpPlannedTrips = [];

    plannedTrips.forEach((tt) => {
      if (tt.id !== t.id) {
        tmpPlannedTrips.push(tt);
      }
    })

    setPlannedTrips(tmpPlannedTrips);
  }

  return (
    <Routes>
      <Route exact path="/home" element={<Overview renderTrip={renderTrip}/>} />
      <Route exact path="/" element={<Overview renderTrip={renderTrip} />} />
      <Route exact path="/tripList" element={<MyTripList plannedTrips={plannedTrips} setPlannedTrips={setPlannedTrips} renderTrip={renderTrip} />}/>
      <Route exact path="/createTrip" element={<CreateTrip  />}/>
    </Routes>
  );
}
