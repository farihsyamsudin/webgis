// INDEX

var titik0 = L.map('titik0').setView([-7.8014631,110.3626157], 10);
    
var tiles0 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(titik0);

var kalibiru = L.marker([-7.80731, 110.12605]).addTo(titik0);

var kedung = L.marker([-7.7699331,110.12099]).addTo(titik0);

var kaliadem = L.marker([-7.5826409,  110.4477366]).addTo(titik0);

var malioboro = L.marker([-7.7925764,110.3636543]).addTo(titik0);

var borobudur = L.marker([-7.608000, 110.204000]).addTo(titik0);

var prambanan = L.marker([-7.752098, 110.491404]).addTo(titik0);
 
var parangritis = L.marker([-8.021805, 110.321277]).addTo(titik0);

var mundal = L.marker([-7.762679, 110.116155]).addTo(titik0);

var breksi = L.marker([-7.780708, 110.504785]).addTo(titik0);

var heha = L.marker([-7.8486685, 110.47694]).addTo(titik0);

var affandi = L.marker([-7.782713, 110.3942083]).addTo(titik0);

var tamanpelangi = L.marker([-7.7496648, 110.3690804]).addTo(titik0);

var lintangsewu = L.marker([-7.9157944, 110.4344549]).addTo(titik0);

var bbintang = L.marker([-7.8458354,110.477657]).addTo(titik0);

var merapipark = L.marker([-7.6208993,110.4194388]).addTo(titik0);

var sgethuk = L.marker([-7.9428521, 110.4871372]).addTo(titik0);

var gamplong = L.marker([-7.8099138,110.2325711]).addTo(titik0);

kalibiru.bindPopup("<b> Kawasan Wisata Kalibiru </b> <br> <img src='img/kalibiru.jpg' style=''>")

kedung.bindPopup("<b> Kawasan Wisata Air Terjun Kedung Pedut<b>  <br> <img src='img/kedung.jpg' style=''>")

kaliadem.bindPopup("<b> Kawasan Wisata Bunker Kaliadem <b>  <br> <img src='img/kaliadem.jpg' style=''>")

malioboro.bindPopup("<b> Kawasan Wisata Jalan Malioboro<b> <br> <img src='img/malioboro.jpg' style=''>")

borobudur.bindPopup("<b> Kawasan Wisata Candi Borobudur<b> <br> <img src='img/borobudur.jpg' style=''>")

prambanan.bindPopup("<b> Kawasan Wisata Candi Prambanan<b> <br> <img src='img/prambanan.jpeg' style=''>")

parangritis.bindPopup("<b> Kawasan Wisata Pantai Parangritis<b> <br> <img src='img/parangtritis.jpg' style=''>")

mundal.bindPopup("<b> Kawasan Wisata Sungai Mundal<b> <br> <img src='img/mudal.png' style=''>")

breksi.bindPopup("<b> Kawasan Wisata Tebing Breksi<b> <br> <img src='img/breksi.jpeg' style=''>")

heha.bindPopup("<b> Kawasan Wisata Heha Sky View<b> <br> <img src='img/heha.jpg' style=''>")

affandi.bindPopup("<b> Kawasan Wisata Museum Affandi <b> <br> <img src='img/affandi.jpg' style=''>")

tamanpelangi.bindPopup("<b> Kawasan Wisata taman pelangi <b> <br> <img src='img/tpelangi.jpg' style=''>")

lintangsewu.bindPopup("<b> Kawasan Wisata bukit lintang sewu<b> <br> <img src='img/lintangsewu.jpg' style=''>")

bbintang.bindPopup("<b> Kawasan Wisata bukit bintang<b> <br> <img src='img/bbintang.jpg' style=''>")

merapipark.bindPopup("<b> Kawasan Wisata The World Landmarks - Merapi Park Yogyakarta<b> <br> <img src='img/mpark.jpg' style=''>")

sgethuk.bindPopup("<b> Kawasan Wisata Air Terjun Sri Gethuk<b> <br> <img src='img/sgethuk.jpg' style=''>")

gamplong.bindPopup("<b> Kawasan Wisata Desa Wisata Gamplong<b> <br> <img src='img/gamplong.jpg' style=''>")

// // ONCLICK (ONPROJECT)

// var malclick = document.getElementById("malioboro");

// var map = document.getElementById("titik0");

// malioboro.addEventListener("click", function(){
//     malclick.classList.toggle('hidden');
//     map.classList.toggle('-z-10');
// });

// var closem = document.getElementById("close");

// closem.addEventListener("click", function(){
//     malclick.classList.toggle('hidden');
//     map.classList.toggle('-z-10');
// });

