import { HTMLEl } from '/lib/lib.js';
import { toKebabCase } from '/lib/lib.js';
import { onError } from '/lib/lib.js';
import('/components/PageLayout.js');

class RootApp extends HTMLEl {
	get html () { return `<page-layout />` }

	connectedCallback() {
		const pathNames = this.getFitlerPathNames();
		const pageName = pathNames[0] || 'StartPage';

		import(`/pages/${ pageName }.js`)
			.then(() => this.renderPage(pageName))
			.catch(error => this.onError(error));
	}


	renderPage(pageName) {
		const pageEl = document.createElement(toKebabCase(pageName));
		this.shadowRoot.querySelector('page-layout').append(pageEl);
	}

	onError(error) {
		const pageLayoutEl = this.shadowRoot.querySelector('page-layout');
		onError('Page is not loaded!', error);
		import(`/pages/ErrorPage.js`).then(() => pageLayoutEl.append(document.createElement('error-page')));
	}

	getFitlerPathNames() {
		const pathNames = window.location.pathname.split('/');
		return pathNames.filter(pathName => ['', 'PasMan', 'index.html'].every(string => pathName !== string));
	}
}

customElements.define(RootApp.nameIs, RootApp);
