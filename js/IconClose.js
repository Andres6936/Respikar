"use strict";

import {UseElement} from "./UseElement.js";

export class IconClose {
    constructor(uuid) {
        // @type{HTMLSVGElement} Represent the graphic for close (it deleted of DOM) the alarm
        this.iconCloseElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.iconCloseElement.setAttribute('width', '1.3em');
        this.iconCloseElement.setAttribute('height', '1.3em');
        this.iconCloseElement.setAttribute('viewBox', '0 0 16 16');
        this.iconCloseElement.style.transform = 'translate(100%, -100%)';
        this.iconCloseElement.style.cursor = 'pointer';
        this.iconCloseElement.classList.add('float-right');
        this.iconCloseElement.onclick = () => {
            this.remove(uuid)
        }

        this.iconCloseElement.appendChild(new UseElement('#bi-x').toHTML())
    }

    remove(uuid) {
        // Problem presented: Uncaught SyntaxError: Failed to execute 'querySelector' on 'Document'
        // Description of problem: querySelector method uses CSS3 selectors for querying the DOM
        // and CSS3 doesn't support ID selectors that start with a digit:
        // Solution: Added the character U to begin of each UUID generate
        document.querySelector('#rp-container-alarms')
            .removeChild(document.querySelector(`#${uuid}`));
    }

    appendChild(child) {
        this.iconCloseElement.appendChild(child);
    }

    toHTML() {
        return this.iconCloseElement;
    }
}
