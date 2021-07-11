import Notelist from "../components/Notelist";
import {connect} from "react-redux";
import {getNoteIdsForActiveTab, getNotesForActiveTab} from "../redux/selectors/notes-selectors";
import {setActiveNote} from "../redux/actions/notes-actions";

const mapStateToProps = (state) => ({
    noteIds: getNotesForActiveTab(state),
});

const mapDispatchToProps = (dispatch) => ({
    onSetActiveNote: (id, isActive) => () => !isActive && dispatch(setActiveNote(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notelist);

