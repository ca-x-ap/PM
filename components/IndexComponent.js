class IndexComponent extends HTMLEl {
	get css() { return `
			:host {
				min-height: 100vh;
			}
	`}

	get html() { return `
			<!-- <div class="header">header</div> -->
			<div class="main"></div>
			<!-- <div class="footer">footer</div> -->
	`}

	get getEls() { return [
		'.main',
	]}

	get props() { return {
	}}

	constructor() {
		super();
	}

	connectedCallback() {
		// const //
		// 	pathNames = window.location.pathname.split('/').filter(pName => pName !== ''),
		// 	pageNameWithoutIndexPath = pathNames.filter(pName => pName !== 'PM' && pName !== 'index.html'),
		// 	pageName = pageNameWithoutIndexPath[0] || 'StartPage';

		// import(`/components/pages/${pageName}/${pageName}.js`).then(r => {
		// 	const //
		// 		componentName = this.unCamelCase(pageName),
		// 	 	componentEl = document.createElement(componentName);
		// 	this.mainEl.append(componentEl);
		// }).catch(error => {
		// 	console.error('Page is not loaded', error);
		// }).finally(f => {
		// 	console.info(pageName);
		// });

		const pageName = 'ViewPage';
		import(`/components/pages/${pageName}/${pageName}.js`).then(r => {
			const //
				componentName = this.unCamelCase(pageName),
				componentEl = document.createElement(componentName);
			this.mainEl.append(componentEl);
		})
	}
}

customElements.define(IndexComponent.nameIs, IndexComponent);
