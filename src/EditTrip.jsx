import {useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";
import {getCertainTrip} from "./services/getCertainTrip";
import {Button, TextField} from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";
import {deleteTrip} from "./services/deleteTrip";
import {updateTrip} from "./services/updateTrip";
import Header from "./Header";

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
    <>
      <Header />
      <div className={'centered columnGap rowGap bottomMargin'}>
        <h2 className={'fullWidth'}>Edit Trip</h2>
        <div className={'fullWidth'}>
          <TextField label={'Trip title'} variant={'outlined'} value={tripTitle}
                 onChange={(e) => setTripTitle(e.target.value)} sx={{width: 230}} />
        </div>
        <div className={'fullWidth'}>
          <TextField label={'Trip description'} variant={'outlined'} value={tripDescription}
                 onChange={(e) => setTripDescription(e.target.value)} sx={{width: 230}} />
        </div>
        <div className={'fullWidth'}>
          <BasicDatePicker value={startDate} setValue={setStartDate} label="Start date" />
        </div>
        <div className={'fullWidth'}>
          <BasicDatePicker value={endDate} setValue={setEndDate} label="End date" />
        </div>
        <div className={'buttonBox'}>
          <Button variant="contained" color="warning" href="/home">Discard changes</Button>
          <Button variant="contained" onClick={() => updateTrip(searchParams.get('id'), tripTitle, tripDescription, startDate, endDate)}>Save changes</Button>
          <Button variant="contained" color="error" onClick={() => deleteTrip(searchParams.get('id'))}>Delete trip</Button>
        </div>
      </div>
    </>
  )
}
