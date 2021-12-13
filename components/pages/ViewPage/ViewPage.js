import('/components/temp/MainMenu.js');
import('/components/temp/SimpleSlider.js');
import('/components/temp/SimpleTable.js');

class ViewPage extends HTMLEl {
	get css() { return `
			:host {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				gap: 5rem;
			}

			.menu {
				height: 3.5rem;
				width: 45rem;
			}

			.slider {
				width: 45rem;
				height: 20rem;
			}

			.content {
				padding: 1rem;
				width: 100%;
			}
	`}

	get html() { return `
			<main-menu class="menu"></main-menu>

			<simple-slider class="slider">
				<simple-table></simple-table>
				<simple-table class="active"></simple-table>
				<simple-table></simple-table>
			</simple-slider>


	`}

	get getEls() { return [
		'.slider'
	]}

	static get observedAttributes() { return [
	]}

	get props() { return {
	}}

	constructor() {
		super();

		// this.createTableEl.addEventListener('click', e => {
		// 	import('/components/temp/CreateTable/CreateTable.js')
		// 		.then(res => {
		// 			const createTableEl = document.createElement('create-table');
		// 			this.contentEl.append(createTableEl);
		// 		});

		// 	import('/components/temp/CreateTable/CreateTable.js').then(r => {
		// 		const createTableEl = document.createElement('create-table');

		// 	}).catch(error => {
		// 		console.error('Page is not loaded', error);
		// 	}).finally(f => {
		// 		console.info(pageName);
		// 	});
		// });
	}

	connectedCallback() {
		this.sliderEl.activeItem = 1;
		const tables = this.getPasswordTables();

		if (tables || tables.length) {
			console.info('no ok');
		} else {
			console.info('ok');
		}
	}

	getPasswordTables() {
		return [{
				name: 'some table name',
				description: '',
				type: 'text',
				dateTime: { created: '', lastUpdate: '' },
				cells: [{
						name: { value: '', isHidden: false, lastUpdateDateTime: '' },
						password: { value: '', isHidden: true, lastUpdateDateTime: '' },
				}]
		}];
	}
}

customElements.define(ViewPage.nameIs, ViewPage);
