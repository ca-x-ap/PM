class LogoIcon extends HTMLEl {
	get html() { return `
		<div class="icon"></div>
		<div class="text">X</div>
	`}

	get css() { return `
		:host {
			width: 6rem;
			display: flex;
			flex-direction: column;
			background-color: #000000; /* 2f2f2f */
			color: #FAFAFA;
			align-items: center;
			font-size: .8rem;
			letter-spacing: 1px;
			padding-top: 5px;
		}

		.icon {
			height: 3rem;
			width: 6rem;
			background-image: url("/public/assets/Logo/uT_WJ-LX_2Y_cut.jpg");
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}

		.text::before {
			content: "CA-";
		}

		.text::after {
			content: "-AP";
		}
	`}

	get props() { return {}}

	constructor() { super()}

	connectedCallback() {}

	get getEls() { return []}

	static get observedAttributes() { return []}
}

customElements.define(LogoIcon.nameIs, LogoIcon);
