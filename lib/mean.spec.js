import expect from 'expect.js'
import mean from 'lib/mean'

describe('mean()', function () {
    it('Should return the mean average of a collection of numbers', function () {
        const result = mean([4, 4, 2, 2])

        expect(result).to.be.a('number')
        expect(result).to.be(3)
    })
})
