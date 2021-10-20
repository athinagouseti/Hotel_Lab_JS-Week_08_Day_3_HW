

export const getBookings = () => {
    return fetch('http://localhost:5000/api/bookings')
    .then(res => res.json())
}

export const postBooking = (banana) => {
    return fetch('http://localhost:5000/api/bookings', {
    method: 'POST',
    body: JSON.stringify(banana),
    headers: { 'Content-type': 'application/json' }
 })
 .then(res => res.json())
}

export const deleteBooking = (id) => {
    return fetch('http://localhost:5000/api/bookings/' + id, {
        method: 'DELETE'
    })
};