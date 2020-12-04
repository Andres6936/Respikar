"use strict";

export class UseElement {
    /**
     * @param idIcon {String} ID of reference svg in the DOM.
     */
    constructor(idIcon) {
        // @type {SVGUseElement} Need for reference the svg in the DOM
        this.useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        // Reference: https://stackoverflow.com/a/12423019
        this.useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', idIcon);
    }

    toHTML() {
        return this.useElement;
    }
}
