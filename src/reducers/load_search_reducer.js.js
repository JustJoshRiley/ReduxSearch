import { LOADSEARCH } from "../actions";

const load_search_reducer = (state = null, action) => {
	switch(action.type) {
		case LOADSEARCH:
			return action.payload
		default: 
			return state
	}
}

export default load_search_reducer