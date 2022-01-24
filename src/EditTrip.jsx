import {useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";
import {getCertainTrip} from "./services/getCertainTrip";
import {Button, TextField} from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";
import {deleteTrip} from "./services/deleteTrip";
import {updateTrip} from "./services/updateTrip";
import Header from "./Header";
import BasicModal from "./BasicModal";
import Footer from "./Footer";

export default function EditTrip(props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [tripTitle, setTripTitle] = useState('');
  const [tripDescription, setTripDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [updateModalOpen, setUpdateModalOpen] = React.useState(false);
  const handleUpdateOpenModal = () => setUpdateModalOpen(true);
  const handleUpdateCloseModal = () => setUpdateModalOpen(false);

  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const handleDeleteOpenModal = () => setDeleteModalOpen(true);
  const handleDeleteCloseModal = () => setDeleteModalOpen(false);

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
          <Button variant="contained" color="error" onClick={() => {
            deleteTrip(searchParams.get('id')).then(() => {
              handleDeleteOpenModal();
            })
          }}>Delete trip</Button>
          <Button variant="contained" onClick={() => {
            updateTrip(searchParams.get('id'), tripTitle, tripDescription, startDate, endDate).then(() => {
              handleUpdateOpenModal();
            })
          }}>Save changes</Button>
        </div>
        <BasicModal modalOpen={updateModalOpen} handleCloseModal={handleUpdateCloseModal} text="The trip has been updated."/>
        <BasicModal modalOpen={deleteModalOpen} handleCloseModal={handleDeleteCloseModal} text="The trip has been deleted."/>
      </div>
      <Footer />
    </>
  )
}
