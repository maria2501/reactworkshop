import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Topbar from '../components/Topbar'
import AddWordPage from './AddWordPage'
import HomePage from './HomePage'

const MainPage = () => {
    return (
        <div>
            <Topbar/>
            <Switch>
                <Route path='/add-word'>
                    <AddWordPage/>
                </Route>
                <Route path='/'> 
                        <HomePage/>
                    </Route>
            </Switch>
        </div>
    )
}

export default MainPage
