import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ReactCountryFlag from "react-country-flag";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	mainData: {
		width: 1000,
		maxheight: 500,
		marginTop: 100,
		paddingBottom: 30,
		textAlign: "center",
		alignItems: "center",
	},
	heading: {
		fontSize: 40,
		marginTop: 10,
	},
	data: {
		fontSize: 60,
		paddingTop: 10,
	},
}));

function Dashboard({ Data, type }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper elevation={3} className={classes.mainData}>
				<Typography variant="h5" className={classes.heading}>
					<strong>{type} Corona Virus Cases</strong>
				</Typography>
				<hr style={{ marginLeft: 30, marginRight: 30 }} />
				<ReactCountryFlag
					countryCode={Data[0].countryCode}
					svg
					style={{
						width: "10em",
						height: "10em",
					}}
					title={Data[0].country}
				/>

				<Typography variant="subtitle2" style={{ color: "red", fontSize: 26 }}>
					<strong>Total Confirmed : {Data[0].totalConfirmed}</strong>
				</Typography>
				<Typography variant="subtitle2" style={{ color: "red", fontSize: 26 }}>
					New Confirmed : {Data[0].newConfirmed}
				</Typography>
				<Typography
					variant="subtitle2"
					style={{ color: "green", fontSize: 26 }}>
					<strong>Total Recovered : {Data[0].totalRecovered}</strong>
				</Typography>
				<Typography
					variant="subtitle2"
					style={{ color: "green", fontSize: 26 }}>
					New Recovered : {Data[0].newRecovered}
				</Typography>
				<Typography variant="subtitle2" style={{ color: "blue", fontSize: 26 }}>
					<strong>Total Deaths : {Data[0].totalDeaths}</strong>
				</Typography>
				<Typography variant="subtitle2" style={{ color: "blue", fontSize: 26 }}>
					New Deaths : {Data[0].newDeaths}
				</Typography>
			</Paper>
		</div>
	);
}

export default Dashboard;
