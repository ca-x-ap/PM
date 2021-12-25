class ItemItem extends HTMLEl {
	get html() { return `
		<div class="title"></div>
		<div class="created"></div>
		<div class="updated"></div>
		<div class="fields-container"></div>
	`}

	get css() { return `
		:host {
			padding: 1rem;
			width: calc(100%);
			box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
			display: flex;
			justify-content: flex-start;
			gap: 1rem 3rem;
			align-items: flex-start;
			flex-wrap: wrap;
		}

		.fields-container {
			width: 100%;
		}
	`}

	get props() { return {
		colorStyle: {
			observer: ({ colorStyle }) => colorStyle
		},
		options: {
			transformer: ({ options }) => options,
			observer: ({ options }) => {
				const {
					title,
					fields,
					created,
					updated,
					color = '',
				} = options;

				this.colorStyle = color;

				this.viewItem({
					title,
					fields,
					created,
					updated,
				});
			}
		}
	}}

	constructor() { super()}

	connectedCallback() {}

	get getEls() { return [
		'.title',
		'.created',
		'.updated',
		'.fields-container',
	]}

	static get observedAttributes() { return []}

	viewItem({
		title,
		fields,
		created,
		updated,
	}) {
		console.log(fields);
		const makeField = field => {
			console.log(field);
			// const fieldEl = document.createElement('div');
			// itemEl.innerText = item.title;
			// itemEl.addEventListener('click', event => this.emit('item selected', { value: event.target.innerText }));
			// return itemEl;
		};

		this.titleEl.innerText = title;
		this.createdEl.innerText = created;
		this.updatedEl.innerText = updated;
		clearContainerEl(this.fieldsContainerEl);
		this.fieldsContainerEl.append(...fields.map( field => makePriorityField(field)));
	}
}

customElements.define(ItemItem.nameIs, ItemItem);
