import { GET_GLOBAL, FAILED_GLOBAL } from "../actions/types";

const initialState = {
	loading: true,
	globalData: [],
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_GLOBAL:
			return {
				...state,
				loading: false,
				globalData: payload,
			};
		case FAILED_GLOBAL:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
