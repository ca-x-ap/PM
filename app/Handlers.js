"use strict";

import { getRandomInt } from "../lib/api.js";
import { GetPa } from "../lib/api.js";
import { GetStor } from "../lib/api.js";
import { AddStor } from "../lib/api.js";
import { DelStor } from "../lib/api.js";
import { DelStorAll } from "../lib/api.js";
import { GetStorAll } from "../lib/api.js";
import { MD5 } from "../lib/MD5.js";
import { readFile } from "../lib/readFile.js";
import { makeFileUrl } from "../lib/makeFileUrl.js";

import { getTableDataBase } from "./getTableDataBase.js";
import { makeFileContainer } from "./makeFileContainer.js";
import { makeTable } from "./makeTable.js";
import { searchInTable } from "./searchInTable.js";

const TableContainer = document.querySelector(".table-wrap");
const FilesListContainer = document.querySelector(".files-list__container");
const FilesOutContainer = document.querySelector(".files-out__container");

function handler_onload() {
	try {
		// Add storage files on page
		GetStorAll().map((file_name) => {
			const //
				file = { name: file_name },
				File = makeFileContainer(file);

			FilesListContainer.append(File);
		});
	} catch (error) {
		console.info("Files in storage do not added on page");
		console.info(error);
	}
}

function handler_onDropFiles() {
	try {
		const files = this.files;

		[...files].forEach(async (file) => {
			const //
				name = file.name,
				text = await readFile(file),
				File = makeFileContainer(file);

			// Add file in storage and page
			AddStor(name, text);
			File && FilesListContainer.append(File);
		});
	} catch (error) {
		console.info("Error in drop file, file is not added");
		console.info(error);
	}
}

function handler_onFileButton() {
	try {
		const //
			file_name = this.querySelector(".file_name").innerText,
			file_text = file_name && GetStor(file_name),
			database = file_text && JSON.parse(file_text),
			Table = database && makeTable({ database }),
			Rows = Table.querySelectorAll(".row");

		// Add table (rows) on page
		Rows.forEach((Row) => TableContainer.append(Row));
	} catch (error) {
		console.info("File table do not added on page");
		console.info(error);
	}
}

function handler_onSearchInput() {
	// Need change this search handler & function
	try {
		const query = {
			query: this.value,
			Container: TableContainer,
		};
		searchInTable(query);
	} catch (error) {
		console.info("Serach is not finished");
		console.info(error);
	}
}

function handler_onBtnCreateFile() {
	try {
		const //
			tableData = { place: TableContainer },
			database = getTableDataBase(tableData);

		if (database.length) {
			const //
				randomName = Math.random().toString(16),
				url = makeFileUrl(database),
				name = prompt("Enter file name") || randomName,
				file = { name: name, link: url },
				File = makeFileContainer(file);

			FilesOutContainer.append(File);
		} else {
			const alertText = "Table is null\n\nPlease, add rows in table";
			alert(alertText);
		}
	} catch (error) {
		console.info("File is not created");
		console.info(error);
	}
}

function handler_onBtnAddRow() {
	try {
		const //
			random = MD5(getRandomInt()),
			name = "Name " + random.substring(0, 5),
			value = random,
			database = [{ [name]: value }],
			// Make table
			Table = makeTable({ database }),
			Rows = Table.querySelectorAll(".row");
		// Add table (rows) on page
		Rows.forEach((Row) => TableContainer.append(Row));
	} catch (error) {
		console.info("Row is not added");
		console.info(error);
	}
}

function handler_onBtnDeleteTable() {
	// Just html = ""
	// Need change this handler
	TableContainer.innerHTML = "";
}

function handler_onBtnDeleteFiles() {
	// Just clear container and storages
	FilesListContainer.innerHTML = "";
	sessionStorage.clear();
	localStorage.clear();
}

function handler_onHideValueInput() {
	// Just toggle class
	// Need change, add, remove
	TableContainer.classList.toggle("tc-s-cell_hide_values");
}

function handler_onEditingValueInput() {
	const //
		bool = this.checked,
		inputs = TableContainer.querySelectorAll("input");

	try {
		if (bool && inputs) {
			inputs.forEach((i) => i.removeAttribute("readOnly"));
			TableContainer.classList.remove("tc-s-cell_no_editing");
		}
		if (!bool && inputs) {
			inputs.forEach((i) => (i.readOnly = true));
			TableContainer.classList.add("tc-s-cell_no_editing");
		}
	} catch (error) {
		console.info("Can not change editing settings");
		console.info(error);
	}
}

function handler_onBtnsAddTableElement() {
	try {
		let NewElement;
		const //
			// Get cell name & value
			get = (str, pa) => pa.querySelector("input.cell__" + str),
			random = MD5(getRandomInt()),
			name = "Name " + random.substring(0, 5),
			value = random,
			getName = (pa) => get("name", pa).value || name,
			getValue = (pa) => get("value", pa).value || value,
			// Get Father
			Pa = GetPa(this, 2),
			// Get cells
			Cells = Pa.querySelectorAll(".cell");

		if (!Cells.length) {
			const //
				cell_name = getName(Pa),
				cell_value = getValue(Pa);
			// Make a new element for page
			NewElement = makeCell({ cell_name, cell_value });
		}

		if (Cells.length) {
			const // Make template
				row_temp = {};
			Cells.forEach((Cell) => {
				const //
					cell_name = getName(Cell),
					cell_value = getValue(Cell);

				// Add cells in template
				row_temp[cell_name] = cell_value;
			});
			// Make a new element for page
			const row = { row_obj: row_temp };
			NewElement = makeRow(row);
		}

		// Add a new element on page
		Pa.insertAdjacentElement("afterend", NewElement);
	} catch (error) {
		console.info("A new element do not added");
		console.info(error);
	}
}

function handler_onBtnsDeleteTableElement() {
	// Just remove Father
	GetPa(this, 2).remove();
}

function handler_autocopy() {
	// !!! Just autoselect
	this.select();
	// document.execCommand("copy");
}

export {
	handler_onload,
	handler_onDropFiles,
	handler_onFileButton,
	handler_onSearchInput,
	handler_onBtnCreateFile,
	handler_onBtnAddRow,
	handler_onBtnDeleteTable,
	handler_onBtnDeleteFiles,
	handler_onHideValueInput,
	handler_onEditingValueInput,
	handler_onBtnsAddTableElement,
	handler_onBtnsDeleteTableElement,
	handler_autocopy,
};
