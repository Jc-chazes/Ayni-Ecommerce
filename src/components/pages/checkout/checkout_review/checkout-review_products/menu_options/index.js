import React,{Component} from 'react';
import './index.css';

class MenuOptions extends Component{
    constructor(props){
        super(props)
        this.activeMenu = this.activeMenu.bind(this);
      }
      activeMenu(){
        this.props.set_id_active(this.props.id)
      }   
      render() {
          return (
            <div className={ "menu-options " + (this.props.id_on==this.props.id?"menu-options_a-active":"") }>
                <a className="menu-options_a" href="#" onClick={this.activeMenu}>{this.props.title} </a>
            </div>
        );
      }
    }
export default  MenuOptions;