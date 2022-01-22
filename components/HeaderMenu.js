import { Menu } from '../app/handlers.js';
import { createEvent } from '../lib/lib.js';

class HeaderMenu extends HTMLEl {
	get html() { return `
		<div class="item" id="create">
			<span class="item__text">
				Create new group
			</span>
		</div>

		<div class="item" id="get">
			<span class="item__text">
				Get
			</span>
		</div>

		<div class="item" id="upload">
			<label class="item__text">
				<input class="input-file" type="file" accept="application/JSON, .txt" multiple />
				Upload
			</label>
		</div>
	`}

	get css() { return `
		:host {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: 1rem;
			height: auto;
			width: 100%;
			padding: 1rem 0;
		}

		.item__text {
			padding: 1rem;
			cursor: pointer;
			color: var(--color-1);
		}

		.item__text:hover {
			color: var(--color-2);
		}

		.input-file {
			display: none;
		}
	`}

	constructor() {
		super();
		const menu = new Menu();

		this.inputFileEl.addEventListener('change', event => {
			this.emitEvent('file uploaded', { value: event.target.files });
			event.preventDefault();
		});
		this.addEventListener('file uploaded', menu);

		// this.getEl.addEventListener('click', event => {
		// 	event.preventDefault();
		// 	this.emit('menu file get');
		// });
		// this.addEventListener('menu file get', menu);
	}

	get getEls() { return [
		'.input-file',
		'#create',
		'#get',
		'#upload'
	]}


	dropdownInputHandler(event) {

	}

	downloadHandler(event) {

	}
}

customElements.define(HeaderMenu.nameIs, HeaderMenu);
