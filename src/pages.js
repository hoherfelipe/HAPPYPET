const Database = require('./database/db');
const saveong = require('./database/saveOng');

module.exports = {

    index(req, res) {
        return res.render('index')
    },

    async ong(req, res){

        const id = req.query.id

        try {
            const db  = await Database;
            const results = await db.all(`SELECT * FROM ong WHERE id = "${id}"`);
            const ong = results[0];

			ong.images = ong.images.split(',');
			ong.firstImage = ong.images[0];

            return res.render('ong', { ong: ong[0] })
        } catch (error) {
            console.log(error);
            return res.render('Erro no banco de dados!')
        }

        return res.render('ong')
    },

    async ongs(req, res){
        try {
            const db  = await Database;
            const ong = await db.all("SELECT * FROM ong")
            return res.render('ongs', { ong })
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }  
    },

    createOng(req, res){
        return res.render('createOng')
    }

}