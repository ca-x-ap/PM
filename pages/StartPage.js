import { clearContainerEl } from '../lib/lib.js';
import { getGroupsInStore } from '../app/store.js';

class StartPage extends HTMLEl {
	get html() { return `
		<div class="groups"></div>
	`}

	get css() { return `
		:host {

		}

		.groups {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 4rem;
		}
	`}

	get props() { return {
		groups: {
			transformer: ({ groups }) => groups || [],
			observer: ({ groups }) => console.info(groups)
		}
	}}

	constructor() {super()}

	connectedCallback() {
		this.checkGroups();
	}

	get getEls() { return [
		'.groups',
	]}


	checkGroups() {
		// Change (add demo)
		const groups = getGroupsInStore();
		const isGroupsValidArray = groups instanceof Array && groups.length > 0;
		isGroupsValidArray && import('../components/GroupItem.js').then(() => this.renderGroups(groups))
	}

	renderGroups(groups) {
		const groupEls = [...groups || []].map(group => this.makeGroup(group));
		clearContainerEl(this.groupsEl);
		this.groupsEl.append(...groupEls);
	}

	makeGroup(group) {
		const groupItemEl = document.createElement('group-item');
		groupItemEl.classList.add('groups-list');
		groupItemEl.options = group;

		return groupItemEl;
	}
}

customElements.define(StartPage.nameIs, StartPage);
