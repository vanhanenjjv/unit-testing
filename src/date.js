module.exports = class Date {
  constructor(day, month, year) {
    if (day === undefined) {
      this.year = 1900
      this.month = 1
      this.day = 1
    } else {
      this.day = day
      this.month = month
      this.year = year

    }
  }

  print() { 
  }

  nextDay() {

  }

  get day() {
  }

  get month() {

  }

  get year() {

  }


}
