import { Nav, Body, Menu, SideSocial, SideEmail } from "./components";
import { useReducer, useMemo } from "react";
import { reducer, AppContext, defaultState } from "./utils";

import "./App.css";
import { useContext } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  //prevent unwanted re-rendering of consumers of context
  const memoizedValue = useMemo(
    () => ({ initialState: state, contextDispatch: dispatch }),
    [state]
  );
  return (
    <AppContext.Provider value={memoizedValue}>
      <div className="App__container">
        {state.showMenu && <Menu />}
        <Nav />
        <SideSocial />
        <SideEmail />
        <Body />
      </div>
    </AppContext.Provider>
  );
}

export default App;
