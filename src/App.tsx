import './App.css';
import ComposePage from './views/ComposePage/ComposePage';
import { LandingPage } from './views/LandingPage/LandingPage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from './views/SignInPage/SignInPage';
import { SignUpPage } from './views/SignUpPage/SignUpPage';
import { connect } from 'react-redux';
import { AppState, initState } from './state/state';
import { NotificationPane } from './components/NotificationPane/NotificationPane';

type props = {
  user: AppState["user"]
}

function App(props: props) {
  if (props.user !== null && props.user !== undefined) {
    return (
      <div className="App">
        <div className="notif-container">
          <NotificationPane />
        </div>
        <div className="app-container">
        <Router>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route exact path={'/login'} component={LoginPage} />
            <Route exact path={'/signup'} component={SignUpPage} />
            <Route exact path={'/app'} component={ComposePage} />
          </Switch>
        </Router>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="notif-container">
        <NotificationPane />
      </div>
      <div className="app-container">
        <Router>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route exact path={'/login'} component={LoginPage} />
            <Route exact path={'/signup'} component={SignUpPage} />
          </Switch>
        </Router>
        </div>
    </div>
  );
}

const mapStateToProps = (state: AppState = initState) => {
  console.log(state);
  return { user: state.user }
}

export default connect(mapStateToProps)(App);
