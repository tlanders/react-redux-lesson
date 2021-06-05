import NotelistItem from "../components/NotelistItem";
import {connect} from "react-redux";
import {setActiveNote} from "../redux/actions/notes-actions";
import {getNoteById} from "../redux/selectors/notes-selectors";

const mapStateToProps = (state, ownProps) => {
    // const {id} = ownProps;
    const note = getNoteById(state, ownProps);
    return {
        isActive: note.isActive,
        title: note.title,
        lastEdited: note.lastEdited
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSetActiveNote: (id, isActive) => () => dispatch(setActiveNote(id, isActive))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotelistItem);

