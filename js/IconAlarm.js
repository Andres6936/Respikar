"use strict";

import {UseElement} from "./UseElement.js";

export class IconAlarm {
    constructor() {
        // @type{HTMLSVGElement} Represent the graphic for the alarm
        this.iconAlarmElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.iconAlarmElement.setAttribute('width', '2em');
        this.iconAlarmElement.setAttribute('height', '2em');
        this.iconAlarmElement.setAttribute('viewBox', '0 0 16 16');
        this.iconAlarmElement.classList.add('col-4', 'offset-1');
        this.iconAlarmElement.dataset.activate = 'false';
        // Added the onclick event is recommend set the style of cursor to
        // pointer, for indicate to user that the element response to user
        // click
        this.iconAlarmElement.style.cursor = 'pointer';
        // Toggle the state of icon, green for activate alarm, gray for deactivate alarm
        this.iconAlarmElement.onclick = () => {
            if (this.iconAlarmElement.dataset.activate === 'true') {
                this.iconAlarmElement.style.removeProperty('color');
                this.iconAlarmElement.dataset.activate = 'false';
            } else {
                this.iconAlarmElement.style.setProperty('color', '#198754', 'important');
                this.iconAlarmElement.dataset.activate = 'true';
            }
        };

        this.iconAlarmElement.appendChild(new UseElement("#bi-alarm").toHTML())
    }

    deactivate() {
        this.iconAlarmElement.classList.add('text-muted');
    }

    appendChild(child) {
        this.iconAlarmElement.appendChild(child);
    }

    toHTML() {
        return this.iconAlarmElement;
    }
}
