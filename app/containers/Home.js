import React from 'react';
import AddContact from './../components/AddContact';
import Contacts  from './../components/Contacts';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
    }
    render() {
        return <div>
		      <h2 className="page-header text-center">List of contacts</h2>
        </div>
    }
}

export default Home;
