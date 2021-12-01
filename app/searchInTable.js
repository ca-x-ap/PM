"use strict";

/**
 * @param {String} query
 * @param {Object HTML} Container
 */
const searchInTable = ({ query = "", Container = document }) => {
	const Rows = Container.querySelectorAll(".row");

	Rows.forEach((Row) => {
		const //
			tags = Row["attr-tag"].toLocaleLowerCase(),
			query_low = query.toLocaleLowerCase(),
			bool = tags.includes(query_low);

		bool || (Row.style.display = "none"); // false
		bool && (Row.style.display = ""); // true
	});
};

export { searchInTable };
