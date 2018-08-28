import React, {Component} from "react";
import Auth from '../../Crud/auth';
import Navbar from "../Headers/Navbar";
export default class LoginForm extends Component   {
    constructor(props) {
        super(props);
        this.state = {
            form:{}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const name = e.target.dataset.name;
        const value  = e.target.value;
        const validForm = {};
        validForm[name] = value;
        this.setState({
            form:Object.assign(this.state.form,validForm)
        });
    }

    handleSubmit(e){
        e.preventDefault();
        let username = this.state.form.name;
        let password = this.state.form.password;
        let url = Auth.AuthObj.BASE_URL + 'user/' + Auth.AuthObj.APP_KEY + '/login';
        Auth.postReq(url,Auth.AuthObj.AUTH_HEADERS,{"username":username,"password":password},Auth.signInUser,this.props);
    }


    render = () => {
        return (
            <div className="container">
                <Navbar/>
            <form>
                <h4>Log in:</h4>
                <div className="form-group">
                    <label htmlFor="input-email">User name</label>
                    <input data-name="name" type="username" onChange={this.handleChange} className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp"
                           placeholder="Enter user name"/>
                </div>
                <div className="form-group">
                    <label  htmlFor="input-password">Password</label>
                    <input data-name="password" type="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button  type="submit" onClick={this.handleSubmit} className="btn btn-primary">Login</button>
            </form>
            </div>
        );
    }
};
