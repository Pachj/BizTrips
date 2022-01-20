import {Route, Routes} from "react-router-dom";
import Overview from "./Overview";
import {useState} from "react";
import MyTripList from "./MyTripList";
import CreateTrip from "./CreateTrip";

export default function App() {
  const [plannedTrips, setPlannedTrips] = useState([]);

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
      <Route exact path="/home" element={<Overview plannedTrips={plannedTrips}
        setPlannedTrips={setPlannedTrips} removeTripFromTripList={removeTripFromTripList}/>} />
      <Route exact path="/" element={<Overview plannedTrips={plannedTrips}
        setPlannedTrips={setPlannedTrips} removeTripFromTripList={removeTripFromTripList}/>} />
      <Route exact path="/tripList" element={<MyTripList plannedTrips={plannedTrips}
                                                         setPlannedTrips={setPlannedTrips} removeTripFromTripList={removeTripFromTripList} />}/>
      <Route exact path="/createTrip" element={<CreateTrip  />}/>
    </Routes>
  );
}
