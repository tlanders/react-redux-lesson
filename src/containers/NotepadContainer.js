import {connect} from "react-redux";
import {getActiveTabId} from "../redux/selectors/tabs-selectors";
import Notepad from "../components/Notepad";
import {getActiveContent, getActiveId, getActiveLastEdited} from "../redux/selectors/notes-selectors";
import {addNote, updateNoteContent} from "../redux/actions/notes-actions";

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
    onUpdateNoteContent: (id, content) => dispatch(updateNoteContent(id, content))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notepad);