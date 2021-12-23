import { onMenuFileUpload } from '/app/handlers.js';
import { onMenuFileDownload } from '/app/handlers.js';

class HeaderMenu extends HTMLEl {
	get html() { return `
		<div class="item" id="create">
			<span class="item__text">Create</span>
		</div>

		<div class="item" id="dropdown">
			<label class="item__text">
				Upload
				<input class="dropdown_input" type="file" accept="application/JSON, .txt" multiple/>
			</label>
		</div>

		<div class="item" id="download">
			<span class="item__text">Download</span>
		</div>

		<div class="item" id="tables">
			<span class="item__text">Tables</span>
		</div>
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
		this.dropdownInputEl.addEventListener('change', onMenuFileUpload);
		this.downloadEl.addEventListener('click', onMenuFileDownload);
	}

	get getEls() { return [
		'.dropdown_input',
		'#download'
	]}
}

customElements.define(HeaderMenu.nameIs, HeaderMenu);
