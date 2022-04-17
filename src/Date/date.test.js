const { Date } = require("./class");
const f = require("./functions");

describe("Date", () => {
  describe("functions", () => {
    describe("range(number, number)", () => {
      it('should return [1, 2] for (1, 3)"', () => {
        expect(f.range(1, 3)).toEqual([1, 2]);
      });
    });

    describe("isLeapYear(number)", () => {
      it("should return true for 2000", () => {
        expect(f.isLeapYear(2000)).toEqual(true);
      });

      it("should return false 1900", () => {
        expect(f.isLeapYear(1900)).toEqual(false);
      });

      it("should return true for 1904", () => {
        expect(f.isLeapYear(1904)).toEqual(true);
      });

      it("should return false for 1900", () => {
        expect(f.isLeapYear(1900)).toEqual(false);
      });
    });

    describe("daysInMonth(number, boolean)", () => {
      it("should return 29 for (2, true)", () => {
        expect(f.daysInMonth(2, true)).toEqual(29);
      });

      it("should return 30 for (4, false)", () => {
        expect(f.daysInMonth(4, false)).toEqual(30);
      });

      it("should return 31 for (1, false)", () => {
        expect(f.daysInMonth(1, false)).toEqual(31);
      });
    });

    describe("totalDays(Date)", () => {
      it("should return 365 for Date(1, 1, 1) and Date(1, 1, 2)", () => {
        const a = new Date(1, 1, 1);
        const b = new Date(1, 1, 2);
        expect(a.daysBetween(b)).toEqual(365);
      });

      it("should return 1826 for Date(1, 1, 1) and Date(1, 1, 6)", () => {
        const a = new Date(1, 1, 1);
        const b = new Date(1, 1, 6);
        expect(a.daysBetween(b)).toEqual(1826);
      });

      it("should return 3653 Date(1, 1, 2000) and Date(1, 1, 2010)", () => {
        const a = new Date(1, 1, 2000);
        const b = new Date(1, 1, 2010);
        expect(a.daysBetween(b)).toEqual(3653);
      });
    });
  });

  describe("class", () => {
    describe("nextDay()", () => {
      it("should increment day by one for Date(1, 2, 2001)", () => {
        const date = new Date(1, 2, 2001);
        date.nextDay();
        expect(date.day).toEqual(2);
      });

      it("should set day to one and increment month by one for Date(31, 9, 2001)", () => {
        const date = new Date(31, 9, 2001);
        date.nextDay();
        expect(date.day).toEqual(1);
        expect(date.month).toEqual(10);
      });

      it("should set day and month to one and increment year by one for Date(31, 12, 2001)", () => {
        const date = new Date(31, 12, 2001);
        date.nextDay();
        expect(date.day).toEqual(1);
        expect(date.month).toEqual(1);
        expect(date.year).toEqual(2002);
      });

      it("should use leap day for Date(28, 2, 2020)", () => {
        const date = new Date(28, 2, 2020);
        date.nextDay();
        expect(date.day).toEqual(29);
      });

      it("should not use leap day for Date(28, 2, 2019)", () => {
        const date = new Date(28, 2, 2019);
        date.nextDay();
        expect(date.day).toEqual(1);
        expect(date.month).toEqual(3);
      });
    });

    describe("daysBetween(Date)", () => {
      it("should return 3 for Date(4, 1, 1) and Date(7, 1, 1)", () => {
        const a = new Date(4, 1, 1);
        const b = new Date(7, 1, 1);
        expect(a.daysBetween(b)).toEqual(3);
      });

      it("should return 4 for Date(1, 1, 1) and Date(5, 1, 1)", () => {
        const a = new Date(1, 1, 1);
        const b = new Date(5, 1, 1);
        expect(a.daysBetween(b)).toEqual(4);
      });
    });

    describe("print()", () => {
      it('should output "1.2.2001"', () => {
        const consoleLogMock = jest.spyOn(console, "log").mockImplementation();
        const date = new Date(1, 2, 2001);
        date.print();
        expect(consoleLogMock).toBeCalledWith("1.2.2001");
      });

      it('should output "5.12.2006"', () => {
        const consoleLogMock = jest.spyOn(console, "log").mockImplementation();
        const date = new Date(5, 12, 2006);
        date.print();
        expect(consoleLogMock).toBeCalledWith("5.12.2006");
      });
    });

    describe("daysSinceNewYear()", () => {
      it("should return 2 for Date(3, 1, 2005)", () => {
        const date = new Date(3, 1, 2005);
        expect(date.daysSinceNewYear).toEqual(2);
      });

      it("should return 4 for Date(5, 1, 2015)", () => {
        const date = new Date(5, 1, 2015);
        expect(date.daysSinceNewYear).toEqual(4);
      });

      it("should return 63 for Date(4, 3, 2020)", () => {
        const date = new Date(4, 3, 2020);
        expect(date.daysSinceNewYear).toEqual(63);
      });
    });
  });
});
