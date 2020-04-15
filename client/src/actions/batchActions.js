import axios from 'axios'

import {
	CHANGE_CURRENT_BATCH,
	DELETE_CURRENT_BATCH,
	LOAD_BATCH,
	NEW_BATCH,
	RENAME_CURRENT_BATCH,
	TIME_TABLE,
} from './types'

export const changeCurrentBatch = key => async dispatch =>
	dispatch({
		type: CHANGE_CURRENT_BATCH,
		payload: key,
	})

export const deleteCurrentBatch = () => async dispatch =>
	dispatch({ type: DELETE_CURRENT_BATCH })

export const loadData = () => async dispatch => {
	const res = await axios.get('/load')
	console.log(res.data.b)
	dispatch({
		type: LOAD_BATCH,
		payload: res.data.b,
	})
	dispatch({
		type: TIME_TABLE,
		payload: res.data.t,
	})
}

export const newBatch = () => async dispatch => dispatch({ type: NEW_BATCH })

export const renameCurrentBatch = name => async dispatch =>
	dispatch({
		type: RENAME_CURRENT_BATCH,
		payload: name,
	})
