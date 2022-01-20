import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {saveTrip} from "./services/saveTrip";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function CreateTrip(props) {
  const [tripTitle, setTripTitle] = useState('');
  const [tripDescription, setTripDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [confirmationScreen, setConfirmationScreen] = useState(false);

  return (
    <>
      {confirmationScreen === false ? (
        <div>
          <TextField label={'Trip title'} variant={'outlined'} value={tripTitle}
                     onChange={(e) => setTripTitle(e.target.value)}/>
          <TextField label={'Trip description'} variant={'outlined'} value={tripDescription}
                     onChange={(e) => setTripDescription(e.target.value)}/>
          <TextField type={'date'} variant="outlined" value={startDate}
                     onChange={(e) => setStartDate(e.target.value)}/>
          <TextField type={'date'} variant="outlined" value={endDate}
                     onChange={(e) => setEndDate(e.target.value)}/>
          <Button variant={'outlined'} onClick={() => setConfirmationScreen(true)} disabled={ !tripTitle || !tripDescription ||
            !startDate || !endDate }>continue</Button>
        </div>
      ) : (
        <div>
          <p>{tripTitle}</p>
          <p>{tripDescription}</p>
          <p>{startDate}</p>
          <p>{endDate}</p>
          <div>
            <Button variant={'outlined'} onClick={() => setConfirmationScreen(false)}>back</Button>
            <Button variant={'outlined'} onClick={() => saveTrip(tripTitle, tripDescription, startDate, endDate)}>confirm</Button>
          </div>
        </div>
      )}
    </>
  )

}
