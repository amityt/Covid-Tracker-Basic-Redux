import axios from "axios";
import {
	GET_GLOBAL,
	FAILED_GLOBAL,
	GET_COUNTRY,
	FAILED_COUNTRY,
} from "./types";

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
		});
	}
};

//Get countrywise data
export const getCountry = (country) => async (dispatch) => {
	try {
		const res = await axios.get(
			`https://corona.lmao.ninja/v2/countries/${country}?yesterday=false&strict=true&query`
		);
		dispatch({
			type: GET_COUNTRY,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: FAILED_GLOBAL,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
