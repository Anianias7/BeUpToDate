import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Layout from "./Layout/Layout";
import theme from "./themeConfig"
import {MuiThemeProvider} from "@material-ui/core/styles"
import SearchView from "./Views/SearchView/SearchView";
import NotificationsView from "./Views/NotificationsView/NotificationsView";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <Layout>
                        <Route exact path="/" component={SearchView}/>
                        <Route path="/notifications" component={NotificationsView}/>
                    </Layout>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
