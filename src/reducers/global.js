import {
	GET_GLOBAL,
	FAILED_GLOBAL,
	GET_COUNTRY,
	FAILED_COUNTRY,
} from "../actions/types";

const initialState = {
	loading: true,
	globalData: [],
	countryData: [],
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
				globalData: [],
			};
		case GET_COUNTRY:
			return {
				...state,
				loading: false,
				countryData: payload,
			};
		// case FAILED_COUNTRY:
		// 	return {
		// 		...state,
		// 		loading: true,
		// 	};
		default:
			return state;
	}
}
