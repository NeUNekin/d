import React from 'react'
import './styles.css'
import { Router, Switch, Route } from 'react-router-dom'
import { register } from '../serviceWorker'
export default function App(){

    return(
        <MuThemeProvider theme={theme}>
            <CssBaseline />>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/dashboard" component={Board}/>
                </Switch>
            </Router>
        </MuThemeProvider>
    )
}