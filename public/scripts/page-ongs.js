//tipos de dados 
//STRING ""
//NUMBER 01
//OBJECT {}
//BOOLEAN TRUE OR false
//ARRAY []
//CRIA Mapas
const map = L.map('mapid').setView([-29.1027592,-49.6343582], 16);

//CRIA E ADICIONA TITULOS
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

//CRIA ÍCONES
const icon = L.icon({
    iconUrl: "/images/check2.png",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


function addMarker({id, name, lat, lng}) {


    //CRIAR POPUP
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minheight: 240

    }).setContent(`${name} <a href="/ong?id=${id}"> 
                <img src="/images/arrow-white.svg" 
                </a>`)

    //CRIA E ADICIONA MARCAÇÃO
    L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const ongsSpan = document.querySelectorAll('.ongs span')

ongsSpan.forEach( span => {
    const ong = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(ong)
})