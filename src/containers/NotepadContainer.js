import {connect} from "react-redux";
import {getActiveTabId} from "../redux/selectors/tabs-selectors";
import Notepad from "../components/Notepad";

const mapStateToProps = (state) => {
    return {
        activeTabId: getActiveTabId(state),
        id: '',
        content: '',
        lastEdited: '',
    };
}

const mapDispatchToProps = (dispatch) => ({
    onAddNote: (tabId, initialContent) => console.log('on add for notepad'),
    onUpdateNoteContent: (id, content) => console.log('on update note')
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notepad);