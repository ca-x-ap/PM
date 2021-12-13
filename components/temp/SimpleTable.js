import('/components/temp/ReusableInput.js');

class SimpleTable extends HTMLEl {
	get css() { return `
			:host {
				height: 15rem;
				width: 25rem;
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				padding: 1rem;

				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				justify-content: flex-start;
				align-items: end;
				gap: .5rem;
			}

			.table-name {
				--font-s: 1.2rem;
				height: 2rem;
				width: 40%;
			}

			.table-datetime {
				font-size: 60%;
				color: var(--color-text-alt)
			}

			.table-datetime:active {
				color: var(--color-text-main)
			}

			.table-description {
				width: 60%;
				height: 100%;
			}

			.cells {
				height: 100%;
				width: 100%;
			}
	`}

	get html() { return `
			<reusable-input class="table-name"></reusable-input>

			<div class="table-datetime">
				<div class="table-created">25.05.21 23:00</div>
				<div class="table-updated">13.10.21 11:23</div>
			</div>

			<reusable-input class="table-description"></reusable-input>
	`}

	get getEls() { return [
		'.table-name',
		'.table-created',
		'.table-updated',
		'.table-description',
	]}

	get props() { return {
		id: { observer: ({ id }) => console.info(id) },
		name: { observer: ({ name }) => this.tableNameEl.value = name },
		created: { observer: ({ created }) => this.tableCreatedEl.innerText = created },
		updated: { observer: ({ updated }) => this.tableUpdatedEl.innerText = updated },
		description: { observer: ({ description }) => this.tableDescriptionEl.value = description },
		// options: ({ options }) => {
		// 	const { name, created, updated, description } = options;
		// }
	}}

	constructor() {
		super();
	}

	connectedCallback() {
	}
}

customElements.define(SimpleTable.nameIs, SimpleTable);
