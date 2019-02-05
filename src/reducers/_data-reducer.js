const INITIAL_STATE = {
	default: [],
	filtered: []
}

export function dataReducer(
	state = INITIAL_STATE,
	action
) {
	const { type, data } = action
	switch (type) {
		case 'UPDATE_DEFAULT_DATA': {
			const arrCarData = data
			return Object.assign(
				{}, state, {
					default: arrCarData,
					filtered: arrCarData
				}
			)
		}
		case 'UPDATE_FILTERED_DATA': {
			return Object.assign(
				{}, state, {
					filtered: data
				}
			)
		}
		default:
			return state;
	}
}
