export default (collection) => {
    const grouped = group(collection)

    const occurrencesNames = Object.keys(grouped).map(toNumber)
    const occurrencesValues = occurrencesNames.map(item => grouped[item])

    const highestOcurrency = Math.max.apply(null, occurrencesValues)
    const modes = occurrencesNames.filter(item => grouped[item] === highestOcurrency)

    if (modes.length === 0 || occurrencesValues.every(hasSameValueOf(highestOcurrency)))
        return undefined

    return modes.sort()
}

function group (collection) {
    return collection.reduce((groups, key) => {
        if (!groups[key]) {
            groups[key] = 0
        }

        groups[key] += 1

        return groups
    }, {})
}

function toNumber (value) {
    return parseFloat(value)
}

function hasSameValueOf (value) {
    return x => x === value
} 