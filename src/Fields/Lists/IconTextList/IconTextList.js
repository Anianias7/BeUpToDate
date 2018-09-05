import React from 'react'
import {NavLink} from 'react-router-dom'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import './IconTextList.scss'

const IconTextList = ({
                          listItemsConfig
                      }) => {

    const createListItems = listItemsConfig.map(({icon, text, path}) =>
        <NavLink to={path}
                 exact
                 key={icon + text}
                 className='IconTextList__NavigationLink'
                 activeClassName='IconTextList__NavigationLink_active'>
            <ListItem button>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text}/>
            </ListItem>
        </NavLink>);


    return <List component="nav">
        {createListItems}
    </List>
};


export default IconTextList;
