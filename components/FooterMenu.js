class FooterMenu extends HTMLEl {
	get html() { return `
		<div class="top-title">
			Attac
			<br />
			in Black
		</div>

		<div class="date">
			34
			<br />
			14
		</div>

		<div class="canvas">
		</div>

		<div class="bottom-title">
			Curve of
			<br />
			the Eath
		</div>

		<nav class="navigation">
			<ul class="list">
				<li class="item">I'm Going to Forget</li>
				<li class="item">I'm Going to Forget</li>
				<li class="item">I'm Going to Forget</li>
				<li class="item">I'm Going to Forget</li>
				<li class="item">I'm Going to Forget</li>
				<li class="item">I'm Going to Forget</li>
				<li class="item">I'm Going to Forget</li>
			</ul>

			<ul class="list">
				<li class="item">I'm Going to Forget</li>
				<li class="item">I'm Going to Forget</li>
				<li class="item">I'm Going to Forget</li>
				<li class="item">I'm Going to Forget</li>
				<li class="item">I'm Going to Forget</li>
			</ul>

			<div class="link-to-main">
				Home
			</div>
		</nav>
	`}

	get css() { return `
		:host {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			font-style: "Roboto_Mono";
			color: white;
			gap: 1rem;
			padding: 1rem;
		}

		.top-title,
		.date {
			font-size: 1.5rem;
			font-weight: bold;
		}

		.canvas {
			width: 100%;
			height: 15rem;
			background-color: #373737;
		}

		.bottom-title {
			width: 100%;
			font-size: 2rem;
			font-weight: bold;
		}

		.navigation {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		.list {
			list-style: none;
			padding: 0;
			letter-spacing: 3px;
		}

		.link-to-main {
			font-size: 1.5rem;
			font-weight: bold;
		}

		.item:hover,
		.link-to-main:hover {
			color: var(--color-2);
			cursor: pointer;
		}
	`}

	get props() { return {}}

	constructor() { super()}

	connectedCallback() {}

	get getEls() { return []}

	static get observedAttributes() { return []}
}

customElements.define(FooterMenu.nameIs, FooterMenu);
