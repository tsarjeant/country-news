var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

{/*}
var CreateHistory = require('history/lib/createHashHistory');
var History = new CreateHistory ({
	queryKey : false
});*/}

var Base = require('./components/Base.jsx');
var	Header = require('./components/Header.jsx');
var News = require('./components/News.jsx');


var Routes = (
	<Router history={History}>
		<Route path="/" component={Base} >
			<Route path="News.jsx" component={News} />
		</Route>
	</Router>
);

module.exports = Routes;