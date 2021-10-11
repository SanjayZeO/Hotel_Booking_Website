let urlParams = new URLSearchParams(window.location.search);
const API_URL = "https://travel-advisor.p.rapidapi.com/";
const tripAdvisorHost = "travel-advisor.p.rapidapi.com";
const tripAdvisorKey = "587e9dcd6bmsh1a38eb93cd40371p18b15fjsnaaed08229728";
const PRICE_PER_ROOM = 1000;

/*  Booking form, according to the dates, number of adults and total price */
let updatePrice = () => {
    let adultElement = document.getElementById("adult");
    let totalPriceElement = document.getElementById("price");
    let toDateElement = document.getElementById("toDate");
    let fromDateElement = document.getElementById("fromDate");

    let toDateValue = new Date(toDateElement.value);
    let fromDateValue = new Date(fromDateElement.value);

    toDateElement.min = fromDateElement.value;

    let days = (toDateValue - fromDateValue)/(24*60*60*1000);
    
    if(adultElement.value && toDateElement.value && fromDateElement.value)
        totalPriceElement.value = "Rs. " + parseInt(adultElement.value)*PRICE_PER_ROOM*days;
    else
        totalPriceElement.value = "Rs.0";   

}

