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

    toHTML() {
        const container = document.createElement('div');
        container.classList.add("row", "row-cols-3", "mb-3", "bg-white", "border",
            "align-items-center", "pb-3", "pt-4");

        const containerHour = document.createElement('div');
        containerHour.classList.add('col-6');
        const innerContainer = document.createElement('div');
        innerContainer.classList.add('row', 'row-cols-2');
        const svgElement = document.createElement('svg');
        svgElement.classList.add('col-4', 'offset-1');
        svgElement.setAttribute('width', '2em');
        svgElement.setAttribute('height', '2em');
        svgElement.setAttribute('viewBox', '0 0 16 16');
        const useElement = document.createElement('use');
        useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#bi-alarm');
        const paragraphHour = document.createElement('p');
        paragraphHour.classList.add('col-7', 'h1', 'mb-0');

        containerHour.appendChild(innerContainer);
        innerContainer.appendChild(svgElement);
        innerContainer.appendChild(paragraphHour);
        svgElement.appendChild(useElement);

        const containerDaysActive = document.createElement('div');
        containerDaysActive.classList.add('col-4', 'ml-2');
        const paragraphDaysUsed = document.createElement('p');
        paragraphDaysUsed.classList.add('mb-0', 'text-nowrap');

        containerDaysActive.appendChild(paragraphDaysUsed);

        const containerIconToggle = document.createElement('div');
        containerIconToggle.classList.add('col-1');

        container.appendChild(containerHour);
        container.appendChild(containerDaysActive);
        container.appendChild(containerIconToggle);

        return container;
    }
}

console.log(new Alarm().toHTML().outerHTML);
