import {connect} from "react-redux";
import {getActiveTabId} from "../redux/selectors/tabs-selectors";
import {Controls} from "../components/Controls";

const mapStateToProps = (state) => {
    return {
        activeTabId: getActiveTabId(state),
        onAddNote: (activeTabId) => () => console.log(activeTabId),
        onDeleteNote: () => console.log('del note')
    };
}

export default connect(
    mapStateToProps,
    null
)(Controls);