const Database = require('./db.js');
const saveOng = require('./saveOng.js');

Database.then(async db => {
    

    // INSERIR DADOS NA TABELA 
    /*await saveOng(db, {
        lat: "-29.049246",
        lng: "-49.682274",
        name: "ONG LINHA FLORESTA",
        about: "Presta assistência a cães e gatos de rua.",
        whatsapp: "48999709187",
        images: [
            "http://127.0.0.1:5500/images/cachorro1.jpg",
            "http://127.0.0.1:5500/images/cachorro2.jpg"
        ].toString(),
        instruction: "Venha nos fazer uma visita. Adote, ajude, traga amor para a vida destes PETs.",
        opening_hours: "Horário de visitas das 09h até 19h.",
        open_on_weekends: "0"
    })*/


    // *********** CONSULTAR DADOS DA TABELA ***********
    const selectedOng = await db.all("SELECT * FROM ong")
    console.log(selectedOng)

    // *********** CONSULTAR SOMENTE UMA ONG PELO ID ***********
    //const ong = await db.all('SELECT * FROM ong WHERE id = "3"') // basta musar o nome da tabela depois do "where".
    //console.log(ong)

    // *********** PADAR UM DADO DA TABELA ********
   //console.log(await db.run("DELETE FROM ong WHERE id = '4'"))
   //console.log(await db.run("DELETE FROM ong WHERE id = '5'"))

})