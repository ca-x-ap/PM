class SimpleSlider extends HTMLEl {
	get css() { return `
			:host {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 1.5rem;
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
			observer: ({ activeItem }) => console.log(activeItem),
			default: 0
		},
		items: {
			observer: ({ items }) => items.forEach(item => this.shadowRoot.append(item))
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
