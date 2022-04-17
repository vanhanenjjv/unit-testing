const f = require("./functions");

class Date {
  #day;
  #month;
  #year;

  /**
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
   * @param {Date} other
   * @returns {number}
   */
  daysBetween(other) {
    return f.daysBetween(this, other);
  }

  /**
   * @returns {void}
   */
  nextDay() {
    const lastDayOfTheMonth = f.daysInMonth(
      this.month,
      f.isLeapYear(this.year)
    );

    if (this.day < lastDayOfTheMonth) {
      this.#day += 1;
      return;
    }

    this.#day = 1;

    if (this.month < 12) {
      this.#month += 1;
      return;
    }

    this.#month = 1;
    this.#year += 1;
  }

  /**
   * @returns {number}
   */
  get daysSinceNewYear() {
    const newYearDays = f.totalDays(new Date(1, 1, this.year));
    const todayDays = f.totalDays(this);
    return todayDays - newYearDays;
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
}

module.exports.Date = Date;
