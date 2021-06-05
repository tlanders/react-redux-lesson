import React, {Component} from "react";
import PropTypes from 'prop-types';
// import NotelistItem from "./NotelistItem";
import NotelistItemContainer from "../containers/NotelistItemContainer";

class Notelist extends Component {
    static propTypes = {
        // notes: PropTypes.arrayOf(PropTypes.shape({
        //     id: PropTypes.string.isRequired,
        //     isActive: PropTypes.bool.isRequired,
        //     title: PropTypes.string.isRequired,
        //     lastEdited: PropTypes.string.isRequired
        //     })),
        noteIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    get hasNotes() {
        const {noteIds} = this.props;
        return noteIds && noteIds.length > 0;
    }

    render() {
        const {noteIds} = this.props;
        return (
            <>
                <h4>Note List</h4>
                {!this.hasNotes && (<p>notes empty</p>)}
                {this.hasNotes && noteIds.map((noteId) => (
                    <ul>
                        <NotelistItemContainer
                            key={noteId}
                            id={noteId}
                        />
                    </ul>
                ))}
            </>
        )
    }
};

export default Notelist;