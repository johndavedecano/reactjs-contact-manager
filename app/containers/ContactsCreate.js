import React from 'react';
import Form from './../components/Form';
import { createContact } from './../actions/contacts';
import { connect } from 'react-redux';

class ContactsCreate extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ContactsCreate';
    }
    onSave(contact) {
    	const id = new Date().getTime() / 1000;
    	const color = Math.floor(Math.random()*16777215).toString(16);
    	this.props.actions.createContact({
    		...contact,
    		id: id.toFixed(),
    		avatar: 'https://placeholdit.imgix.net/~text?txtsize=60&bg=' + color + '&txt=' + contact.name[0].toUpperCase() + '&w=120&h=120'
    	});
    	return this.context.router.push('/');
    }
    onCancel() {
    	return this.context.router.push('/');
    }
    render() {
        return <div>
        	<Form title="Create" onCancel={this.onCancel.bind(this)} onSave={this.onSave.bind(this)} />
        </div>
    }
}

ContactsCreate.contextTypes = {
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
			createContact: contact => dispatch(createContact(contact))
		}
	}
}

export default connect(mapStateToProps, mapActionsToProps)(ContactsCreate);
