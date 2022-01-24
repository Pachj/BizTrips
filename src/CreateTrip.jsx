import {Button, Modal, TextField} from "@mui/material";
import React, {useState} from "react";
import {saveTrip} from "./services/saveTrip";
import BasicDatePicker from "./BasicDatePicker";
import {format} from "date-fns";
import Header from "./Header";
import Footer from "./Footer";
import BasicModal from "./BasicModal";

export default function CreateTrip() {
  const [tripTitle, setTripTitle] = useState('');
  const [tripDescription, setTripDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [formattedStartDate, setFormattedStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [formattedEndDate, setFormattedEndDate] = useState('');

  const [confirmationScreen, setConfirmationScreen] = useState(false);

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

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
          <h2 className={'fullWidth'}>Summary</h2>
          <table>
            <tr>
              <td><h4>Trip title</h4></td>
              <td><p className={'sumValue'}>{tripTitle}</p></td>
            </tr>
            <tr>
              <td><h4>Trip description</h4></td>
              <td><p className={'sumValue'}>{tripDescription}</p></td>
            </tr>
            <tr>
              <td><h4>Trip start date</h4></td>
              <td><p className={'sumValue'}>{formattedStartDate}</p></td>
            </tr>
            <tr>
              <td><h4>Trip end date</h4></td>
              <td><p className={'sumValue'}>{formattedEndDate}</p></td>
            </tr>
          </table>
          <div className={'buttonBox fullWidth buttonBoxMargin'}>
            <Button variant={'contained'} onClick={() => setConfirmationScreen(false)}>back</Button>
            <Button variant={'contained'} onClick={() => {
              saveTrip(tripTitle, tripDescription, formattedStartDate, formattedEndDate).then(() => {
                handleOpenModal();
              })
            }}>confirm</Button>
          </div>
          <BasicModal modalOpen={modalOpen} handleCloseModal={handleCloseModal} text="The trip has been saved."/>
        </div>
      )}
      <Footer />
    </div>
  )

}
