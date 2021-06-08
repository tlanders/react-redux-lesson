import '../index.css';
import TabsContainer from "../containers/TabsContainer";
import * as PropTypes from "prop-types";
import ControlsContainer from "../containers/ControlsContainer";
import NotepadContainer from "../containers/NotepadContainer";

const App = ({activeTabId}) => {
  return (
        <div className="App">
          <h1>React + Redux</h1>
            <div className={"main__controls"}>
                <ControlsContainer activeTabId={activeTabId}/>
            </div>
            <div className={"main__body"}>
                <TabsContainer/>
                <NotepadContainer/>
            </div>
        </div>
  );
};

App.propTypes = {
    activeTabId: PropTypes.string.isRequired
};

export default App;
