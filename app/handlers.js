import { appendGroupInStore } from '/app/store.js';
import { getGroupsInStore } from '/app/store.js';
import { toPascalCase } from '/lib/lib.js';
import { makeFileUrl } from '/lib/lib.js';

export class Menu {
	handleEvent(event) {
		const method = 'on' + toPascalCase(event.type);
		this[method](event);
	}

	onFileDrop(event) {
		const files = [...event.detail.value];
		files.forEach(async file => {
			const fileText = await file.text();
			const item = JSON.parse(fileText);
			const isGroups = item instanceof Array;
			isGroups
				? item.forEach(group => appendGroupInStore(group))
				: appendGroupInStore(item);
		});
	}

	onMenuFileGet() {
		const fileText = getGroupsInStore();
		const fileURL = makeFileUrl(fileText);
		window.open(fileURL);
	}
}
