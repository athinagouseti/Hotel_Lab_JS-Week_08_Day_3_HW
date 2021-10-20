use hotel;
db.dropDatabase();

db.bookings.insertMany([
    { 
        guestName: 'Calum',
        guestEmail: 'calum@outlook.com',
        checkedInStatus: "Yes"
    },
    {
        guestName: 'Athina',
        guestEmail: 'athina@outlook.com',
        checkedInStatus: "No"
    },
    {
        guestName: 'Craig',
        guestEmail: 'craig@outlook.com',
        checkedInStatus: "No"
    },
    {
        guestName: 'Steve',
        guestEmail: 'steve@outlook.com',
        checkedInStatus: "Yes"
    }
])