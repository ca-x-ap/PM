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
		options: {
			observer: ({ options }) => {
				const { name, dateTime, cells } = options;
				const { created, lastUpdate } = dateTime;
				cells.forEach(cell => {
					const { name, password, ... other } = cell;
				});
			}
		}
	}}

	constructor() {
		super();
	}

	connectedCallback() {
	}
}

customElements.define(SimpleTable.nameIs, SimpleTable);
