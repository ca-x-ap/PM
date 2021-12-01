class StartPage extends HTMLEl {
	get css() { return `
			:host {
				font-size: 15rem;
				color: var(--color-text-accent);
				text-align: center;
			}
	`}

	get html() { return `
			-.-

			<br/>
			<br/>
			<a class="link">Go</a>
	`}

	get getEls() { return [
		'.link',
	]}

	static get observedAttributes() { return [
	]}

	get props() { return {
	}}

	constructor() {
		super();
	}

	connectedCallback() {
	}
}

customElements.define(StartPage.nameIs, StartPage);
