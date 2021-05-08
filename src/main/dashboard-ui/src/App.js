import "./App.css";
import { TeamPage } from "./pages/TeamPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router><Switch>
        <Route path="/teams/:teamName">
          <TeamPage />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
