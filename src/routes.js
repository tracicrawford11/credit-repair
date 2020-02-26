import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Cart from './components/Cart/Cart'
import GetStarted from './components/GetStarted/GetStarted'
import GetStartedConfirmation from './components/Confirmation/GetStartedConfirmation'
import Services from './components/Services/Services'
import OrderConfirmation from './components/Confirmation/OrderConfirmation'
import Contact from './components/Contact/Contact'
import ContactConfirmation from './components/Confirmation/ContactConfirmation'

export default (
    <Switch>
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/cart' component={Cart} />
        <Route path='/getstarted' component={GetStarted} />
        <Route path='/getstartedconfirmation' component={GetStartedConfirmation} />
        <Route path='/services' component={Services} />
        <Route path='/orderconfirmation' component={OrderConfirmation} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/contactconfirmation' component={ContactConfirmation} />
        <Route exact path='/' component ={Home} />
    </Switch>
)