import React, { useState, useEffect } from 'react';
import BookingList from '../components/BookingList';
import BookingDetail from '../components/BookingDetail';
import BookingForm from '../components/BookingForm';
import { deleteBooking } from '../components/BookingService';
import './BookingContainer.css';



const BookingsContainer = () => {

    const [allBookings, setAllBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const fetchAllBookings = () => {
        fetch("http://localhost:5000/api/bookings")
        .then(res => res.json())
        .then(data => setAllBookings(data))
    }

    useEffect(() => {
        fetchAllBookings()
    }, [])

    const onBookingSelected = function(booking){
        setSelectedBooking(booking)
    };

    const addBooking = (booking) => {
        const temp =  allBookings?.map(s => s)
        temp.push(booking)
        setAllBookings(temp)
    };

    const removeBooking = (id) => {
        console.log("id", id);
        const temp = allBookings.map(s => s)
        const indexToDel = temp.map(s => s._id).indexOf(id);
        console.log(indexToDel);

        temp.splice(indexToDel, 1)
        setAllBookings(temp)
    }

    return (
        <div id="container" >
            <BookingForm addBooking={addBooking}  />
            <BookingList bookings={allBookings} removeBooking={removeBooking} />
            {selectedBooking ?<BookingDetail booking={selectedBooking}  /> :null }
            
        </div>
    )

};


export default BookingsContainer;