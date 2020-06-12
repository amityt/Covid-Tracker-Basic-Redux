import { GET_INDIA } from "../actions/types";

const initialState = {
	loading: true,
	indiaData: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_GLOBAL:
			return {
				...state,
				loading: false,
				indiaData: payload,
			};
		default:
			return state;
	}
}
