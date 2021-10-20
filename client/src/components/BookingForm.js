import React, { useState } from "react";
import { postBooking } from './BookingService';
import './BookingForm.css';

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({})
    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })
    }

    return (
        <form onSubmit={onSubmit} id="booking-form">
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="guestName">Name:</label>
                <input onChange={onChange} type="text" id="guestName" required/> 
            </div>
            <div className="formWrap">
                <label htmlFor="guestEmail">Email:</label>
                <input onChange={onChange} type="text" id="guestEmail" required/> 
            </div>
            <div className="formWrap">
                <label htmlFor="checkInStatus">Checked in?:</label>
                <input onChange={onChange} type="text" id="checkInStatus"/> 
            </div>
            
            <input type="submit" value="Save" id="save"/>


        </form>

    )


}

export default BookingForm;