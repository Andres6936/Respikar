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
        // @type {Map<String, Boolean>} Indicate if the Alarm is used in these day.
        this.daysActive = new Map();
        // Set initially all days to false (this is, not used)
        for (const day in Week) {
            this.daysActive.set(Week[day], false);
        }
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

        return counterOfDaysUsed <= this.MINIMUM_DAYS_NEED_FOR_SHOW_THREE_LETTERS_OF_DAY;
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
     * @return {HTMLDivElement}
     */
    getDaysUsed() {
        if (this.isAllDaysUsed()) {
            const container = document.createElement('div');
            container.classList.add('row', 'flex-nowrap');

            for (let day of this.daysActive.keys()) {
                container.appendChild(this.createElementsDay(day[0].toLowerCase()));
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
                container.appendChild(this.createElementsDay(day[0].toLowerCase()));
            }

            return container;
        } else {
            // Only option, more of 3 days and less of 7 days used.
            // Thus, range is between (4 and 6), inclusive.
            const container = document.createElement('div');
            container.classList.add('row', 'flex-nowrap');

            for (let day of this.daysActive.keys()) {
                container.appendChild(this.createElementsDay(day[0].toLowerCase()));
            }

            return container;
        }
    }

    /**
     * @return {HTMLDivElement}
     */
    toHTML() {
        // @type {HTMLDivElement}
        const container = document.createElement('div');
        container.classList.add("row", "row-cols-3", "mb-3", "bg-white", "border",
            "align-items-center", "pb-3", "pt-4");

        // @type {HTMLDivElement}
        const containerHour = document.createElement('div');
        containerHour.classList.add('col-6');
        // @type {HTMLDivElement}
        const innerContainer = document.createElement('div');
        innerContainer.classList.add('row', 'row-cols-2');
        const svgElement = document.createElement('svg');
        svgElement.classList.add('col-4', 'offset-1');
        svgElement.setAttribute('width', '2em');
        svgElement.setAttribute('height', '2em');
        svgElement.setAttribute('viewBox', '0 0 16 16');
        const useElement = document.createElement('use');
        // Reference: https://stackoverflow.com/a/12423019
        useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#bi-alarm');
        const paragraphHour = document.createElement('p');
        paragraphHour.classList.add('col-7', 'h1', 'mb-0');

        containerHour.appendChild(innerContainer);
        innerContainer.appendChild(svgElement);
        innerContainer.appendChild(paragraphHour);
        svgElement.appendChild(useElement);

        // @type {HTMLDivElement}
        const containerDaysActive = document.createElement('div');
        containerDaysActive.classList.add('col-4', 'ml-2');
        const paragraphDaysUsed = document.createElement('p');
        paragraphDaysUsed.classList.add('mb-0', 'text-nowrap');

        containerDaysActive.appendChild(paragraphDaysUsed);

        // @type {HTMLDivElement}
        const containerIconToggle = document.createElement('div');
        containerIconToggle.classList.add('col-1');
        const svgIcon = document.createElement('svg');
        svgIcon.classList.add('float-right');
        svgIcon.setAttribute('width', '1.3em');
        svgIcon.setAttribute('height', '1.3em');
        svgIcon.setAttribute('viewBox', '0 0 16 16');
        svgIcon.style.transform = 'translate(100%, -100%)';
        const useIconElement = document.createElement('use');
        // Reference: https://stackoverflow.com/a/12423019
        useIconElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#bi-x');

        containerIconToggle.appendChild(svgIcon);
        svgIcon.appendChild(useIconElement);

        container.appendChild(containerHour);
        container.appendChild(containerDaysActive);
        container.appendChild(containerIconToggle);

        return container;
    }

    get DAYS_FOR_WEEK() {
        return 7;
    }

    get MINIMUM_DAYS_NEED_FOR_SHOW_THREE_LETTERS_OF_DAY() {
        return 3;
    }
}
