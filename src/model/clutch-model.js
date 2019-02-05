import data from './data.json'
const ENDPOINT = 'https://s3.ca-central-1.amazonaws.com/clutch-interview/car.json'

export function getData(){
	console.log('data -->', data)
	// const trimmed = data.cars.slice(0, 20)
	return Promise.resolve(data.cars)
}
