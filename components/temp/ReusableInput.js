class ReusableInput extends HTMLEl {
	get css() { return `
			:host {
				display: flex;
				height: 1rem;
				width: 8rem;
				--font-s: 1rem;
				--over-v: hidden;

				--font-f: 'Montserrat-Light';

				--focus-background: var(--color-bg-accent);
				--focus-color: var(--color-text-accent);

				--unfocus-background: white;
				--unfocus-color: black;

				--disable-background: gray;
				--disable-color: gray;
			}

			.value {
				font-size: var(--font-s);
				font-family: var(--font-f);
				display: block;
				resize: none;
				overflow: var(--over-v);
				border: 2px solid var(--color-text-alt);
				outline: none;
			}

			.value:focus {
				border: 2px solid var(--color-bg-alt);
			}
	`}

	get html() { return `
			<textarea class="value" spellcheck="false"></textarea>
	`}

	// <input type="text" class="value">

	get getEls() { return [
		'.value'
	]}

	static get observedAttributes() { return [
		'type',
		'hidden',
		'isDisabled',
		'value'
	]}

	get props() { return {
		type: { default: 'any' },
		hidden: { observer: ({ hidden }) => setHideValueState(hidden) },
		value: { observer: ({ value }) => this.valueEl.value = value },
		isDisabled: { observer: ({ isDisabled }) => this.setDisabledState(isDisabled) }
	}}

	constructor() {
		super();
		this.valueEl.addEventListener('keypress', e => this.value = this.valueEl.value);
	}

	connectedCallback() {
	}

	setDisabledState(bool) {
		bool ? this.valueEl.setAttribute('disabled', true) : this.valueEl.removeAttribute('disabled')
	}

	setHideValueState(bool) {
		hidden ? this.classList.add('hidden') : this.classList.remove('hidden')
	}
}

customElements.define(ReusableInput.nameIs, ReusableInput);
