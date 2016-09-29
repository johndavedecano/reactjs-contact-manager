import React from 'react';
import Form from './../components/Form';

class ContactsUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ContactsUpdate';
    }
    onCancel() {
    	return this.context.router.push('/');
    }
    render() {
        return <div>
        	<Form title="Update" onCancel={this.onCancel.bind(this)} />
        </div>
    }
}

ContactsUpdate.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ContactsUpdate;
