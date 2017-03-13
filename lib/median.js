export default (collection) => {
    const size = collection.length
    const middle = Math.floor(size / 2)
    
    if (isEven(size)) {
        return (collection[middle - 1] + collection[middle]) / 2
    } else {
        return (collection[middle] + 1) / 2
    }
}

function isEven (value) {
    return value % 2 === 0
}