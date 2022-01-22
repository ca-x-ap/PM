class GroupItem extends HTMLEl {
	get html() { return `
		<input class="title" type="text" placeholder="Title" />

		<input class="description" type="text" placeholder="Description" />

		<div class="created"></div>

		<div class="updated"></div>

		<input class="search" type="search" placeholder="Search..." />

		<div class="items">
			<template class="item-template">
				<input class="item__title" type="text" placeholder="Title" />

				<div class="item__created"></div>

				<div class="item__updated"></div>

				<div class="item__fields">
					<div class="priority-fields">
						<label class="field-name">
							<input class="field-title" type="text" disabled>
							<input class="field-value" type="text" placeholder="Value">
						</label>

						<label class="field-password">
							<input class="field-title" type="text" disabled>
							<input class="field-value" type="text" placeholder="Value">
						</label>

						<label class="field-expires">
							<input class="field-title" type="text" disabled>
							<input class="field-value" type="text" placeholder="Value">
						</label>

						<label class="field-service">
							<input class="field-title" type="text" disabled>
							<input class="field-value" type="text" placeholder="Value">
						</label>

						<label class="field-tags">
							<input class="field-title" type="text" disabled>
							<input class="field-value" type="text" placeholder="Value">
						</label>
					</div>

					<div class="custom-fields">
						<label class="field-newfield">
							<input class="field-title" type="text" placeholder="Title">
							<input class="field-value" type="text" placeholder="Value">
						</label>
					</div>
				</div>
			</template>
		</div>
	`}

	get css() { return `
		:host {
			display: flex;
			justify-content: flex-start;
			gap: 2rem;
			flex-wrap: wrap;
			padding: 1rem;
		}

		:host::before {
			content: "";
			height: 1rem;
			width: 1rem;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			background-image: url('/public/favicon/arrow.svg');
			color: var(--color-2);
			transform: rotate(-90deg);
		}

		:host(.active)::before {
			transform: rotate(0);
		}

		.title,
		.description,
		.created,
		.updated,
		.search {
			color: var(--color-1);
			background-color: var(--color-0);
		}

		.created,
		.updated {
			opacity: .5;
		}

		.title,
		.description,
		.search {
			padding: .2rem 0;
			border: solid var(--color-3);
			border-width: 0 0 1px 0;
		}

		.items {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-wrap: wrap;
			gap: 3rem 1rem;
		}

		.item {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 1rem;
			width: min(32rem, 100%);
		}

		.item__title {
			// color: var(--color-1);
			// background-color: var(--color-0);
			// border: solid var(--color-3);
			// border-width: 0 0 1px 0;
			background-color: var(--color-3);
			border: none;
			color: var(--color-4);
			padding: .2rem .8rem;
		}

		.item__created,
		.item__updated {
			color: var(--color-1);
			opacity: .5;
		}

		.item__fields {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		.priority-fields,
		.custom-fields {
			display: flex;
			flex-direction: column;
			gap: .5rem;
		}

		.field-name,
		.field-password,
		.field-expires,
		.field-service,
		.field-tags,
		.field-newfield {
			display: flex;
			gap: 1rem;
		}

		.field-title {
			background-color: var(--color-3);
			border: none;
			color: var(--color-4);
			width: 20%;
			padding: .2rem .8rem;
		}

		.field-title:disabled {
			color: var(--color-1);
		}

		.field-value {
			padding: .2rem .8rem;
			width: 100%;
			background-color: var(--color-3);
			border: none;
			color: var(--color-4);
		}
	`}

	get props() { return {
		isActive: {
			observer: ({ isActive }) => isActive ? this.classList.add('active') : this.classList.remove('active')
		},
		title: {
			transformer: ({ title }) => title || '',
			observer: ({ title }) => this.titleEl.value = title
		},
		description: {
			transformer: ({ description }) => description || '',
			observer: ({ description }) => this.descriptionEl.value = description
		},
		created: {
			transformer: ({ created }) => this.covertUnixTimeToDateTime(created) || '',
			observer: ({ created }) => this.createdEl.innerText = created
		},
		updated: {
			transformer: ({ updated }) => this.covertUnixTimeToDateTime(updated) || '',
			observer: ({ updated }) => this.updatedEl.innerText = updated
		},
		// searchOptions: {
		// 	transformer: ({ searchOptions }) => searchOptions || '',
		// 	observer: ({ searchOptions }) => this.searchEl.value = searchOptions
		// },
		// sortOptions: {
		// 	transformer: ({ sortOptions }) => sortOptions || '',
		// 	observer: ({ sortOptions }) => this.sortOptionsEl.value = sortOptions
		// },
		items: {
			transformer: ({ items }) => items || [],
			observer: ({ items }) => this.renderItems(items)
		},
		options: {
			transformer: ({ options }) => options || [],
			observer: ({ options }) => {
				const {
					title,
					description,
					created,
					updated,
					searchOptions,
					sortOptions,
					items
				} = options;

				this.title = title;
				this.description = description;
				this.created = created;
				this.updated = updated;
				this.searchOptions = searchOptions;
				this.sortOptions = sortOptions;
				this.items = items;
			}
		}
	}}

	constructor() {
		super();
		this.searchEl.addEventListener('keyup', event => this.searchHandler(event));
	}

	connectedCallback() {}

	get getEls() { return [
		'.title',
		'.description',
		'.created',
		'.updated',
		'.search',
		'.items',
		['.item'],
		'.item-template'
	]}

	static get observedAttributes() { return []}


	renderItems(items) {
		this.clearContainerEl(this.itemsEl);

		items.forEach(item => {
			const templateEl = this.itemTemplateEl.content.cloneNode(true);

			const titleEl = templateEl.querySelector('.item__title');
			titleEl.value = item.title || '';

			const createdEl = templateEl.querySelector('.item__created');
			createdEl.innerText = this.covertUnixTimeToDateTime(item.created) || '';

			const updatedEl = templateEl.querySelector('.item__updated');
			updatedEl.innerText = this.covertUnixTimeToDateTime(item.updated) || '';

			const itemFieldsEl = this.makeFields({ templateEl, item });

			const itemEl = document.createElement('div');
			itemEl.append(titleEl, createdEl, updatedEl, itemFieldsEl);
			itemEl.classList.add('item');
			itemEl.tags = this.getItemTags(item) || '';
			itemEl.color = item.color || '';

			this.itemsEl.append(itemEl);
		});
	}

	makeFields({ templateEl, item }) {
		const itemFieldsEl = templateEl.querySelector('.item__fields');

		const priorityFieldsEl = itemFieldsEl.querySelector('.priority-fields');
		const priorityFieldsEls = ['name', 'password', 'expires', 'service', 'tags'].map(fieldName =>
			this.makeField({ item, itemFieldsEl, fieldName, selector: `.field-${ fieldName }`, type: 'priority' }));
		priorityFieldsEl.append(...priorityFieldsEls);

		const customFieldsEl = itemFieldsEl.querySelector('.custom-fields');
		const customFieldsEls = Object.keys(item.fields.custom).map(fieldName =>
			this.makeField({ item, itemFieldsEl, fieldName, selector: '.field-newfield', type: 'custom', isCloneNode: true }));
		customFieldsEl.prepend(...customFieldsEls);

		return itemFieldsEl;
	}

	makeField({ item, itemFieldsEl, fieldName, selector, type, isCloneNode = false }) { // ... Change this ... (setting)
		const fieldEl = isCloneNode
			? itemFieldsEl.querySelector(selector).cloneNode(true)
			: itemFieldsEl.querySelector(selector);
		const nameEl = fieldEl.querySelector('.field-title');
		const valueEl = fieldEl.querySelector('.field-value');
		nameEl.value = fieldName;
		valueEl.value = item.fields[type][fieldName];

		return fieldEl;
	}

	getItemTags(item) {
		const getLongDate = unixDate => this.covertUnixTimeToDateTime(unixDate, { year: 'numeric', month: 'long', day: 'numeric' });
		const tags = ['priority', 'custom'].map(type => {
			const fields = item.fields[type];
			const fieldsT = Object.keys(fields).map(fieldName => `${ fieldName },${ fields[fieldName] }`);
			return fieldsT.join()
		});
		tags.push(item.title);
		tags.push(getLongDate(item.created));
		tags.push(getLongDate(item.updated));
		return tags.join().toLocaleLowerCase();
	}

	searchHandler(event) {
		const itemEls = this.itemsEl.querySelectorAll('.item');
		const value = event.target.value;

		itemEls.forEach(itemEl => {
			const isSearchedItem = itemEl.tags.includes(value);
			isSearchedItem
				? itemEl.style.display = ''
				: itemEl.style.display = 'none';
		});
	}

	covertUnixTimeToDateTime(unixTime, IntlOptions = { year: '2-digit', month: 'short', day: '2-digit' }) {
		unixTime = +new Date;
		const date = new Date(unixTime);
		return new Intl.DateTimeFormat('en-EN', IntlOptions).format(date);
	}
}

customElements.define(GroupItem.nameIs, GroupItem);
