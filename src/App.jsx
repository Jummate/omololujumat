import { Nav, Body, SideSocial, SideEmail } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App__container">
      <Nav />
      <SideSocial />
      <SideEmail />
      <Body />
    </div>
  );
}

export default App;
