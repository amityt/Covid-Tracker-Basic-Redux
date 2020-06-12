import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { BrowserRouter as Router } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PublicIcon from "@material-ui/icons/Public";
import { Link } from "react-router-dom";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: "blue",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: "auto",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

function Sidebar() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<Router>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" noWrap>
							Covid-19 Tracker
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}>
					<Toolbar />

					<div className={classes.drawerContainer}>
						<List>
							<ListItem>
								<ListItemIcon>
									<PublicIcon />
								</ListItemIcon>
								<ListItemText>
									<Link to="/home">World</Link>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<PublicIcon />
								</ListItemIcon>
								<ListItemText>
									<Link to="/country">Countries</Link>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<PublicIcon />
								</ListItemIcon>
								<ListItemText>
									<Link to="/india">India</Link>
								</ListItemText>
							</ListItem>
						</List>
					</div>
				</Drawer>
			</Router>
		</div>
	);
}
export default function withSidebar(Component) {
	function WithSidebar() {
		const classes = useStyles();
		return (
			<div className={classes.root}>
				<Sidebar />
				<div className={classes.route}>
					<Component />
				</div>
			</div>
		);
	}

	return WithSidebar;
}
