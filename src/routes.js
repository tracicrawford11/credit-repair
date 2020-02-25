import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login/Login'
import GetStarted from './components/GetStarted/GetStarted'

export default (
    <Switch>
        <Route path='/login' component={Login} />
        <Route path='/GetStarted' component={GetStarted} /> 
        <Route path='/' exact component ={Home} />
    </Switch>
)