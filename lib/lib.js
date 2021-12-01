"use strict";

function deepClone(data) {
	return JSON.parse(JSON.stringify(data));
}

function GetPa(el, int = 1) {
	let Pa = el.parentElement;
	for (; int > 1; int--) Pa = GetPa(Pa);
	return Pa;
}

function getRandomInt(min = 0, max = 9) {
	const //
		math = Math.random(),
		mathI = math * (max - min),
		floor = Math.floor(mathI),
		minMFR = floor + min;
	return minMFR;
}

async function readFile(file) {
	return await file.text();
}

function makeFileUrl(text) {
	const //
		file_text = JSON.stringify(text),
		mime_type = "application/json" || "text/plain",
		file = new Blob([file_text], { type: mime_type }),
		file_url = URL.createObjectURL(file);
	URL.revokeObjectURL(File);
	return file_url;
}
