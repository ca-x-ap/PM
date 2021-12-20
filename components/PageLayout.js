import('/components/HeaderMenu.js');
import('/components/FooterMenu.js');

class PageLayout extends HTMLEl {
	get html() { return `
		<header-menu class="header"></header-menu>
		<div class="main childrens"></div>
		<footer-menu class="footer"></footer-menu>
	`}

	get css() { return `
		:host {
			margin: auto;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			gap: 2rem;
			width: 45rem;
			min-height: 100vh;
		}

		.header {
			width: 100%;
			height: 5rem;
		}

		.main {
			width: 100%;
			min-height: calc(100vh - 14rem);
		}

		.footer {
			width: 100%;
			height: 5rem;
		}
	`}

	get props() { return {
		childrens: { observer: ({ childrens }) => childrens.forEach(children => this.mainEl.append(children)) },
	}}

	connectedCallback() {
		this.childrens = [...this.children];
	}

	get getEls() { return [
		'.header',
		'.main',
		'.footer'
	]}
}

customElements.define(PageLayout.nameIs, PageLayout);
