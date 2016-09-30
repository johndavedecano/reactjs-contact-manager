import React from 'react';
import Form from './../components/Form';
import { updateContact, fetchContact } from './../actions/contacts';
import { connect } from 'react-redux';

class ContactsUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ContactsUpdate';
        this.state = {};
    }
    componentWillMount() {
        setTimeout(() => {
            return this.props.actions.fetchContact();
        }, 100);
    }
    onSave(contact) {
        this.props.actions.updateContact(contact);
        setTimeout(() => {
            return this.context.router.push('/');
        }, 1000)
    }
    onCancel() {
        return this.context.router.push('/');
    }
    getContact() {
        const id = parseInt(this.props.params.id);
        const contact = this.props.contacts.filter(c => { return c.id === id});

        return contact[0];
    }
    render() {
        return <div>
            <Form loading={this.props.loading} {...this.getContact()} title="Update" onCancel={this.onCancel.bind(this)} onSave={this.onSave.bind(this)} />
        </div>
    }
}

ContactsUpdate.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contacts,
        loading: state.contacts.loading
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        actions: {
            updateContact: contact => dispatch(updateContact(contact)),
            fetchContact: () => dispatch(fetchContact())
        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ContactsUpdate);
