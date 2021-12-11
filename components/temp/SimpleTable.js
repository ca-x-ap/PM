import('/components/temp/ReusableInput.js');

class SimpleTable extends HTMLEl {
	get css() { return `
			:host {
				height: 12rem;
				width: 20rem;
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
				--font-s: 1.5rem;
				height: 2.5rem;
			}

			.table-datetime {
				color: var(--color-text-alt)
			}

			.table-datetime:hover {
				color: var(--color-text-main)
			}

			.table-description {
				height: 100%;
			}

			.cells {
				height: 100%;
				width: 100%;
			}
	`}

	get html() { return `
			<reusable-input class="table-name" value="Emails"></reusable-input>

			<div class="table-datetime">
				<div class="table-created">25.05.21 23:00</div>
				<div class="table-updated">13.10.21 11:23</div>
			</div>

			<reusable-input class="table-description" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."></reusable-input>
	`}

	get getEls() { return [
	]}

	static get observedAttributes() { return [
	]}

	get props() { return {
	}}

	constructor() {
		super();
	}

	connectedCallback() {
	}
}

customElements.define(SimpleTable.nameIs, SimpleTable);
