import {Button, TextField} from "@mui/material";
import React, {useState} from "react";
import {saveTrip} from "./services/saveTrip";
import BasicDatePicker from "./BasicDatePicker";
import {format} from "date-fns";
import Header from "./Header";
import Footer from "./Footer";

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
    <div>
      <Header />
      {confirmationScreen === false ? (
        <div className={'centered columnGap rowGap bottomMargin'}>
          <h2 className={'fullWidth'}>Create Trip</h2>
          <div className={'fullWidth'}>
            <TextField error={tripTitle === ''} label={'Trip title'} variant={'outlined'} value={tripTitle}
                     onChange={(e) => setTripTitle(e.target.value)} sx={{width: 230}}/>
          </div>
          <div className={'fullWidth'}>
            <TextField error={tripTitle === ''} label={'Trip description'} variant={'outlined'} value={tripDescription}
                     onChange={(e) => setTripDescription(e.target.value)} sx={{width: 230}}/>
          </div>
          <div className={'fullWidth'}>
            <BasicDatePicker value={startDate} setValue={setStartDates} label="Start date" />
          </div>
          <div className={'fullWidth'}>
            <BasicDatePicker value={endDate} setValue={setEndDates} label="End date" />
          </div>
          <Button variant={'contained'} onClick={() => setConfirmationScreen(true)} disabled={ !tripTitle || !tripDescription ||
            !startDate || !endDate }>continue</Button>
        </div>
      ) : (
        <div className={'centered columnGap bottomMargin'}>
          <div className={'fullWidth'}>
            <p>Trip title: {tripTitle}</p>
          </div>
          <div className={'fullWidth'}>
            <p>Trip description: {tripDescription}</p>
          </div>
          <div className={'fullWidth'}>
            <p>Trip start date: {formattedStartDate}</p>
          </div>
          <div className={'fullWidth'}>
            <p>Trip end date: {formattedEndDate}</p>
          </div>
          <div className={'buttonBox'}>
            <Button variant={'contained'} onClick={() => setConfirmationScreen(false)}>back</Button>
            <Button variant={'contained'} onClick={() => saveTrip(tripTitle, tripDescription, formattedStartDate, formattedEndDate)}>confirm</Button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )

}
