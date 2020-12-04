"use strict";

export class UseElement {
    /**
     * Is important that the idIcon exist in the html and this should be inside of symbol tag
     * @param idIcon {String} ID of reference svg in the DOM.
     */
    constructor(idIcon) {
        // References for create elements svg and use
        // https://florianbrinkmann.com/en/svg-use-element-javascript-4513/

        // It is important to know that you have to use document.createElementNS
        // with the correct namespace to create the svg and use element – it
        // does not work with document.createElement. Likewise, the
        // setAttributeNS method must be used for the xlink:href attribute
        // instead of setAttribute – again with the correct Namespace.

        // @type {SVGUseElement} Need for reference the svg in the DOM
        this.useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        // Reference: https://stackoverflow.com/a/12423019
        this.useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', idIcon);
    }

    toHTML() {
        return this.useElement;
    }
}
