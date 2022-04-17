/**
 * @param {number} start 
 * @param {number} end 
 * @returns {Array}
 */
function range(start, end) {
  return Array.from({ length: end - start }, (_, i) => i + start);
}

/**
 * @param {Date} date 
 * @returns {boolean}
 */
function isLeapYear(date) {
  if (date.year % 400 === 0) return true;
  if (date.year % 100 === 0) return false;
  if (date.year % 4 === 0) return true;
  return false;
}

module.exports = class Date {
  #day;
  #month;
  #year;

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
   * @returns {boolean}
   */
  #isLeapYear() {
    return isLeapYear(this);
  }

  /**
   * 
   * @param {Date} date 
   * @returns {number}
   */
  static #totalDays(date) {
    return date.day
      + range(1, date.month)
          .map(month => this.#daysInMonth(month, isLeapYear(date)))
          .reduce((total, days) => total + days, 0)
      + range(1, date.year)
          .map(year => this.#isLeapYear(year) ? 366 : 365)
          .reduce((total, days) => total + days, 0);
  }

  /**
   * @param {number} month
   * @param {boolean} isLeapYear
   * @returns {number}
   */
  static #daysInMonth(month, isLeapYear) {
    switch (month) {
      case 1:
        return 31;
      case 2:
        return isLeapYear ? 29 : 28;
      case 3:
        return 31;
      case 4:
        return 30;
      case 5:
        return 31;
      case 6:
        return 30;
      case 7:
        return 31;
      case 8:
        return 31;
      case 9:
        return 30;
      case 10:
        return 31;
      case 11:
        return 30;
      case 12:
        return 31;
      default:
        throw new Error("Invalid month");
    }
  }

  /**
   * @returns {void}
   */
  nextDay() {
    const lastDayOfTheMonth = Date.#daysInMonth(this.month, this.#isLeapYear());

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
   * 
   * @param {Date} a 
   * @param {Date} b
   * @returns {number} 
   */
  daysBetween(other) {
    const thisDays = Date.#totalDays(this);
    const otherDays = Date.#totalDays(other);
    return Math.abs(thisDays - otherDays);
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
