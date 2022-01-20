import {Button, TextField} from "@mui/material";
import React, {useState} from "react";
import {saveTrip} from "./services/saveTrip";
import BasicDatePicker from "./BasicDatePicker";
import {format} from "date-fns";

export default function CreateTrip() {
  const [tripTitle, setTripTitle] = useState('');
  const [tripDescription, setTripDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [formattedStartDate, setFormattedStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [formattedEndDate, setFormattedEndDate] = useState('');

  const [confirmationScreen, setConfirmationScreen] = useState(false);

  const setStartDates = (dateFnsDate) => {
    setStartDate(dateFnsDate);
    setFormattedStartDate(format(dateFnsDate, 'yyyy-MM-dd'))
  }

  const setEndDates = (dateFnsDate) => {
    setEndDate(dateFnsDate);
    setFormattedEndDate(format(dateFnsDate, 'yyyy-MM-dd'));
  }

  return (
    <>
      {confirmationScreen === false ? (
        <div>
          <TextField label={'Trip title'} variant={'outlined'} value={tripTitle}
                     onChange={(e) => setTripTitle(e.target.value)}/>
          <TextField label={'Trip description'} variant={'outlined'} value={tripDescription}
                     onChange={(e) => setTripDescription(e.target.value)}/>
          <BasicDatePicker value={startDate} setValue={setStartDates} label="Start date" />
          <BasicDatePicker value={endDate} setValue={setEndDates} label="End date" />
          <Button variant={'outlined'} onClick={() => setConfirmationScreen(true)} disabled={ !tripTitle || !tripDescription ||
            !startDate || !endDate }>continue</Button>
        </div>
      ) : (
        <div>
          <p>{tripTitle}</p>
          <p>{tripDescription}</p>
          <p>{formattedStartDate}</p>
          <p>{formattedEndDate}</p>
          <div>
            <Button variant={'outlined'} onClick={() => setConfirmationScreen(false)}>back</Button>
            <Button variant={'outlined'} onClick={() => saveTrip(tripTitle, tripDescription, formattedStartDate, formattedEndDate)}>confirm</Button>
          </div>
        </div>
      )}
    </>
  )

}
