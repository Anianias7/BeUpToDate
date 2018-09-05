import React from 'react'
import NotifyNoneItem from '@material-ui/icons/NotificationsNone';
import MovieItem from '@material-ui/icons/Movie';
import TVItem from '@material-ui/icons/Tv';
import HomeItem from '@material-ui/icons/Home'

export default [
    {
        icon: <HomeItem />,
        text: "Home",
        path: '/'
    },
    {
        icon: <NotifyNoneItem />,
        text: "Notifications",
        path: '/notifications'
    },
    {
        icon: <MovieItem />,
        text: "My Movies",
        path: '/movies'
    },
    {
        icon: <TVItem />,
        text: "My TV Series",
        path: '/tv'
    },
];