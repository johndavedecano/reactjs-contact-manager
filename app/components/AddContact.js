import React from 'react';

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AddContact';
    }
    onAddContact(e) {
    	e.preventDefault();
    	console.log("Add contact");
    }
    render() {
        return <div>
			<p className="text-center">
				<a onClick={this.onAddContact.bind(this)} className="btn btn-lg btn-outline">Add Contact</a>
			</p>
        </div>;
    }
}

export default AddContact;
