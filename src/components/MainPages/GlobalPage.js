import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getGlobal, getCountry } from "../../actions/global";
import PropTypes from "prop-types";
import Dashboard from "../DisplayComponents/Dashboard";
import ProgressBar from "../DisplayComponents/ProgressBar";
import CountryCard from "../DisplayComponents/CountryCard";
const GlobalPage = ({ getGlobal, global: { globalData, loading } }) => {
	useEffect(() => {
		getGlobal();
	}, [getGlobal]);
	const [country, setCountry] = useState([]);
	const data = globalData.Global;
	const deathRate = (data?.TotalDeaths / data?.TotalConfirmed) * 100;
	const recoveredRate = (data?.TotalRecovered / data?.TotalConfirmed) * 100;
	const countries = globalData.Countries?.forEach((e) => {
		country.push({
			country: e?.Country,
			countryCode: e.CountryCode,
			newConfirmed: e.NewConfirmed,
			totalConfirmed: e.TotalConfirmed,
			newDeaths: e.NewDeaths,
			totalDeaths: e.TotalDeaths,
			newRecovered: e.NewRecovered,
			totalRecovered: e.TotalRecovered,
		});
	});
	return (
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
				<Dashboard Data={data} type={"Global"} />
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						width: 1100,
						flexWrap: "wrap",
					}}>
					<CountryCard countries={country} />
				</div>
			</div>
			<ProgressBar deathRate={deathRate} recoveryRate={recoveredRate} />
		</div>
	);
};
GlobalPage.propTypes = {
	getGlobal: PropTypes.func.isRequired,
	global: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	global: state.global,
});
export default connect(mapStateToProps, { getGlobal })(GlobalPage);
