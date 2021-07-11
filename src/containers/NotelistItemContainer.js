import NotelistItem from "../components/NotelistItem";
import {connect} from "react-redux";
import {setActiveNote} from "../redux/actions/notes-actions";
import {getNoteById, getNotesForActiveTab} from "../redux/selectors/notes-selectors";

const mapStateToProps = (state) => {
    const notes = getNotesForActiveTab(state);
    console.log('note list item container - notes: ', notes);
    return {
        notes
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSetActiveNote: (id, isActive) => () => dispatch(setActiveNote(id, isActive))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotelistItem);

