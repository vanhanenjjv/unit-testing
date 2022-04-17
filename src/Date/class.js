const { daysInMonth, isLeapYear } = require('./functions.js');

module.exports.Date = class Date {
  #day;
  #month;
  #year;

  /**
   * 
   * @param {number} day 
   * @param {number} month 
   * @param {number} year 
   */
  constructor(day, month, year) {
    if (day === undefined) {
      this.#day = 1;
      this.#month = 1;
      this.#year = 1900;
    } else {
      this.#day = day;
      this.#month = month;
      this.#year = year;
    }
  }

  /**
   * @returns {void}
   */
  print() {
    console.log(`${this.day}.${this.month}.${this.year}`);
  }

  /**
   * @returns {void}
   */
  nextDay() {
    const lastDayOfTheMonth = daysInMonth(this.month, isLeapYear(this));

    if (this.day < lastDayOfTheMonth) {
      this.#day += 1;
      return
    }

    this.#day = 1;

    if (this.month < 12) {
      this.#month += 1;
      return
    }

    this.#month = 1;
    this.#year += 1;
  }

  /**
   * @returns {number}
   */
  get daysSinceNewYear() {
    const tmp = new Date(1, 1, this.year);
    let days = 0;

    while (tmp.day !== this.day && tmp.month !== this.month) {
      days++;
      tmp.nextDay();
    }

    return days;
  }

  /**
   * @returns {number}
   */
  get day() {
    return this.#day;
  }

  /**
   * @returns {number}
   */
  get month() {
    return this.#month;
  }

  /**
   * @returns {number}
   */
  get year() {
    return this.#year;
  }
};
