import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/SideBar.css';
import { PanelBar, PanelBarItem} from '@progress/kendo-react-layout';

class SideBar extends Component{
    static propTypes = {
        list: PropTypes.array.isRequired,
    };
    render(){
        const {list} = this.props;
        return(

            <div className="SideBar">
                <h2>Azumher</h2>
                <PanelBar dir="rtl">
                     {list && list.map(
                     (list, key) => <PanelBarItem key={key} title={list.title} >
                     <Link key={key} to={list.url}> {list.title}
                     </Link> </PanelBarItem>)}
                </PanelBar>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>

        );
    }
}
export default SideBar;
