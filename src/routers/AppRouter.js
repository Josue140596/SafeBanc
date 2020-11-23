import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

//Components 
import { HomeScreen } from '../components/HomeScreen';
import { LoginScreen } from '../components/LoginScreen';
import { RegisterScreen } from '../components/RegisterScreen';
import { UserPage } from '../components/UserPage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route
                        exact
                        path="/Home"
                        component={HomeScreen}
                        
                    />

                    <Route
                        exact
                        path="/Login"
                        component={LoginScreen}

                    />

                    <Route
                        exact
                        path='/Register'
                        component={RegisterScreen}
                    />

                    <Route
                        exact
                        path='/UserPage'
                        component={UserPage}
                    />

                    <Redirect to="/Home" />
                </Switch>
            </div>
        </Router>
    )
}
