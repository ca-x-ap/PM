class FooterMenu extends HTMLEl {
	get html() { return `
		<div class=""></div>
	`}

	get css() { return `
		:host {
		}
	`}

	get props() { return {}}

	constructor() { super()}

	connectedCallback() {}

	get getEls() { return []}

	static get observedAttributes() { return []}
}

customElements.define(FooterMenu.nameIs, FooterMenu);
