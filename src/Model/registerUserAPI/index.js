import {auth} from "../../Controller/Firebase";

export const registerUserAPI = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_ISLOADING", value: true });
  return auth
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((res) => {
      console.log("berhasil : ", res);
      dispatch({ type: "CHANGE_ISLOADING", value: false });
      alert("register berhasil")
    })
    .catch(function (error) {
      var errorMessage = error.message;
      alert(errorMessage);
      dispatch({ type: "CHANGE_ISLOADING", value: false });
    });
};

export const loginUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "CHANGE_ISLOADING", value: true });
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log("berhasil : ", res);
        const dataUser = {
          uid: res.user.uid,
          email: res.user.email,
          emailVerified: res.user.emailVerified,
        };
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        dispatch({ type: "CHANGE_USER", value: dataUser });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        resolve(true);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        dispatch({ type: "CHANGE_ISLOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: false });
        reject(false);
      });
  });
};
