import React, {Component} from "react";
import PropTypes from 'prop-types';
import NotelistItemContainer from "../containers/NotelistItemContainer";
import "./Notelist.css"
import NotelistEmpty from "./NotelistEmpty";

class Notelist extends Component {
    static propTypes = {
        notes: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            isActive: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired,
            lastEdited: PropTypes.string.isRequired
            })),
        onSetActiveNote: PropTypes.func.isRequired
        // noteIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    get hasNotes() {
        // const {noteIds} = this.props;
        // return noteIds && noteIds.length > 0;
        const {notes} = this.props;
        return notes && notes.length > 0;
    }

    render() {
        const {notes, onSetActiveNote} = this.props;
        return (
            <div className="notelist">
                {!this.hasNotes
                    ? (<NotelistEmpty />)
                    : (
                        <ul className="notelist__list">
                            {this.hasNotes && notes.map((note) => (
                                <NotelistItemContainer
                                    key={note.id}
                                    onSetActiveNotes={onSetActiveNote(note.id, note.isActive)}
                                    {...note}
                                />
                            ))}
                        </ul>
                    )
                }
            </div>
        )
    }
};

export default Notelist;