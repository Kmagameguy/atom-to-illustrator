'use babel';

/*
 * atom-to-illustrator (Atom extension)
 *
 * atom-to-illustrator-view
 *
 */

export default class AtomToIllustratorView {
	/*
	 * Constructor
	 * @public
	 */
	constructor() {
		// Create root element
		this.element = document.createElement('div');
		this.element.classList.add('atom-to-illustrator-console');
		// Log div
		this.logDiv = document.createElement('div');
		this.logDiv.classList.add('logDiv');
		this.element.appendChild(this.logDiv);
	}

	/*
	 * Serialize
	 * @public
	 */
	serialize() {}

	/*
	 * Destroy
	 * @public
	 */
	destroy() {
		this.element.remove();
	}

	/*
	 * Get element
	 * @public
	 */
	getElement() {
		return this.element;
	}

	/*
	 * Send message to console
	 * @private
	 * @param {String} Message to send to console
	 * @param {String} Type of message
	 */
	_sendMessageToConsole(message, type) {
		// Create message element
		const consoleLine = document.createElement('div');
		consoleLine.textContent = message;
		switch(type) {
			case 'execution':
				consoleLine.classList.add('execution');
				break;
			case 'error':
				consoleLine.classList.add('error');
				break;
			case 'info':
				consoleLine.classList.add('info');
				break;
			case 'warning':
				consoleLine.classList.add('warning');
				break;
			default:
				consoleLine.classList.add('log');
				break;
		}

		this.logDiv.appendChild(consoleLine);
		this.element.scrollTop = this.element.scrollHeight;
	}

	/*
	 * Clear console
	 * @public
	 */
	clearConsole() {
		while(this.logDiv.firstChild) {
			this.logDiv.removeChild(this.logDiv.firstChild);
		}
	}
}
