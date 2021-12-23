import { appendGroupInStore } from '/app/store.js';
import { getGroupInStore } from '/app/store.js';
import { getGroupsInStore } from '/app/store.js';

export function onMenuFileUpload() {
	const files = [...this.files];

	files.forEach(async file => {
		const fileText = await file.text();
		const item = JSON.parse(fileText);
		const isGroups = item instanceof Array;
		isGroups
			? item.forEach(group => appendGroupInStore(group))
			: appendGroupInStore(item);
	});
}

export function onMenuFileDownload() {
	const fileText = getGroupsInStore();
	const fileURL = makeFileUrl(fileText);
	window.open(fileURL);
}
