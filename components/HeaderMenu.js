import { Menu } from '/app/handlers.js';

class HeaderMenu extends HTMLEl {
	get html() { return `
		<!--
		<div class="item" id="create">
			<span class="item__text">Create</span>
		</div>
		-->

		<div class="item" id="dropdown">
			<label class="item__text">
				Upload
				<input
					class="dropdown_input"
					type="file"
					accept="application/JSON, .txt"
					multiple
				/>
			</label>
		</div>

		<div class="item" id="download">
			<span class="item__text">Get</span>
		</div>

		<!--
		<div class="item" id="tables">
			<span class="item__text">Tables</span>
		</div>
		-->
	`}

	get css() { return `
		:host {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;
			height: auto;
			width: 100%;
			padding: 1rem;
			background-color: var(--color-bg_accent);
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		}

		.item {
			align-items: center;
			cursor: pointer;
			display: flex;
			font-family: "Montserrat-Regular";
			justify-content: center;
			padding: .5rem;
			user-select: none;
		}

		.dropdown_input {
			display: none;
		}
	`}

	constructor() {
		super();

		this.dropdownInputEl.addEventListener('change', event => {
			this.dropdownInputHandler(event);
		});
		this.downloadEl.addEventListener('click', event => {
			this.downloadHandler(event);
		});

		const menu = new Menu();
		this.addEventListener('file drop', menu);
		this.addEventListener('menu file get', menu);
	}

	get getEls() { return [
		'.dropdown_input',
		'#download'
	]}


	dropdownInputHandler(event) {
		this.emit('file drop', { value: event.target.files });
	}

	downloadHandler(event) {
		event.preventDefault();
		this.emit('menu file get');
	}
}

customElements.define(HeaderMenu.nameIs, HeaderMenu);
