import {Route, Routes} from "react-router-dom";
import Overview from "./Overview";
import MyTripList from "./MyTripList";
import CreateTrip from "./CreateTrip";

export default function App() {
  return (
    <Routes>
      <Route exact path="/home" element={<Overview />} />
      <Route exact path="/" element={<Overview />} />
      <Route exact path="/tripList" element={<MyTripList />}/>
      <Route exact path="/createTrip" element={<CreateTrip  />}/>
    </Routes>
  );
}
