import Tabs from "../components/Tabs";
import {connect} from "react-redux";
import truncate from "../util/truncate";
import {setActiveTab} from "../redux/actions/tabs-actions";
import {getActiveTabId} from "../redux/selectors/tabs-selectors";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        activeTabId: getActiveTabId(state),
        tabs: state.tabs,
        notes: state.notes.filter(note => note.tabId === getActiveTabId(state))
            .sort((n1, n2) => n2.lastEdited.diff(n1.lastEdited))
            .map(note => ({
                ...note,
                title: truncate(note.content) || 'Untitled note',
            })),
    };
}

const mapDispatchToProps = (dispatch) => ({
    onSetActiveTab: (id) => () => {
        console.log('tab click: ' + id);
        dispatch(setActiveTab(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabs);