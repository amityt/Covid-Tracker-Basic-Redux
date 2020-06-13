import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withSidebar from "./components/Sidebar/Sidebar";
import GlobalPage from "./components/MainPages/GlobalPage";
import CountryPage from "./components/MainPages/CountryPage";
import IndiaPage from "./components/MainPages/IndiaPage";
import store from "./store";
function Routes() {
	return (
		<div style={{ marginTop: 100, marginLeft: 30 }}>
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path="/" component={GlobalPage} />
						<Route exact path="/country/:countryname" component={CountryPage} />
						<Route exact path="/india" component={IndiaPage} />
					</Switch>
				</Router>
			</Provider>
		</div>
	);
}
const AppBody = withSidebar(Routes);
function App() {
	return (
		<div>
			<AppBody />
		</div>
	);
}

export default App;
