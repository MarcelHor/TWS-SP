const map = L.map("map").setView([50.76392200517106, 15.048638364608319], 13);
map.setMinZoom(12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
}).addTo(map);

map.locate({setView: true, maxZoom: 17});

function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.circle(e.latlng, radius).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();;
}

function onLocationError(e) {
    alert(e.message);
}

map.on("locationerror", onLocationError);
map.on("locationfound", onLocationFound);


const mapElement = document.getElementById("map");
function toggleZIndex() {
    mapElement.classList.toggle("zIndex");
}
