import('/components/PageLayout.js');
import('/components/GroupsList.js');
import('/components/GroupItem.js');
import('/components/ItemItem.js');
import { getGroupsInStore } from '/app/store.js';

class ViewPage extends HTMLEl {
	get html() { return `
		<groups-list class="groups-list"></groups-list>
		<group-item class="group-item"></group-item>
		<item-item class="item"></item-item>
	`}

	get css() { return `
		:host {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: 1rem;
		}
	`}

	get props() { return {
		groups: {
			transformer: ({ groups }) => groups || [],
			observer: ({ groups }) => this.groupsListEl.groups = groups
		},
		openGroup: {
			observer: ({ openGroup }) => openGroup
				? (this.groupItemEl.options = openGroup)
				: onError('ViewPage, cant update group options: ', openGroup)
		},
		openItem: {
			observer: ({ openItem }) => openItem
				? (this.itemEl.options = openItem)
				: onError('ViewPage, cant update item options: ', openItem)
		}
	}}

	constructor() {
		super();

		this.groupsListEl.addEventListener('group selected', event => {
			const groupName = event.detail.value;
			const groups = this.groups;
			const group = groups.find(group => group.title === groupName);
			this.openGroup = group;
		});

		this.groupItemEl.addEventListener('item selected', event => {
			const itemName = event.detail.value;
			const items = this.openGroup.items;
			const item = items.find(item => item.title === itemName);
			this.openItem = item;
		});
	}

	connectedCallback() {
		this.update();
	}

	get getEls() { return [
		'.groups-list',
		'.group-item',
		'.item',
	]}


	update() {
		this.groups = getGroupsInStore();
	}
}

customElements.define(ViewPage.nameIs, ViewPage);
