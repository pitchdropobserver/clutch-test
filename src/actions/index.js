export function createUpdateCarPriceAction(numPrice) {
	return (dispatch, getState) => {
		const { data } = getState()
		dispatch({
			type: 'UPDATE_FILTERED_DATA',
			data: data.default.filter((item) => {
				return item.price <= numPrice
			})
		})
		dispatch({
			type: 'UPDATE_SELECTED_CAR_PRICE_MAX',
			data: numPrice
		})
	}
}

export function createUpdateCarMakeAction(strMake) {
	return (dispatch, getState) => {
		const { data } = getState()
		let filteredData
		if (strMake === 'ALL') {
			filteredData = data.default.slice()
		} else {
			filteredData = data.default.filter((item) => {
				return item.make.toUpperCase() === strMake
			})
		}
		dispatch({
			type: 'UPDATE_FILTERED_DATA',
			data: filteredData
		})
		dispatch({
			type: 'UPDATE_SELECTED_CAR_MAKE',
			data: strMake
		})
	}
}