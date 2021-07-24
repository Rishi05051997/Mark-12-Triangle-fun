import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Switch, Redirect } from "react-router-dom"
import TriangleArea from './components/pages/Triangle-Area/TriangleArea';
import TriangleQuiz from './components/pages/Triangle-Quiz/TriangleQuiz'
import TriangleHypo from './components/pages/Triangle-Hypo/TriangleHypo';
import TriangleAngle from './components/pages/Triangle-Angle/TriangleAngle';

function App() {
  return (
    <div className="container">
      <div>
        <Route exact path="/">
          < Main />
        </Route>
        <Switch>
          <Route exact path="/triangle-area">
            < TriangleArea />
          </Route>
          <Route exact path="/triangle-quiz">
            < TriangleQuiz />
          </Route>
          <Route exact path="/triangle-hypo">
            < TriangleHypo />
          </Route>
          <Route exact path="/triangle-angle">
            < TriangleAngle />
          </Route>
          <Route exact path="**">
            < Redirect to="/" />
          </Route>

        </Switch>

      </div>
      <div>
        < Footer />
      </div>
    </div>
  );
}

export default App;
