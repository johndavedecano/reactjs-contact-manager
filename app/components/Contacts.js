import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Contacts';
    }
    onUpdate(id) {
        return this.props.router.push('/contacts/update/' + id);
    }
    onDelete(id) {
        return this.props.actions.deleteContact(id);
    }
    render() {
        return <div>
			<ul className="media-list row contacts-container">
				{this.props.contacts.map((contact) => {
					return <li key={contact.id} className="media col-md-6 col-lg-4">
						<Contact {...contact}
                            actions={this.props.actions}
                            onDelete={this.onDelete.bind(this)}
                            onUpdate={this.onUpdate.bind(this)} />
					</li>
				})}
			</ul>
        </div>
    }
}

export default Contacts;
