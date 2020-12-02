import * as React from 'react';
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { store } from "./store";
import { Main } from "./components/containers/main/main"
import { Login } from "./modules/login/components";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Router>
              <Switch>
                  <Route path="/login" >
                      <Login />
                  </Route>
                  <Route path="/character/:id">
                      <Main />
                  </Route>
                  <Route path="/">
                      <Main />
                  </Route>
              </Switch>
          </Router>
      </Provider>
    </div>
  );
}

export default App;
