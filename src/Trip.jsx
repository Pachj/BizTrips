import {useState} from "react";
import {saveTripInTripList} from "./services/saveTripInTripList";
import {removeTripFromTripList} from "./services/removeTripFromTripList";

export default function Trip(props) {
  const [addTripButton, setAddTripButton] = useState(props.addTripButton);

  return (
    <div className="product" key={props.trip.id}>
      <figure>
        <div>
          <img src={"images/items/" + props.trip.id + ".jpg"} alt="name " />
        </div>
        <figcaption>
          <p>{props.trip.title}</p>
          <div>
              <span>
                {props.trip.startTrip[2] + "-" + props.trip.startTrip[1] + "-" + props.trip.startTrip[0]}
              </span>
          </div>
          <p>{props.trip.description}</p>
          <div>
            {addTripButton === true ? (
              <button type="button" onClick={() => {
                saveTripInTripList(props.trip.id).then(() => setAddTripButton(false));
              }}>
                Add to my Triplist
              </button>
            ) : (
              <button type="button" onClick={() => {
                removeTripFromTripList(props.trip.id).then(() => setAddTripButton(true));
              }}>
                Remove from my Triplist
              </button>
            )}
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
