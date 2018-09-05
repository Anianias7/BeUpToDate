import React, {Component} from 'react'
import ToolBar from "../ToolBar/ToolBar";
import SideDrawer from "../ToolBar/SideDrawer/SideDrawer";
import './Layout.scss'

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState(
            {
                showSideDrawer: false
            }
        )
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    };

    render() {
        return (
            <div className='Layout'>
                <div className='Layout__Header'>
                    <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer
                        closed={this.sideDrawerClosedHandler}
                        open={this.state.showSideDrawer}/>
                </div>
                <div className='Layout__Content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;