import React from "react";
import BookingListItem from "./BookingListItem";
import './BookingList.css';

const BookingList = ({bookings, removeBooking }) => {
 
    const bookingItems = bookings?.map((booking, index) => {
        return <BookingListItem booking={booking} key={index} removeBooking={removeBooking}/>
    })
    return(
        <div id="bookings-list">
            <h2>Bookings</h2>
            <p>
                {bookingItems}
            </p>
        </div>

    )
};

export default BookingList;