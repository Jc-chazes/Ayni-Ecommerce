import React,{Component} from 'react';
import Header from './header/index.js';

class AppShell extends Component {
    render() {
        return (
            <div className="app-shell">
                <Header />
                { this.props.children }
            </div>
        );
    }
}

export default AppShell;
