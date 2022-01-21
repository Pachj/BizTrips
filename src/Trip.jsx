import React, {useState} from "react";
import {saveTripInTripList} from "./services/saveTripInTripList";
import {removeTripFromTripList} from "./services/removeTripFromTripList";
import {Button} from "@mui/material";

export default function Trip(props) {
  const [addTripButton, setAddTripButton] = useState(props.addTripButton);

  return (
    <div className="product" key={props.trip.id}>
      <figure>
        <div>
          <img src={props.trip.id <= 3 ? "images/items/" + props.trip.id + ".jpg" : "images/items/placeholder.png"} alt="name " />
        </div>
        <figcaption>
          <p>{props.trip.title}</p>
          <div>
              <span>
                {props.trip.startTrip[2] + "-" + props.trip.startTrip[1] + "-" + props.trip.startTrip[0]}
              </span>
          </div>
          <p>{props.trip.description}</p>
          <div className="buttonBox">
            {addTripButton === true ? (
              <Button variant="contained" onClick={() => {
                saveTripInTripList(props.trip.id).then(() => setAddTripButton(false));
              }}>
                Add to my Triplist
              </Button>
            ) : (
              <Button variant="contained" onClick={() => {
                removeTripFromTripList(props.trip.id).then(() => setAddTripButton(true));
              }}>
                Remove from my Triplist
              </Button>
            )}
            <Button variant="contained" href={`/editTrip?id=${props.trip.id}`}>Edit</Button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
