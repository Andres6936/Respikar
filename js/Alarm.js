"use strict";

const Week = {
    SUNDAY: "SUNDAY",
    MONDAY: "MONDAY",
    TUESDAY: "TUESDAY",
    WEDNESDAY: "WEDNESDAY",
    THURSDAY: "THURSDAY",
    FRIDAY: "FRIDAY",
    SATURDAY: "SATURDAY"
}

// The Object.freeze() method freezes an object. A frozen object can no
// longer be changed; freezing an object prevents new properties from being
// added to it, existing properties from being removed, prevents changing
// the enumerability, configurability, or writability of existing
// properties, and prevents the values of existing properties from being
// changed. In addition, freezing an object also prevents its prototype
// from being changed. freeze() returns the same object that was passed in.
Object.freeze(Week);

class Alarm {
    constructor() {
        // UUID is the abbreviation of univerally unique identifier, which
        // is an identification number to uniquely identify something.
        // @type {number}
        this.uuid = Math.floor(Math.random() * Date.now());
        // Format of 24 hours.
        // @type {number} Hour in the which the alarm will be activated.
        this.hour = 12;
        // @type {number} Minutes in the which the alarm will be activated.
        this.minute = 30
        // @type {Map<String, Boolean>} Indicate if the Alarm is used in these day.
        this.daysActive = new Map();
        // Set initially all days to false (this is, not used)
        for (const day in Week) {
            this.daysActive.set(Week[day], false);
        }

        // HTMLElements

        // @type{HTMLSVGElement} Represent the graphic for the alarm
        this.iconAlarmElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.iconAlarmElement.setAttribute('width', '2em');
        this.iconAlarmElement.setAttribute('height', '2em');
        this.iconAlarmElement.setAttribute('viewBox', '0 0 16 16');
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

        this.iconCloseElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.iconCloseElement.setAttribute('width', '1.3em');
        this.iconCloseElement.setAttribute('height', '1.3em');
        this.iconCloseElement.setAttribute('viewBox', '0 0 16 16');
    }

    /**
     * @return {boolean} True if the alarm is used all days.
     */
    isAllDaysUsed() {
        let counterOfDaysUsed = 0;
        for (let isUsed of this.daysActive.values()) {
            if (isUsed) {
                counterOfDaysUsed += 1;
            }
        }

        return counterOfDaysUsed === this.DAYS_FOR_WEEK;
    }

    /**
     * @return {boolean} True if only are used three or less days.
     */
    isOnlyThreeDaysUsedOrLess() {
        let counterOfDaysUsed = 0;
        for (let isUsed of this.daysActive.values()) {
            if (isUsed) {
                counterOfDaysUsed += 1;
            }
        }

        return counterOfDaysUsed > 0 && counterOfDaysUsed <= this.MINIMUM_DAYS_NEED_FOR_SHOW_THREE_LETTERS_OF_DAY;
    }

    /**
     * @return {boolean} True if no selected days.
     */
    isAllDaysDeactivate() {
        let counterOfDaysUsed = 0;
        for (let isUsed of this.daysActive.values()) {
            if (isUsed) {
                counterOfDaysUsed += 1;
            }
        }

        // Zero days selected ?
        return counterOfDaysUsed === 0;
    }

    createElementsDay(letter) {
        const column = document.createElement('div');
        column.classList.add('col', 'px-0');
        const paragraph = document.createElement('p');
        paragraph.classList.add('my-0');
        paragraph.innerText = letter;

        column.appendChild(paragraph);
        return column;
    }

    /**
     * @return {HTMLParagraphElement} Representation of hour and minutes in the
     * which the alarm will be activated. The format is HH:MM
     */
    getHourAndMinutes() {
        let hours = String(this.hour);
        const minutes = String(this.minute);

        // Pretty format for hours with only a digit
        // the convert to hours with two digit, begin for
        // add the zero.
        if (hours >= 1 && hours <= 9) {
            hours = '0' + hours;
        }

        const paragraphHour = document.createElement('p');
        paragraphHour.classList.add('col-7', 'h1', 'mb-0');
        // If all the days are deactivate, added the class muted for simulate
        // a alarm deactivate.
        if (this.isAllDaysDeactivate()) {
            paragraphHour.classList.add('text-muted');
        }
        // Requirement: Format HH:MM
        paragraphHour.innerText = `${hours}:${minutes}`;
        return paragraphHour;
    }

