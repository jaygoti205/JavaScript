
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    let Latitude=position.coords.latitude;
    let Longitude=position.coords.longitude;
    document.getElementById("demo").innerHTML = "Latitude: " + Latitude + 
    "<br>Longitude: " + Longitude;
}

