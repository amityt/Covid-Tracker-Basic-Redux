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
	console.log(getGlobal);
	const [country, setCountry] = useState([]);
	const data = globalData.Global;
	const countryData = [
		{
			country: data?.Country,
			countryCode: data?.CountryCode,
			newConfirmed: data?.NewConfirmed,
			totalConfirmed: data?.TotalConfirmed,
			newDeaths: data?.NewDeaths,
			totalDeaths: data?.TotalDeaths,
			newRecovered: data?.NewRecovered,
			totalRecovered: data?.TotalRecovered,
		},
	];
	const deathRate = (data?.TotalDeaths / data?.TotalConfirmed) * 100;
	const recoveredRate = (data?.TotalRecovered / data?.TotalConfirmed) * 100;
	const countries = globalData.Countries?.forEach((e) => {
		country.push({
			country: e?.Country,
			countryCode: e.CountryCode,
			totalConfirmed: e.TotalConfirmed,
			totalDeaths: e.TotalDeaths,
			totalRecovered: e.TotalRecovered,
		});
	});
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
				<Dashboard Data={countryData} type={"Global"} />
				<div
					style={{
						marginTop: 40,
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
