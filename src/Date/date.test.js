const { Date } = require('./class')
const f = require('./functions')

describe('Date', () => {
  describe('functions', () => {
    describe('range(number, number)', () => {
      it('should return [1, 2, 3]"', () => {
        expect(f.range(1, 3)).toEqual([1, 2])
      })
    })
  })
  
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

    describe('daysSinceNewYear()', () => {
      it('should return 5', () => {
        const date = new Date(5, 1, 2015);
        expect(date.daysSinceNewYear).toEqual(5);
      })

      it('should return 64', () => {
        const date = new Date(4, 3, 2020);
        expect(date.daysSinceNewYear).toEqual(64);
      })
    })
  })
})
