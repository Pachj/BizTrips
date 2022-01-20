import {Route, Routes} from "react-router-dom";
import Overview from "./Overview";
import MyTripList from "./MyTripList";
import CreateTrip from "./CreateTrip";
import EditTrip from "./EditTrip";

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Overview />} />
      <Route path="/" element={<Overview />} />
      <Route path="/tripList" element={<MyTripList />}/>
      <Route path="/createTrip" element={<CreateTrip  />}/>
      <Route path="/editTrip" element={<EditTrip  />}/>
    </Routes>
  );
}
