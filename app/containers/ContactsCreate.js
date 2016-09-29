import React from 'react';
import Form from './../components/Form';

class ContactsCreate extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ContactsCreate';
    }
    onCancel() {
    	return this.context.router.push('/');
    }
    render() {
        return <div>
        	<Form title="Create" onCancel={this.onCancel.bind(this)} />
        </div>
    }
}

ContactsCreate.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ContactsCreate;
