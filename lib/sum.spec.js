import expect from 'expect.js'
import sum from 'lib/sum'

define('sum()', function () {
    it('Should sum a collection of numbers', function () {
        const result = sum([4, 4, 2])

        expect(result).to.be.a('number')
        expect(result).to.be(10)
    })
})