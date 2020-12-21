const options = {
    dragging: false,
    touchzoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//CRIA Mapas
const map = L.map('mapid', options).setView([-29.1027592,-49.6343582], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/check2.png",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popAnchor: [170, 2]
})

//create and add marker
L
.marker([-29.1027592,-49.6343582], { icon })
.addTo(map)


/* image gallery */

function selectImage(event) {
    const button = event.currentTarget

    /** REMOVER TODAS AS CLASSES .ACTIVE */
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active');
    }

    /** SELECIONAR A IMAGEM CLICADA */
    const image = button.children[0]
    const imageContainer = document.querySelector('.ong-details > img')

    /** ATUALIZAR O CONTEINAR DA IMAGE */
    imageContainer.src = image.src

    /** ADICIONAR A CLASSE .ACTIVE PARA ESTE BOTÃO */
    button.classList.add('active')
}