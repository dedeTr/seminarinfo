const initState = {
    popup: false,
    isLogin: false,
    loading: false,
    user: {},
  };
  
  const reducer = (state = initState, action) => {
    if (action.type === "CHANGE_POPUP") {
      return {
        ...state,
        popup: action.value,
      };
    }
    if (action.type === "CHANGE_ISLOGIN") {
      return {
        ...state,
        isLogin: action.value,
      };
    }
    if (action.type === "CHANGE_USER") {
      return {
        ...state,
        user: action.value,
      };
    }
    if (action.type === "CHANGE_ISLOADING") {
      return {
        ...state,
        loading: action.value,
      };
    }
    
    return state;
  };
  
  export default reducer;
  