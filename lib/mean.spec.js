import expect from 'expect.js'
import mean from 'lib/mean'

define('mean()', function () {
    it('Should the mean average of a collection of numbers', function () {
        const result = mean([4, 4, 2, 2])

        expect(result).to.be.a('number')
        expect(result).to.be(3)
    })
})