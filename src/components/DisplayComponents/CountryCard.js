import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactCountryFlag from "react-country-flag";

const useStyles = makeStyles({
	root: {
		marginTop: 30,
		Width: 250,
		marginLeft: 20,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function CountryCard({ countries }) {
	const [country, setcountry] = useState(countries);
	const classes = useStyles();
	console.log(country);
	const bull = <span className={classes.bullet}>•</span>;
	return country.map((e) => (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant="h5" component="h2">
					{e.country}
				</Typography>
				<ReactCountryFlag
					countryCode={e.countryCode}
					svg
					style={{
						width: "10em",
						height: "10em",
					}}
					title="US"
				/>
				<Typography variant="body2" component="p">
					{e.totalConfirmed}
					<br />
				</Typography>
				<Typography variant="body2" component="p">
					{e.totalRecovered}
					<br />
				</Typography>
				<Typography variant="body2" component="p">
					{e.totalDeaths}
					<br />
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	));
}
