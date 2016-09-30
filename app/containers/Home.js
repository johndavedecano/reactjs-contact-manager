import React from 'react';
import Contacts  from './../components/Contacts';
import { connect } from 'react-redux';
import { deleteContact, reloadContacts } from './../actions/contacts';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
    }
    componentWillMount() {
    	return this.props.actions.reloadContacts();
    }
   	onAddContact(e) {
   		return this.context.router.push('/contacts/create');
   	}
    render() {
        return <div>
			<h2 className="page-header text-center">List of contacts</h2>
			<p className="text-center">
				<a onClick={this.onAddContact.bind(this)} className="btn btn-lg btn-outline">Add Contact</a>
			</p>
			<Contacts contacts={this.props.contacts} actions={this.props.actions} router={this.context.router} />
        </div>
    }
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		contacts: state.contacts.contacts
	}
}

const mapActionsToProps = (dispatch) => {
	return {
		actions: {
			deleteContact: id => dispatch(deleteContact(id)),
			reloadContacts: () => dispatch(reloadContacts())
		}
	}
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
