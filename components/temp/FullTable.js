import('/components/temp/ReusableInput.js');

class SimpleTable extends HTMLEl {
	get css() { return `
			:host {}
	`}

	get html() { return `

	`}

	get getEls() { return [
	]}

	get props() { return {
		id: { observer: ({ id }) => console.info(id) },
		name: { observer: ({ name }) => this.tableNameEl.value = name },
		created: { observer: ({ created }) => this.tableCreatedEl.innerText = created },
		updated: { observer: ({ updated }) => this.tableUpdatedEl.innerText = updated },

	}}

	constructor() {
		super();
	}

	connectedCallback() {
	}
}

customElements.define(SimpleTable.nameIs, SimpleTable);
