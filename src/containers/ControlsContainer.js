import {connect} from "react-redux";
import {Controls} from "../components/Controls";
import {addNote, deleteNote} from "../redux/actions/notes-actions";

const mapDispatchToProps = (dispatch, {activeTabId}) => ({
    onAddNote: (activeTabId) => () => dispatch(addNote(activeTabId)),
    onDeleteNote: (id) => dispatch(deleteNote(id))
});

export default connect(
    null,
    mapDispatchToProps
)(Controls);