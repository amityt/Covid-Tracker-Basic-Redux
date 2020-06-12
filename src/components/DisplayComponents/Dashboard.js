import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	mainData: {
		width: 1000,
		height: 400,
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
				<Typography variant="subtitle2" style={{ color: "red", fontSize: 26 }}>
					<strong>Total Confirmed : {Data?.TotalConfirmed}</strong>
				</Typography>
				<Typography variant="subtitle2" style={{ color: "red", fontSize: 26 }}>
					New Confirmed : {Data?.NewConfirmed}
				</Typography>
				<Typography
					variant="subtitle2"
					style={{ color: "green", fontSize: 26 }}>
					<strong>Total Recovered : {Data?.TotalRecovered}</strong>
				</Typography>
				<Typography
					variant="subtitle2"
					style={{ color: "green", fontSize: 26 }}>
					New Recovered : {Data?.NewRecovered}
				</Typography>
				<Typography variant="subtitle2" style={{ color: "blue", fontSize: 26 }}>
					<strong>Total Deaths : {Data?.TotalDeaths}</strong>
				</Typography>
				<Typography variant="subtitle2" style={{ color: "blue", fontSize: 26 }}>
					New Deaths : {Data?.NewDeaths}
				</Typography>
			</Paper>
		</div>
	);
}

export default Dashboard;
