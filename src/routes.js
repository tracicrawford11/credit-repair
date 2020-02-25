import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import GetStarted from './components/GetStarted/GetStarted'

export default (
    <Switch>
        <Route path='/login' component={Login} />
        {/* <Route path='/howitworks' component={How-it-works} /> */}
        <Route path='/getstarted' component={GetStarted} /> 
        <Route path='/'  component ={Home} />
    </Switch>
)