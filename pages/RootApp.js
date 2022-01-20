import { HTMLEl } from '/lib/lib.js';
import { makeEl } from '/lib/lib.js';
import { toKebabCase } from '/lib/lib.js';
import { onError } from '/lib/lib.js';
import('/components/PageLayout.js');

class RootApp extends HTMLEl {
	get html () { return `<page-layout />` }

	connectedCallback() {
		const pathNames = window.location.pathname.split('/').filter(pName => pName !== '');
		const pageNameWithoutIndexPath = pathNames.filter(pName => pName !== 'PM' && pName !== 'index.html');
		const pageName = pageNameWithoutIndexPath[0] || 'ViewPage';

		import(`/pages/${ pageName }.js`).then(() => {
			const pageEl = makeEl(toKebabCase(pageName));
			this.shadowRoot.querySelector('page-layout').append(pageEl);
		}).catch(error => onError('Page is not loaded', error));
	}
}

customElements.define(RootApp.nameIs, RootApp);
