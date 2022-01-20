import '/components/HeaderMenu.js';
import '/components/LogoIcon.js';
import '/components/FooterMenu.js';

class PageLayout extends HTMLEl {
	get html() { return `
		<header class="header">
			<logo-icon class="logo"></logo-icon>
			<header-menu class="header-menu"></header-menu>
		</header>
		<div class="main childrens"></div>
		<footer-menu class="footer-menu"></footer-menu>
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
			display: flex;
			align-items: center;
			gap: 3rem;
		}

		.header-menu {
			width: 100%;
			height: 5rem;
		}

		.main {
			width: 100%;
			min-height: calc(100vh - 14rem);
		}

		.footer-menu {
			width: 100%;
			height: 5rem;
		}
	`}

	get props() { return {
		childrens: { observer: ({ childrens }) => this.mainEl.append(...childrens) },
	}}

	connectedCallback() {
		this.moveChildrenInShadowRoot();
	}

	get getEls() { return [
		'.logo',
		'.header-menu',
		'.main',
		'.footer-menu'
	]}

	moveChildrenInShadowRoot() {
		this.childrens = [...this.children];
	}
}

customElements.define(PageLayout.nameIs, PageLayout);
