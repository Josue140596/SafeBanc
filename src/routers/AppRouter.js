import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { BusinessScreen } from '../components/BusinessScreen';

//Components 
import { HomeScreen } from '../components/HomeScreen';
import { LoginScreen } from '../components/LoginScreen';
import { PeopleScreen } from '../components/PeopleScreen';
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
                        path='/People'
                        component={PeopleScreen}
                    />

                     <Route
                        exact
                        path='/Business'
                        component={BusinessScreen}
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
