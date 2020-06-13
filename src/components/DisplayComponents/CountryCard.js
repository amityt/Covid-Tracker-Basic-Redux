import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactCountryFlag from "react-country-flag";
import { Link, useHistory } from "react-router-dom";
import { getCountry } from "../../actions/global";
import { TextField } from "@material-ui/core";
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
	const [country, setCountry] = useState(countries);
	const [search, setSearch] = useState("");
	const [filteredCountries, setFilteredCountries] = useState([]);
	const classes = useStyles();
	const history = useHistory();
	const handleClick = (country) => {
		let path = "/country/" + country;
		history.push({ pathname: path, state: `${country}` });
	};
	useEffect(() => {
		setFilteredCountries(
			country.filter((country) =>
				country.country.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [search, country]);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}>
			<Typography variant="h4">Search Country : </Typography>
			<TextField
				type="text"
				placeholder="Search Countries"
				onChange={(x) => setSearch(x.target.value)}
				style={{ width: 200, marginTop: 30, marginBottom: 30 }}
			/>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					width: 1100,
					flexWrap: "wrap",
				}}>
				{filteredCountries.map((e) => (
					<Card className={classes.root}>
						<CardContent key={e.countryCode}>
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
								title={e.country}
							/>
							<div>
								<Typography
									variant="body2"
									component="p"
									style={{ fontSize: 25 }}>
									Total Confirmed :{e.totalConfirmed}
									<br />
								</Typography>
								<Typography
									variant="body2"
									component="p"
									style={{ fontSize: 25 }}>
									Total Recovered :{e.totalRecovered}
									<br />
								</Typography>
								<Typography
									variant="body2"
									component="p"
									style={{ fontSize: 25 }}>
									Total Deaths :{e.totalDeaths}
									<br />
								</Typography>
							</div>
						</CardContent>
						<Button size="small" onClick={() => handleClick(e.country)}>
							Learn More
						</Button>
					</Card>
				))}
			</div>
		</div>
	);
}
