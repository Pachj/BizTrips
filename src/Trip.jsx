import {useState} from "react";

export default function Trip(props) {
  const [addTripButton, setAddTripButton] = useState(props.addTripButton === undefined);

  return (
    <div className="product" key={props.trip.id}>
      <figure>
        <div>
          <img src={"images/items/" + props.trip.id + ".jpg"} alt="name " />
        </div>
        <figcaption>
          <a href="#. . . ">{props.trip.title}</a>
          <div>
              <span>
                {props.trip.startTrip[2] + "-" + props.trip.startTrip[1] + "-" + props.trip.startTrip[0]}
              </span>
          </div>
          <p>{props.trip.description}</p>
          <div>
            {addTripButton === true ? (
              <button type="button" onClick={() => {
                props.setPlannedTrips([...props.plannedTrips, props.trip]);
                setAddTripButton(false);
              }}>
                Add to my Triplist
              </button>
            ) : (
              <button type="button" onClick={() => {
                props.removeTripFromTripList(props.trip)
                setAddTripButton(true);
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
