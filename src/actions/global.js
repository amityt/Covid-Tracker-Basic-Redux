import axios from "axios";
import { GET_GLOBAL, FAILED_GLOBAL } from "./types";

// Get all global data
export const getGlobal = () => async (dispatch) => {
	try {
		const res = await axios.get("https://api.covid19api.com/summary");

		dispatch({
			type: GET_GLOBAL,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: FAILED_GLOBAL,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
