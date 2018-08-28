import React from "react";
import {Route, Switch} from 'react-router-dom';
import Signup from "./Components/Auth/Signup";
import Login from "./Components/Auth/Login"
import AllPosts from "./Components/Posts/Allposts";
import Details from "./Components/Posts/Details";
import Create from "./Components/Posts/Create";
import Edit from "./Components/Posts/Edit"
import Favorites from "./Components/Posts/Favorites";
import Logout from "./Components/Auth/Logout";

const Router = ()=>(

            <Switch>
                <Route path = '//' component={AllPosts}/>
                <Route path='/auth/signup' component={Signup} />
                <Route path='/auth/login' component={Login} />
                <Route path='/details/:_id' component={Details} />
                <Route path='/create/new' component={Create} />
                <Route path ='/edit/:_id' component = {Edit}/>
                <Route path='/view/favorites' component = {Favorites} />
                <Route exact path='/auth/logout' render ={Logout} />
            </Switch>
                    );

export default Router;


