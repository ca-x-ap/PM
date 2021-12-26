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
		db: {
			transformer: ({ db }) => db || []
		},
		openGroups: {
			transformer: ({ openGroups }) => openGroups || [],
			observer: ({ openGroups }) => this.groupsListEl.groups = openGroups
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
		const groups = getGroupsInStore();
		const isGroupsValidArray = groups instanceof Array && groups.length > 0;
		if (isGroupsValidArray) {
			Promise.all([
				import('/components/GroupsList.js'),
				import('/components/GroupItem.js'),
				import('/components/ItemItem.js')
			]).then(() => {
				this.openGroups = groups;
				this.openGroup = groups[0];
				this.openItem = groups[0].items[0];
			});
		} else {
			this.viewCreateGroupsTemplate();
		}
	}

	get getEls() { return [
		'.groups-list',
		'.group-item',
		'.item',
	]}

	viewCreateGroupsTemplate() {
		console.info('viewCreateGroupsTemplate');
	}
}

customElements.define(ViewPage.nameIs, ViewPage);
