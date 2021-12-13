class SimpleSlider extends HTMLEl {
	get css() { return `
			:host {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 1.5rem;
				overflow-x: hidden;
				border: solid var(--color-text-alt);
				border-width: 0 2px 0 2px;
				box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.25);
				padding: 1rem;
			}

			.item:not(.active) {
			 	height: 10rem;
			 	width: 12rem;
		 	}
	`}

	get html() { return `
	`}

	get getEls() { return [
	]}

	static get observedAttributes() { return [
	]}

	get props() { return {
		activeItem: {
			observer: ({ activeItem }) => {
				// this.itemEls.forEach(itemEl => itemEl.classList.remove('active'));
				// this.itemEls[activeItem].classList.add('active');
			}
		},
		items: {
			observer: ({ items }) => items.forEach(item => {
				item.classList.add('item');
				// item.addEventListener('click', e => )
				this.shadowRoot.append(item);
			})
		}
	}}

	constructor() {
		super();
	}

	connectedCallback() {
		this.items = [...this.children];
	}

	swipeLeft() {

	}

	swipeRight() {

	}
}

customElements.define(SimpleSlider.nameIs, SimpleSlider);
