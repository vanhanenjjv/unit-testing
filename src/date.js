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
  print() {}

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
   * @param {number} month
   * @param {boolean} isLeapYear
   * @returns {number}
   */
  #daysInMonth(month, isLeapYear) {
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
    const lastDayOfTheMonth = this.#daysInMonth(this.month, this.#isLeapYear());

    if (this.day < lastDayOfTheMonth) {
      this.day += 1;
      return
    }

    this.day = 1;

    if (this.month < 12) {
      this.month += 1;
      return
    }

    this.month = 1;
    this.year += 1;
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
    return this.day;
  }

  /**
   * @returns {number}
   */
  get month() {
    return this.month;
  }

  /**
   * @returns {number}
   */
  get year() {
    return this.year;
  }
};
