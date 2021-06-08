import {connect} from "react-redux";
import {getActiveTabId} from "../redux/selectors/tabs-selectors";
import App from "../components/App";

const mapStateToProps = (state) => {
    return {
        activeTabId: getActiveTabId(state)
    };
}

export default connect(
    mapStateToProps,
    null
)(App);