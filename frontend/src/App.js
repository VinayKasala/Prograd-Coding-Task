import "./App.css";
import Header from "./components/Header";
import PassengerList from "./components/PassengerList";

import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <PassengerList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
