import { handler_onload } from "./Handlers.js";
import { handler_onDropFiles } from "./Handlers.js";
import { handler_onSearchInput } from "./Handlers.js";
import { handler_onBtnAddRow } from "./Handlers.js";
import { handler_onBtnCreateFile } from "./Handlers.js";
import { handler_onBtnDeleteTable } from "./Handlers.js";
import { handler_onBtnDeleteFiles } from "./Handlers.js";
import { handler_onHideValueInput } from "./Handlers.js";
import { handler_onEditingValueInput } from "./Handlers.js";

(() => {
	// Add handlers to elements
	const //
		get = (str) => document.querySelector(str),
		ev = (obj, fu, ev = "click") => obj.addEventListener(ev, fu, false),
		file = get(".files__inp-in"),
		create = get(".files__btn-create"),
		delFiles = get(".files__btn-delete"),
		search = get(".control__btn-search"),
		addRow = get(".control__btn-add"),
		delTable = get(".control__btn-delete-table"),
		hideVal = get(".control__btn-hide"),
		edit = get(".control__btn-edit");

	ev(window, handler_onload, "load");
	ev(file, handler_onDropFiles, "change");
	ev(search, handler_onSearchInput, "keyup");
	ev(addRow, handler_onBtnAddRow);
	ev(create, handler_onBtnCreateFile);
	ev(delTable, handler_onBtnDeleteTable);
	ev(delFiles, handler_onBtnDeleteFiles);
	ev(hideVal, handler_onHideValueInput, "change");
	ev(edit, handler_onEditingValueInput, "change");
})();
