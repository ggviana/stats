import expect from 'expect.js'
import mode from 'lib/mode'

describe('mode()', function () {

    it('Should return the modes of a collection of numbers', function () {
        expect(mode([4, 4, 2])).to.eql([4])
        expect(mode([4, 4, 2, 2, 1, 5])).to.eql([2, 4])
    })

    it('Should return undefined if the collection has no mode', function () {

        expect(mode([1,2,3,4,5])).to.be(undefined)
        expect(mode([1,1,2,2,3,3,4,4,5,5])).to.be(undefined)
        expect(mode([])).to.be(undefined)
    })
})
