var React = require('react');



var Header = React.createClass({
	render: function() {



		return (

			<div className="header">

				<div className="row">

					<div className="col-sm-6">
						<h1>Country News</h1>
						<h3>Top stories in my country</h3>
					</div>

					<div className="col-sm-6">
						<ul className="links">
              <li><i className="fa fa-twitter-square"></i></li>
							<li><i className="fa fa-facebook-square"></i></li>
							<li><i className="fa fa-instagram"></i></li>
							<li><i className="fa fa-linkedin-square"></i></li>
							<li><i className="fa fa-envelope"></i></li>
						</ul>
					</div>

				</div>

				<div className="row">

					<div className="col-sm-10"></div>

					<div className="col-sm-2">
						<ul className="links">
							<li>News</li>
							<li>Photos</li>
						</ul>
					</div>

				</div>

			</div>
		);
	}
});

module.exports = Header;