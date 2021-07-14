import {connect} from "react-redux";
import {getActiveTabId} from "../redux/selectors/tabs-selectors";
import Notepad from "../components/Notepad";
import {getActiveContent, getActiveId, getActiveLastEdited} from "../redux/selectors/notes-selectors";
import {addNote} from "../redux/actions/notes-actions";

const mapStateToProps = (state) => {
    return {
        activeTabId: getActiveTabId(state),
        id: getActiveId(state),
        content: getActiveContent(state),
        lastEdited: getActiveLastEdited(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onAddNote: (tabId, initialContent) => dispatch(addNote(tabId, initialContent)),
    onUpdateNoteContent: (id, content) => console.log('notepad container - on update note')
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notepad);