import React, { Component } from "react";
import "./Login.scss";
import Button from "../../Components/molecules/Button";
import { connect } from "react-redux";
import { loginUserAPI } from "../../../Model";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleLoginSubmit = async () => {
    const { email, password } = this.state;
    const res = await this.props
      .LoginAPI({ email: email, password: password })
      .catch((err) => err);
    const { history } = this.props;
    if (res) {
      console.log("login sukses");
      this.setState({
        email: "",
        password: "",
      });
      history.push("/dashboard");
    } else {
      console.log("login gagal");
    }
  };

  render() {
    return (
      <div>
        <h1 className="title__awal">SEMINARINFO</h1>
        <div className="auth-container">
          <div className="auth-card">
            <p className="auth-title">Masuk ke Akun Anda</p>
            <input
              id="email"
              className="input"
              type="text"
              onChange={this.handleChangeText}
              placeholder="Email"
            />
            <input
              id="password"
              className="input"
              type="password"
              onChange={this.handleChangeText}
              placeholder="Password"
            />
            <Button
              onClick={this.handleLoginSubmit}
              title="Login"
              isLoading={this.props.isLoading}
            />
            <div className="go__register">
              <span>Belum punya akun? </span>
              <a href="/register">Register</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.loading,
});

const reduxDispatch = (dispatch) => ({
  LoginAPI: (data) => dispatch(loginUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(withRouter(Login));
