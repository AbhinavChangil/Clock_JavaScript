

function updateTime(){
    var DateTime = new Date();
    var date = DateTime.toLocaleDateString();
    var time = DateTime.toLocaleTimeString();
    document.getElementById("cont1").innerHTML = `<h1> ${time} on ${date} </h1>`;
    }
    setInterval(updateTime, 1000);
    
    


    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}


