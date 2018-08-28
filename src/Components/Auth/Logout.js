import Auth from "../../Crud/auth";
import React from 'react';
import {Redirect} from "react-router-dom";
const Logout = ()=>{
    const url =  Auth.AuthObj.BASE_URL + 'user/' + Auth.AuthObj.APP_KEY + '/_logout';
    let  headers = {'Content-Type': 'application/json','Authorization' : 'Kinvey ' + sessionStorage.getItem('authToken')};
    sessionStorage.clear();
    sessionStorage.setItem('authToken', Auth.AuthObj.GUEST_TOKEN);
    Auth.postReq(url,headers,{ },null,null);
    return (
        <Redirect to="/"/>
    )};
export default Logout;