class GroupsList extends HTMLEl {
	get html() { return `
		<div class="groups-container"></div>
	`}

	get css() { return `
		:host {
			width: 100%;
		}

		.groups-container {
			padding: 1rem;
			width: calc(100% - 2rem);
			box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
			overflow-x: scroll;
			display: flex;
			justify-content: flex-start;
			gap: 3rem;
			align-items: flex-start;
		}
	`}

	get props() { return {
		groups: {
			transformer: ({ groups }) => groups || [],
			observer: ({ groups }) => this.viewGroups(groups)
		},
	}}

	constructor() {super()}

	connectedCallback() {}

	get getEls() { return [
		'.groups-container'
	]}

	static get observedAttributes() { return []}


	viewGroups(groups) {
		groups.forEach(group => {
			const div = document.createElement('div');
			div.innerText = group.title;
			div.addEventListener('click', event => this.emit('group selected', { value: event.target.innerText }));
			this.groupsContainerEl.append(div);
		});
	}
}

customElements.define(GroupsList.nameIs, GroupsList);
