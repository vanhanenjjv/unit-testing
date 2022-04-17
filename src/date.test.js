const Date = require('./date')

describe('Date', () => {
  describe('print()', () => {
    it('should print "1.2.2001"', () => {
      const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
      const date = new Date(1, 2, 2001);
      date.print();
      expect(consoleLogMock).toBeCalledWith('1.2.2001');
    })

    it('should print "5.12.2006"', () => {
      const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
      const date = new Date(5, 12, 2006);
      date.print();
      expect(consoleLogMock).toBeCalledWith('5.12.2006');
    })
  })

  describe('daysBetween(Date)', () => {
    it('should return 3', () => {
      const a = new Date(4, 1, 1);
      const b = new Date(7, 1, 1);
      expect(a.daysBetween(b)).toEqual(3);
    })
  })

  describe('nextDay()', () => {
    it('should increment day by one', () => {
      const date = new Date(1, 2, 2001);
      date.nextDay();
      expect(date.day).toBe(2);
    })

    it('should set day to one and increment month by one', () => {
      const date = new Date(31, 9, 2001);
      date.nextDay();
      expect(date.day).toBe(1);
      expect(date.month).toBe(10);
    })

    it('should set day and month to one and increment year by one', () => {
      const date = new Date(31, 12, 2001);
      date.nextDay();
      expect(date.day).toBe(1);
      expect(date.month).toBe(1);
      expect(date.year).toBe(2002);
    })

    it('should take leap years into account', () => {
      const leapYearDate = new Date(28, 2, 2020);
      leapYearDate.nextDay();
      expect(leapYearDate.day).toBe(29);

      const nonLeapYearDate = new Date(28, 2, 2019);
      nonLeapYearDate.nextDay();
      expect(nonLeapYearDate.day).toBe(1);
      expect(nonLeapYearDate.month).toBe(3);
    })
  })
})
