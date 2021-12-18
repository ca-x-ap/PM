class RootApp extends HTMLEl {
	connectedCallback() {
		const pathNames = window.location.pathname.split('/').filter(pName => pName !== '');
		const pageNameWithoutIndexPath = pathNames.filter(pName => pName !== 'PM' && pName !== 'index.html');
		const pageName = pageNameWithoutIndexPath[0] || 'ViewPage';

		import(`/pages/${pageName}.js`).then(() => {
			const pageEl = makeEl(toKebabCase(pageName));
			this.shadowRoot.append(pageEl);
		}).catch(error => console.error('Page is not loaded', error));
	}
}

customElements.define(RootApp.nameIs, RootApp);
