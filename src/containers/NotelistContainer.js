import Notelist from "../components/Notelist";
import {connect} from "react-redux";
import {getNoteIdsForActiveTab, getNotesForActiveTab} from "../redux/selectors/notes-selectors";

const mapStateToProps = (state) => ({
    noteIds: getNoteIdsForActiveTab(state),
});

// const mapDispatchToProps = (dispatch) => ({
//     onSetActiveNote: (id, isActive) => () => dispatch(setActiveNote(id, isActive))
// });

export default connect(
    mapStateToProps,
    null
)(Notelist);

