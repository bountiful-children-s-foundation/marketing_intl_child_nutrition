class Accordian {
    constructor(element) {
        this.element = element;
    }
}

let accordian = document.querySelectorAll("accordian");

accordian.forEach(function(newAccordian) {
    new Accordian(newAccordian);
} )