const endDate = "12 Oct 2023 09:15 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff < 0) return;

    
    // Convert into Days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

}
// initial call
clock();

/*
    * 1 day = 24 hours
    * 1 hour = 60 minutes
    * 60 miutes = 3600 seconds
*/


setInterval(
    () => {
        clock()
    },
    1000
)