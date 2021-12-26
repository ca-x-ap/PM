import('/components/ReusableInput.js');

class ItemItem extends HTMLEl {
	get html() { return `
		<reusable-input class="title"></reusable-input>
		<div class="created"></div>
		<div class="updated"></div>
		<div class="fields">
			<div class="fields_priority">
				<reusable-input class="name"></reusable-input>
				<reusable-input class="password"></reusable-input>
				<reusable-input class="service"></reusable-input>
				<reusable-input class="expires"></reusable-input>
				<reusable-input class="tags"></reusable-input>
			</div>

			<div class="fields_custom"></div>
		</div>
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
		'.name',
		'.password',
		'.service',
		'.expires',
		'.tags',
		'.fields_custom'
	]}

	static get observedAttributes() { return []}

	viewItem({
		title,
		fields,
		created,
		updated,
	}) {
		this.titleEl.value = title;
		this.createdEl.innerText = created;
		this.updatedEl.innerText = updated;
		this.updatePriorityFields(fields.priority);
		this.renderCustomFields(fields.custom);
	}

	updatePriorityFields(fields) {
		[
			'name',
			'password',
			'service',
			'expires',
			'tags'
		].forEach(key => key && (this[key + "El"].value = fields[key]));
	}

	renderCustomFields(fields) {
		clearContainerEl(this.fieldsCustomEl);

		// const makeFields = (key, value) => {
		// 	const input = document.createElement('reusable-input');
		// };

		this.fieldsCustomEl.append(
			...Object.keys(fields)
			.map((key, i) => `| ${ ++i }) ${ key } : ${ fields[key] } \n |`));
	}
}

customElements.define(ItemItem.nameIs, ItemItem);