    /**
     * @return {HTMLDivElement}
     */
    getDaysUsed() {
        if (this.isAllDaysUsed()) {
            const container = document.createElement('div');
            container.classList.add('row', 'flex-nowrap');

            for (let day of this.daysActive.keys()) {
                container.appendChild(this.createElementsDay(day[0]));
            }

            return container;
        } else if (this.isOnlyThreeDaysUsedOrLess()) {
            let days = []
            for (let [day, isUsed] of this.daysActive) {
                if (isUsed) {
                    days.push(day);
                }
            }

            days = days.map(value => {
                value.substring(0, 3)
            });

            const container = document.createElement('div');
            container.classList.add('mb-0', 'text-nowrap');

            for (let day of days) {
                container.innerText = day + ', ';
            }

            return container;
        } else if (this.isAllDaysDeactivate()) {
            const container = document.createElement('div');
            container.classList.add('row', 'flex-nowrap', 'text-muted');

            for (let day of this.daysActive.keys()) {
                container.appendChild(this.createElementsDay(day[0]));
            }

            return container;
        } else {
            // Only option, more of 3 days and less of 7 days used.
            // Thus, range is between (4 and 6), inclusive.
            const container = document.createElement('div');
            container.classList.add('row', 'flex-nowrap');

            for (let day of this.daysActive.keys()) {
                container.appendChild(this.createElementsDay(day[0]));
            }

            return container;
        }
    }

    toJSON() {
        // Create an temporal object for serialize the map to json
        const daysUsedObject = {};
        for (let [day, isUsed] of this.daysActive) {
            // Added the properties (in lower case)
            // Hack of Js, if the property not exist (like in this case),
            // Js create a new property in the object
            daysUsedObject[day.toLowerCase()] = isUsed;
        }

        return {
            uuid: this.uuid,
            hour: this.hour,
            minute: this.minute,
            daysUsed: daysUsedObject,
        }
    }

    /**
     * @return {HTMLDivElement}
     */
    toHTML() {
        // References for create elements svg and use
        // https://florianbrinkmann.com/en/svg-use-element-javascript-4513/

        // It is important to know that you have to use document.createElementNS
        // with the correct namespace to create the svg and use element – it
        // does not work with document.createElement. Likewise, the
        // setAttributeNS method must be used for the xlink:href attribute
        // instead of setAttribute – again with the correct Namespace.

        // @type {HTMLDivElement}
        const container = document.createElement('div');
        // Added a ID for identify the alarm of other alarms
        container.setAttribute('id', String(this.uuid));
        container.classList.add("row", "row-cols-3", "mb-3", "bg-white", "border",
            "align-items-center", "pb-3", "pt-4");

        // @type {HTMLDivElement}
        const containerHour = document.createElement('div');
        containerHour.classList.add('col-6');
        // @type {HTMLDivElement}
        const innerContainer = document.createElement('div');
        innerContainer.classList.add('row', 'row-cols-2');
        this.iconAlarmElement.classList.add('col-4', 'offset-1');
        // If all the days are deactivate, added the class muted for simulate
        // a alarm deactivate.
        if (this.isAllDaysDeactivate()) {
            this.iconAlarmElement.classList.add('text-muted');
        }
        const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        // Reference: https://stackoverflow.com/a/12423019
        useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#bi-alarm');

        containerHour.appendChild(innerContainer);
        innerContainer.appendChild(this.iconAlarmElement);
        innerContainer.appendChild(this.getHourAndMinutes());
        this.iconAlarmElement.appendChild(useElement);

        // @type {HTMLDivElement}
        const containerDaysActive = document.createElement('div');
        containerDaysActive.classList.add('col-4', 'ml-2');
        // The user-select property in CSS controls how the text in an element
        // is allowed to be selected. For example, it can be used to make text
        // unselectable.
        // Reference: https://css-tricks.com/almanac/properties/u/user-select/
        containerDaysActive.style.userSelect = 'none';

        containerDaysActive.appendChild(this.getDaysUsed());

        // @type {HTMLDivElement}
        const containerIconToggle = document.createElement('div');
        containerIconToggle.classList.add('col-1');

        this.iconCloseElement.classList.add('float-right');
        this.iconCloseElement.style.transform = 'translate(100%, -100%)';
        const useIconElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        // Reference: https://stackoverflow.com/a/12423019
        useIconElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#bi-x');

        containerIconToggle.appendChild(this.iconCloseElement);
        this.iconCloseElement.appendChild(useIconElement);

        container.appendChild(containerHour);
        container.appendChild(containerDaysActive);
        container.appendChild(containerIconToggle);

        return container;
    }

    appendAlarmContainer() {
        const containerAlarms = document.querySelector('#rp-container-alarms');
        containerAlarms.appendChild(this.toHTML());
    }

    get DAYS_FOR_WEEK() {
        return 7;
    }

    get MINIMUM_DAYS_NEED_FOR_SHOW_THREE_LETTERS_OF_DAY() {
        return 3;
    }
}

new Alarm().appendAlarmContainer();
console.log(JSON.stringify(new Alarm()))
