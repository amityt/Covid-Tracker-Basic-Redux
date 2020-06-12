import React from "react";
import { easeQuadInOut, easeQuadIn } from "d3-ease";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	mainData: {
		width: 300,
		marginTop: 100,
		marginLeft: 50,
		paddingBottom: 30,
		textAlign: "center",
		alignItems: "center",
	},
	Data: {
		padding: 40,
	},
}));

export default function ProgressBar({ deathRate, recoveryRate }) {
	const roundedDeathRate = Math.round(deathRate);
	const roundedRecoveredRate = Math.round(recoveryRate);
	const classes = useStyles();
	return (
		<div className={classes.mainData}>
			<Paper elevation={3}>
				<Typography variant="h4" style={{ paddingTop: 20 }}>
					<strong>Analytics</strong>
				</Typography>
				<div className={classes.Data}>
					<Typography
						style={{
							textAlign: "center",
							color: "red",
							fontSize: 24,
							marginBottom: 15,
						}}>
						Death Rate
					</Typography>
					<AnimatedProgressProvider
						valueStart={0}
						valueEnd={roundedDeathRate}
						duration={1.4}
						easingFunction={easeQuadIn}>
						{() => {
							return (
								<CircularProgressbar
									value={roundedDeathRate}
									text={`${roundedDeathRate}%`}
									styles={{
										path: {
											stroke: "red",
											transition: "stroke-dashoffset 0.5s ease-in 0s",
										},
										text: {
											fill: "red",
										},
									}}
								/>
							);
						}}
					</AnimatedProgressProvider>
				</div>

				<div className={classes.Data}>
					<Typography
						style={{
							textAlign: "center",
							color: "green",
							fontSize: 24,
							marginBottom: 15,
						}}>
						Recovery Rate
					</Typography>
					<AnimatedProgressProvider
						valueStart={0}
						valueEnd={roundedRecoveredRate}
						duration={1.4}
						easingFunction={easeQuadInOut}>
						{() => {
							return (
								<CircularProgressbar
									value={roundedRecoveredRate}
									text={`${roundedRecoveredRate}%`}
									styles={{
										path: {
											stroke: "green",
											transition: "stroke-dashoffset 0.5s ease-in 0s",
										},
										text: {
											fill: "green",
										},
									}}
								/>
							);
						}}
					</AnimatedProgressProvider>
				</div>
			</Paper>
		</div>
	);
}
