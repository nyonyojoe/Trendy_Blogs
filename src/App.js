import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Create from "./create";
import BlogDetails from "./Blog-Details";
import NotFound from "./Not-Found";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
              <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
              <Route path="/create">
                  <Create />
              </Route>
              <Route path="/blogs/:id" component={BlogDetails}>
              </Route>
                  <Route path="*" component={NotFound}/>
              </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
