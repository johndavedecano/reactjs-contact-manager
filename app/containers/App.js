import React from 'react';
import DevTools from './DevTools';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <header className="bs-header">
              <div className="container">
                <h1>Contact Manager</h1>
                <p>Simple ReactJS example application</p>
              </div>
            </header>
		    <div className="container">
		      <div className="row">
		        <div className="col-xs-12 main-container">
		        	{this.props.children}
		        </div>
		      </div>
		    </div>
            <DevTools />
        </div>
    }
}

export default App;
