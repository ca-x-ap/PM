class MainMenu extends HTMLEl {
	get css() { return `
			:host {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: auto;
				width: 100%;
				gap: 1rem;
				padding: 1rem;
				background-color: var(--color-bg_accent);
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			}

			.item {
				font-family: "Montserrat-Regular";
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				padding: .5rem;
			}
	`}

	get html() { return `
			<div class="item" id="create">
				<span class="item__text">Create</span>
			</div>

			<div class="item" id="dropdown">
				<span class="item__text">Upload</span>
			</div>

			<div class="item" id="tables">
				<span class="item__text">Tables</span>
			</div>
	`}

	get getEls() { return [
		['.item'],
	]}

	static get observedAttributes() { return [
	]}

	get props() { return {
	}}

	constructor() {
		super();

		this.itemEls.forEach(itemEl => {

		});
	}

	connectedCallback() {
	}
}

customElements.define(MainMenu.nameIs, MainMenu);
