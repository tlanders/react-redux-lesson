import Tabs from "../components/Tabs";
import {connect} from "react-redux";
import {setActiveTab} from "../redux/actions/tabs-actions";
import {getActiveTabId, getTabs} from "../redux/selectors/tabs-selectors";

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        activeTabId: getActiveTabId(state),
        tabs: getTabs(state),
    };
}

const mapDispatchToProps = (dispatch) => ({
    onSetActiveTab: (id) => () => {
        // console.log('tab click: ' + id);
        dispatch(setActiveTab(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabs);