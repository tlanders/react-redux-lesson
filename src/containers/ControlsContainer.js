import {connect} from "react-redux";
// import {getActiveTabId} from "../redux/selectors/tabs-selectors";
import {Controls} from "../components/Controls";
import {addNote, deleteNote} from "../redux/actions/notes-actions";

// const mapStateToProps = (state) => {
//     return {
//         activeTabId: getActiveTabId(state),
//         onAddNote: (activeTabId) => () => console.log(activeTabId),
//         onDeleteNote: () => console.log('del note')
//     };
// }

const mapDispatchToProps = (dispatch, {activeTabId}) => ({
    onAddNote: (activeTabId) => () => dispatch(addNote(activeTabId)),
    onDeleteNote: (id) => dispatch(deleteNote(id))
});

export default connect(
    null,
    mapDispatchToProps
)(Controls);