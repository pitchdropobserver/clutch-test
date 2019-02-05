import { combineReducers } from 'redux'

import { selectionsReducer } from './_selections-reducer'
import { dataReducer } from './_data-reducer'

const rootReducer = combineReducers({
	selections: selectionsReducer,
	data: dataReducer,
})

export default rootReducer