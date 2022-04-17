const { Date } = require('../class')

describe('class', () => {
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
})
