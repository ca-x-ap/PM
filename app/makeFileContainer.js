"use strict";

const makeFileContainer = ({ name, size, link }) => {
	const //
		// If this link
		href = link ? `href="${link}"` : "",
		download = link ? `download="${name}"` : "",
		// Make tag classes
		NclassName = 'class="file_name"',
		SclassName = 'class="file_size"',
		// Make value
		namevalue = name || "Empty",
		sizevalue = size || "...",
		// Make html
		namehtml = `<a ${href} ${download} ${NclassName}">${namevalue}</a>`,
		sizehtml = `<i ${SclassName}> ${sizevalue}KB</i>`,
		html = namehtml + sizehtml,
		// Create container
		File = document.createElement("div");

	File.classList = "file-container-element";
	File.insertAdjacentHTML("beforeend", html);

	// If this link, do not add handler
	if (handler_onFileButton && !link) {
		File.addEventListener("click", handler_onFileButton, false);
	}

	return File;
};

export { makeFileContainer };
