import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Contacts';
    }
    render() {
        return <div>
			<ul className="media-list row contacts-container">
				{this.props.contacts.map((contact) => {
					return <li className="media col-md-6 col-lg-4">
						<Contact contact={contact} actions={this.props.actions} />
					</li>
				})}
			</ul>
        </div>
    }
}

export default Contacts;
