var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Routes.jsx');



var Header = require('./components/Header.jsx');
ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(Routes, document.getElementById('main'));

var News = require('./components/News.jsx');
ReactDOM.render(<News
	heading = "Heading"
	subHeading = "This is a subHeading"
	articleCopy = "Yada yada yada and then some stuff... "
	imgSrc = "././public/img/imgage1.jpg"
	imgAlt = "This is an image of something"/>,
	document.getElementById('news1'));
