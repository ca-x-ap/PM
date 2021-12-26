import { clearContainerEl } from '/lib/lib.js';

class GroupItem extends HTMLEl {
	get html() { return `
		<div class="title"></div>
		<div class="created"></div>
		<div class="updated"></div>
		<div class="description"></div>
		<div class="items-container"></div>
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

		.created,
		.updated {
			color: #6a6a6a;
		}

		.description {
			color: #6a6a6a;
			width: 100%;
		}

		.items-container {
			width: 100%;
		}
	`}

	get props() { return {
		searchOptions: { observer: ({ searchOptions }) => searchOptions },
		sortOptions: { observer: ({ sortOptions }) => sortOptions },
		options: {
			transformer: ({ options }) => options,
			observer: ({ options }) => {
				const {
					title = 'No title',
					description = 'No description',
					items = [],
					created = '',
					updated = '',
					searchOptions = '',
					sortOptions = ''
				} = options;

				this.searchOptions = searchOptions;
				this.sortOptions = sortOptions;

				this.viewGroup({
					title,
					description,
					items,
					created,
					updated
				});
			}
		}
	}}

	constructor() { super()}

	connectedCallback() {}

	get getEls() { return [
		'.title',
		'.description',
		'.created',
		'.updated',
		'.items-container',
	]}

	static get observedAttributes() { return []}


	viewGroup({
		title,
		description,
		items,
		created,
		updated
	}) {
		const makeItem = item => {
			const itemEl = document.createElement('div');
			itemEl.innerText = item.title;
			itemEl.addEventListener('click', event => this.emit('item selected', { value: event.target.innerText }));
			return itemEl;
		};

		this.titleEl.innerText = title;
		this.descriptionEl.innerText = description;
		this.createdEl.innerText = created;
		this.updatedEl.innerText = updated;
		clearContainerEl(this.itemsContainerEl);
		this.itemsContainerEl.append(...items.map( item => makeItem(item)));
	}
}

customElements.define(GroupItem.nameIs, GroupItem);
