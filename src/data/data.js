var library = [
    {
        id: 1,
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        id: 2,
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        id: 3,
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }]

var header = ["#", "Author", "Title", "Reading Status"]
var apiDataHeader = ["#", "User#", "Title", "Completed"]
const city = [
    {
        label: "Ahmedabad",
        value: "ahmedabad",
    },
    {
        label: "Pune",
        value: "pune",
    },
    {
        label: "Mumbai",
        value: "mumbai",
    },
    {
        label: "Baroda",
        value: "baroda",
    },
    {
        label: "Delhi",
        value: "delhi",
    }
];
module.exports = { library, header, apiDataHeader, city }