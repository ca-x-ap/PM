import('/components/HeaderMenu.js');

class PageLayout extends HTMLEl {
	get html() { return `
		<header-menu></header-menu>
		<div class="main childrens"></div>
		<footer-menu></footer-menu>
	`}

	get css() { return `
		:host {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: 2rem;
		}
	`}

	get props() { return {
		childrens: { observer: ({ childrens }) => childrens.forEach(children => this.childrensEl.append(children))},
	}}

	connectedCallback() {
		this.childrens = [...this.children];
	}

	get getEls() { return [
		'.childrens'
	]}
}

customElements.define(PageLayout.nameIs, PageLayout);
