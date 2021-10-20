import React from "react";
import { deleteBooking } from "./BookingService";
// import {removeBooking} from "../containers/BookingContainer"

const BookingListItem = ({booking, removeBooking }) => {

    console.log(booking);
    const handleDelete = () => { 
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id)
        })
    }

    return(
        <div>
            <li>  
                <p>{booking.guestName}</p>
                <p>{booking.guestEmail}</p>
                <p>{booking.checkedInStatus}</p>
            </li>
            <button onClick={handleDelete}> Delete Booking</button>
        </div>
    )
};

export default BookingListItem;