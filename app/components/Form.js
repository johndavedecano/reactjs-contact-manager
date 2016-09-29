import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Form';
        this.state = {
        	title: '',
			name: '',
			email: '',
			telephone: ''
        };
    }
    onChange(e) {
    	this.setState({
    		[e.target.getAttribute('name')]: e.target.value
    	});
    }
    onSubmit(e) {
    	e.preventDefault();
    	this.props.onSave(this.state);
    }
    componentWillReceiveProps(nextProps) {
    	console.log(nextProps);
    	this.setState(Object.assign({}, this.state, nextProps));
    }
    render() {
        return <div>
			<h2 className="page-header text-center">{this.state.title} Contact</h2>
			<form onSubmit={this.onSubmit.bind(this)} role="form" className="form-horizontal contract-form">
				<div className="form-group">
					<label className="col-sm-4 control-label">Full name:</label>
					<div className="col-sm-6">
						<input onChange={this.onChange.bind(this)} type="text" name="name" className="form-control contact-name-input" value={this.state.name} />
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-4 control-label">Email address:</label>
					<div className="col-sm-6">
						<input onChange={this.onChange.bind(this)} type="email" name="email" className="form-control contact-email-input" value={this.state.email} />
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-4 control-label">Telephone number:</label>
					<div className="col-sm-6">
						<input onChange={this.onChange.bind(this)} type="tel" name="telephone" className="form-control contact-tel-input" value={this.state.telephone} />
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-4 col-sm-3">
						<button type="submit" className="btn btn-outline btn-lg btn-block">Submit</button>
					</div>
					<div className="col-sm-3">
						<a href="javascript:void(0)" onClick={this.props.onCancel.bind(this)} className="btn btn-outline btn-lg btn-block">Cancel</a>
					</div>
				</div>
			</form>
        </div>
    }
}

Form.defaultProps = {
	title: 'Create',
	name: '',
	email: '',
	telephone: '',
	onSave: (properties) => {
		console.log(properties);
	}
}

export default Form;
