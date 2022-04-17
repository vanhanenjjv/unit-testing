const { Date } = require('./class')

/**
 * @param {number} start 
 * @param {number} end 
 * @returns {Array}
 */
module.exports.range = (start, end) =>
  Array.from({ length: end - start }, (_, i) => i + start);

/**
 * @param {Date} date 
 * @returns {boolean}
 */
module.exports.isLeapYear = date => {
  if (date.year % 400 === 0) return true;
  if (date.year % 100 === 0) return false;
  if (date.year % 4 === 0) return true;
  return false;
}

/**
 * @param {Date} date
 * @returns {number}
 */
module.exports.totalDays = date =>
  date.day
  + range(1, date.month)
      .map(month => daysInMonth(month, isLeapYear(date)))
      .reduce((total, days) => total + days, 0)
  + range(1, date.year)
      .map(year => isLeapYear(year) ? 366 : 365)
      .reduce((total, days) => total + days, 0);

/**
 * @param {number} month
 * @param {boolean} isLeapYear
 * @returns {number}
 */
module.exports.daysInMonth = (month, isLeapYear) => {
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
 * 
 * @param {Date} a 
 * @param {Date} b 
 * @returns {number}
 */
module.exports.daysBetween = (a, b) =>
  Math.abs(totalDays(a) - totalDays(b));
