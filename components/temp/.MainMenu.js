class MainMenu extends HTMLEl {
	get css() { return `
			:host {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-end;
				height: 100vh;
				width: 3rem;
				gap: 1rem;
				padding: 2rem;
				background-color: var(--color-bg_accent);
			}

			.item {
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: var(--color-bg-alt);
				width: 2rem;
				height: 2rem;
				border-radius: 50%;
				border: 1px solid var(--color-bg-alt);
				position: relative;
			}

			.item:hover .item__text {
				display: block;
				position: absolute;
				left: 3rem;
			}

			.item__icon {
				width: 100%;
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				background-size: 56%;
			}

			.item__text {
				display: none;
				color: var(--color-text-main);
			}

			.item#create .item__icon {
				background-image: url("/public/favicon/create.svg");
			}

			.item#dropdown .item__icon{
				background-image: url("/public/favicon/dropdown.svg");
			}
	`}

	get html() { return `
			<div class="item" id="create">
				<i class="item__icon"></i>
				<span class="item__text">Create</span>
			</div>

			<div class="item" id="dropdown">
				<i class="item__icon"></i>
				<span class="item__text">Upload</span>
			</div>

			<div class="item" id="tables">
				<i class="item__icon"></i>
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
