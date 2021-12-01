"use strict";

const getTableDataBase = ({ place }) => {
	const //
		Container = place,
		Rows = Container.querySelectorAll(".row"),
		new_db = [];

	Rows.forEach((Row) => {
		const Cells = Row.querySelectorAll(".cell");
		const new_object = {};
		Cells.forEach((Cell) => {
			const //
				valOf = (str) => Cell.querySelector(str).value,
				// Get name & value
				inp_name = valOf(".cell__name"),
				inp_value = valOf(".cell__value");
			// Add make object
			new_object[inp_name] = inp_value;
		});
		// Add new object in array
		new_db.push(new_object);
	});

	return new_db;
};

export { getTableDataBase };
