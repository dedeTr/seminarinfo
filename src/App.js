import React from 'react'
import './App.css'
import Routes from './Controller/Routes'
import { Provider } from "react-redux";
import { store } from "./Model/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
