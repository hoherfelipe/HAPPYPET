function saveOng(db, ong) {
	return db.run(`
        INSERT INTO ong(
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instruction,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "${ong.lat}",
            "${ong.lng}",
            "${ong.name}",
            "${ong.about}",
            "${ong.whatsapp}",
            "${ong.images}",
            "${ong.instruction}",
            "${ong.opening_hours}",
            "${ong.open_on_weekends}"
        );
    `);
}

module.exports = saveOng;