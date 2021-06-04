import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import TabsContainer from "./containers/TabsContainer";

// console.log(store.getState());

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <h1>React + Redux</h1>
            <TabsContainer/>
        </div>
      </Provider>
  );
}

export default App;
