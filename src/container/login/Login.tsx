import React, { Component } from "react";
// import { Auth } from "aws-amplify";

 
 

export default class Login extends Component<any,any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event: { target: { id: any; value: any; }; }) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // this.setState({ isLoading: true });
    console.log("点击了登录",this)
    // const data =  await Auth.signIn(this.state.email, this.state.password);
    // console.log("55666+++++",data)
      this.props.userHasAuthenticated("8789789789798789");

    // try {
    //   await Auth.signIn(this.state.email, this.state.password);
    //   console.log("adas可以显示")
    //   this.props.userHasAuthenticated(true);
    // } catch (e) {
    //
    //   alert(e.message);
    //   this.setState({ isLoading: false });
    // }
  }

  render() {

    return (
      <div className="Login">

        {/*  <Button type="primary">Button</Button>*/}
        {/*<PhotoAttrContainer />*/}
        {/*<PhotosAttrContainer/>*/}
        {/*  <PhotodAttrContainer/>*/}
         login

        {/* <Interest imgArray={this.props.imgArray} jsonsty={this.props.jsonsty}/> */}


      </div>
    );
  }
}
