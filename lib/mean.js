import sum from 'lib/sum'

export default (collection) => {
	const size = collection.length

	return sum(collection) / size
}