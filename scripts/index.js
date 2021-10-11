//Trip Advisor API URL, host and key are stored in const variables
const API_URL = "https://travel-advisor.p.rapidapi.com/";
const tripAdvisorHost = "travel-advisor.p.rapidapi.com";
const tripAdvisorKey = "587e9dcd6bmsh1a38eb93cd40371p18b15fjsnaaed08229728";



let viewMore = () => {
    let viewMoreButtonElement = document.getElementById("view-more-button");
    if (viewMoreButtonElement.innerText == "View More") {
        document.getElementById("view-more-city-cards").style.display = "block";
        viewMoreButtonElement.innerText = "View Less";
    }
    else {
        document.getElementById("view-more-city-cards").style.display = "none";
        viewMoreButtonElement.innerText = "View More";
    }
}
