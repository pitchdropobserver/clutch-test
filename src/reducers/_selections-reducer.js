const INITIAL_STATE = {
	selectableCarMakes: ['Honda', 'Jeep', 'All'],
	carMake: 'ALL',
	carPriceMax: 10000,
}

export function selectionsReducer(
	state = INITIAL_STATE,
	action
) {
	const { type, data } = action
	switch (type) {
		case 'UPDATE_SELECTED_CAR_MAKE': {
			const strCarMake = data
			return Object.assign(
				{}, state, {
					carMake: strCarMake
				}
			)
		}
		case 'UPDATE_SELECTED_CAR_PRICE_MAX': {
			const numPrice = data
			if (
				numPrice !== state.carPriceMax
				&& numPrice > 0
			) {
				return Object.assign(
					{}, state, {
						carPriceMax: numPrice
					}
				)
			} else {
				return state
			}
		}
		default:
			return state;
	}
}


