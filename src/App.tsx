import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSelectstyleData} from "./selectors/indexs";
import {sethomedata,sethomedata_d,pagesindex} from "./Actions/homeAction";
import {getLoginData} from "./selectors/Loginselectors";
import './App.css';
import * as react_router_dom from "react-router-dom";
import Routes from "./Routes";
const {HashRouter} =react_router_dom

// export default App;
 class App extends Component<any,any>{
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any){
    super(props)

  }
  render(){
   console.log(this.props);
    return(
      <div className="App" >
      <HashRouter >
          <div className="App container">
              <Routes   />
          </div>
      </HashRouter >
  </div>
    )
  }
}



const mapStateToProps = (state: any) => {
    console.log("5645646546+",getSelectstyleData(state))
    return {
        selectredu:getSelectstyleData(state).getHomeList,//默认数据
        isAuthenticated:getLoginData(state).getlogindata,//默认数据
    }
}
const mapDispatchToProps = (dispatch: (arg0: any) => void) => {

    return {
         onwordfontorder:(fontOr: any)=> {dispatch(sethomedata(fontOr))},
         onwordfontorder_d:(fontOr: any)=> {dispatch(sethomedata_d(fontOr))},
        pagesindex:(fontOr: any)=> {dispatch(pagesindex(fontOr))},
    }
}

const HomeWordAttrContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default HomeWordAttrContainer