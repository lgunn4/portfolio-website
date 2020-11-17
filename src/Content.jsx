import React from 'react';
import { Switch, Route } from 'react-router';
import FrontPage from './Components/FrontPage/FrontPage';
function Content () {
    return (
        <Switch>
            <Route exact path="/" component={FrontPage} />
        </Switch>
    );
};

export default Content;