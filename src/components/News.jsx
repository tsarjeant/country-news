var React = require('react');

var News = React.createClass({
  render: function() {

    return (

        <div className="col-sm-12">

          <div className="row">

            <div className="col-lg-8 col-push-2">
              <div className="thumb col-sm-1">
                <i className="fa fa-cubes"></i>
              </div>
              <div className="col-sm-11">
                <h2>{this.props.heading}</h2>
                <h4>{this.props.subHead}</h4>
                <p>{this.props.articleCopy}</p>
                <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
              </div>
            </div>

          </div>

        </div>

      );
    }
  });

module.exports = News;