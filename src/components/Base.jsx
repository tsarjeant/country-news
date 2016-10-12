var React = require('react');
var	Header = require('./Header.jsx');
var News = require('./News.jsx');

var Base = React.createClass ({
	render: function() {
		return (
			<div>
				<div id="header"></div>
				{this.props.children.news}
				<h1>Footer</h1>
			</div>
		);
	}
});

module.exports = Base;