const f = require('../functions')

describe('functions', () => {
  describe('range(number, number)', () => {
    it('should return [1, 2, 3]"', () => {
      expect(f.range(1, 3)).toEqual([1, 2])
    })
  })
})
