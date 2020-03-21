import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import HomeWordAttrContainer from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import rootSaga from "./saga/saga";
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import Loadable from "@loadable/component";
import imEditer from './reducers/index'
import * as serviceWorker from './serviceWorker';
let sagaMiddleware = createSagaMiddleware()
const store = createStore(
    imEditer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
const AsyncApp = Loadable(() => import("./App"));
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AsyncApp />
    </Provider>
  </Router>,
  document.getElementById('root')
);
// function render() {
//   ReactDOM.render(
// <Router>
//     <Provider store={store}>
//         <AsyncApp/>
//     </Provider>
// </Router>
//       ,
//       document.getElementById("root")
//   );
// }
// render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
