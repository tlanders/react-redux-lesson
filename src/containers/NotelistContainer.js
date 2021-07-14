import Notelist from "../components/Notelist";
import {connect} from "react-redux";
import {getNotesForActiveTab} from "../redux/selectors/notes-selectors";
import {setActiveNote} from "../redux/actions/notes-actions";

const mapStateToProps = (state) => ({
    notes: getNotesForActiveTab(state),
});

const mapDispatchToProps = (dispatch) => ({
    onSetActiveNote: (id, isActive) => () => !isActive && dispatch(setActiveNote(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notelist);

