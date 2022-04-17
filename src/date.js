module.exports = class Date {
  constructor(day, month, year) {
    if (day === undefined) {
      this.year = 1900;
      this.month = 1;
      this.day = 1;
    } else {
      this.day = day;
      this.month = month;
      this.year = year;
    }
  }

  /**
   * @returns {void}
   */
  print() {
  }

  /**
   * @returns {boolean}
   */
  #isLeapYear() {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    if (this.year % 4 === 0) return true;
    return false;
  }

  /**
   * @returns {void}
   */
  nextDay() {
  }

  /**
   * @returns {number}
   */
  get daysSinceNewYear() {
  }

  /**
   * @returns {number}
   */
  get day() {
    return this.day
  }

  /**
   * @returns {number}
   */
  get month() {
    return this.month
  }

  /**
   * @returns {number}
   */
  get year() {
    return this.year
  }
}
