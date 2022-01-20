import {useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";
import {getCertainTrip} from "./services/getCertainTrip";
import {Button, TextField} from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";
import {deleteTrip} from "./services/deleteTrip";
import {updateTrip} from "./services/updateTrip";

export default function EditTrip(props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [tripTitle, setTripTitle] = useState('');
  const [tripDescription, setTripDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
      getCertainTrip(searchParams.get('id')).then((trip) => {
        setTripTitle(trip.title);
        setTripDescription(trip.description);
        setStartDate(convertDate(trip.startTrip));
        setEndDate(convertDate(trip.endTrip));
      });
    },
    [])

  const convertDate = (date) => {
    return `${date[0]}-${date[1]}-${date[2]}`;
  }

  if (tripTitle === '') return <Spinner />;
  return (
    <div>
      <TextField label={'Trip title'} variant={'outlined'} value={tripTitle}
               onChange={(e) => setTripTitle(e.target.value)}/>
      <TextField label={'Trip description'} variant={'outlined'} value={tripDescription}
               onChange={(e) => setTripDescription(e.target.value)}/>
      <BasicDatePicker value={startDate} setValue={setStartDate} label="Start date" />
      <BasicDatePicker value={endDate} setValue={setEndDate} label="End date" />
      <div>
        <Button variant="contained" color="warning" href="/home">Discard changes</Button>
        <Button variant="contained" onClick={() => updateTrip(searchParams.get('id'), tripTitle, tripDescription, startDate, endDate)}>Save changes</Button>
        <Button variant="contained" color="error" onClick={() => deleteTrip(searchParams.get('id'))}>Delete trip</Button>
      </div>
    </div>
  )
}
