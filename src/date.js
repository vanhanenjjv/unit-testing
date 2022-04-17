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

  /**
   * @returns {void}
   */
  print() {

  }

  /**
   * @returns {boolean}
   */
  #isLeapYear() {
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
