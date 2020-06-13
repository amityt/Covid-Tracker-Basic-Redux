import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCountry } from "../../actions/global";
import { useLocation } from "react-router-dom";
import Dashboard from "../DisplayComponents/Dashboard";
import ProgressBar from "../DisplayComponents/ProgressBar";
import CountryCard from "../DisplayComponents/CountryCard";
function CountryPage({ getCountry, global: { countryData, loading } }) {
	const location = useLocation();
	useEffect(() => {
		const countryname = location.state;
		getCountry(countryname);
	}, []);
	const data = countryData;
	const country = [
		{
			country: data.country,
			countryCode: data.countryInfo?.iso2,
			newConfirmed: data.todayCases,
			totalConfirmed: data.cases,
			newDeaths: data.todayDeaths,
			totalDeaths: data.deaths,
			newRecovered: data.todayRecovered,
			totalRecovered: data.recovered,
		},
	];
	console.log(country);

	return loading ? (
		<div>Loading</div>
	) : (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
			}}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}>
				<Dashboard Data={country} type={data.country} />
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						width: 1100,
						flexWrap: "wrap",
					}}>
					{/* <CountryCard countries={country} /> */}
				</div>
			</div>
			{/* <ProgressBar deathRate={deathRate} recoveryRate={recoveredRate} /> */}
		</div>
	);
}
CountryPage.propTypes = {
	getCountry: PropTypes.func.isRequired,
	global: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	global: state.global,
});
export default connect(mapStateToProps, { getCountry })(CountryPage);
