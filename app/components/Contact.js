import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Contact';
    }
    on(e) {
    	e.preventDefault();
    }
    render() {
        return <div>
	      <div className="thumbnail">
	        <img className="media-object" src={this.props.avatar} />
	      </div>
	      <div className="media-heading">
	        <h3>
	          {this.props.name}
	          <small>
	            <a data-onClick={this.on.bind(this)} href="javascript:void(0)"><span className="glyphicon glyphicon-pencil"></span></a>
	            <a onClick={this.on.bind(this)} href="javascript:void(0)" className="delete-contract">
	              <span className="glyphicon glyphicon-trash"></span>
	            </a>
	          </small>
	        </h3>
	      </div>
	      <div className="media-body">
	        <dl>
	          <dt>Phone Number:</dt>
	          <dd>{this.props.tel}</dd>
	          <dt>Email:</dt>
	          <dd>{this.props.email}</dd>
	        </dl>
	      </div>
	      <hr />
        </div>
    }
}

export default Contact;
