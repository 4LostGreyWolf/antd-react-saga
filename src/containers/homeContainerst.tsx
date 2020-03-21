
import { connect } from 'react-redux';
import Home from "../container/home/Home" 

const mapStateToProps = (state: any) => {

    return {

    }
}
const mapDispatchToProps = (dispatch: (arg0: any) => void) => {

    return {

    }
}

const AppWordAttrContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default AppWordAttrContainer