class DateLibrary {
    date;
    monthsList = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
    constructor(date) {
        this.date = new Date(date);
        return this;
    }
    getDate() {
        return this.date.getDate();
    }
    getMonths() {
        let month = this.date.getMonth();
        return this.monthsList.at(month);
    }
    getYear() {
        return this.date.getYear();
    }
}

export default DateLibrary;