import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../component/Home/index';
import Chart from '../component/ChartPage/index';

const RouterList = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/chart">
            <Chart />
        </Route>
    </Switch>
)
export default RouterList;
