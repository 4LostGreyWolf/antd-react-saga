import React, { Component } from 'react';

import './Home.css';

// export default App;
export default class Home extends Component<any, any>{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props)

    }
    user() {
        console.log("65+656");

          this.props.history.push("/login");
    }
    render() {
        // console.log(this.props);

        return (
            <div className="App"   >
                sdfsdfdssssfgerger
                <button onClick={() => this.user()}>跳转</button>
            </div>
        )
    }
}



