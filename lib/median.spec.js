import expect from 'expect.js'
import median from 'lib/median'

describe('median()', function () {
    it('Should return the median average of a even collection of numbers', function () {
        expect(median([1, 2, 3, 8, 9, 18])).to.be(5.5)
        expect(median([1, 2, 3, 4, 5, 6, 8, 9])).to.be(4.5)
    })

    it('Should return the median average of a odd collection of numbers', function () {
        expect(median([1, 3, 5, 7, 9])).to.be(3)
        expect(median([1, 3, 3, 6, 7, 8, 9])).to.be(3.5)
    })

    it('Should work as the same for unsorted collections', function () {
        expect(median([8, 2, 3, 4, 6, 5, 1, 9])).to.be(4.5)
        expect(median([9, 3, 6, 3, 7, 8, 1])).to.be(3.5)
    })
})
