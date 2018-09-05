import React, {Fragment} from 'react'

import Backdrop from "../../UI/Backdrop/Backdrop";
import IconTextList from "../../Fields/Lists/IconTextList/IconTextList";
import SideBarListItemsConfig from '../../data/SideBarListItems';

import './SideDrawer.scss'

const SideDrawer = ({
                        open,
                        closed
                    }) => {
    let attachedClasses = ['SideDrawer', 'SideDrawer_close'];
    if (open) {
        attachedClasses = ['SideDrawer', 'SideDrawer_open'];
    }
    return (
        <Fragment>
            <Backdrop show={open}
                      clicked={closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={'SideDrawer__Header'}>

                </div>
                <IconTextList listItemsConfig={SideBarListItemsConfig}/>
            </div>
        </Fragment>
    )
};

export default SideDrawer;