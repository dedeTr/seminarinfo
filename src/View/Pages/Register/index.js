import React, { Component } from "react";
import "./Register.scss";
import Button from "../../Components/molecules/Button";
import { connect } from "react-redux";
import { registerUserAPI } from "../../../Model";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChnageText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    this.props.registerAPI({ email: email, password: password });
    
  };

  render() {
    return (
      <div>
        <h1 className="title__awal">SEMINARINFO</h1>
        <div className="auth-container">
          <div className="auth-card">
            <p className="auth-title">Daftar</p>
            <input
              id="email"
              className="input"
              type="text"
              onChange={this.handleChnageText}
              placeholder="Email"
            />
            <input
              id="password"
              className="input"
              type="password"
              onChange={this.handleChnageText}
              placeholder="Password minimal 6 character...."
            />
            <Button
              onClick={this.handleRegisterSubmit}
              title="Register"
              isLoading={this.props.isLoading}
            />
            <div className="go__login">
              <a href="/">Kembali ke halaman Login</a>
            </div>
          </div>
        </div>
       </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.loading,
  registerState: state.registerSuccess
});

const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Register);
