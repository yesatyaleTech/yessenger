import './Home.css';
import { LandingPage } from './views/LandingPage/LandingPage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from './views/SignInPage/SignInPage';
import { SignUpPage } from './views/SignUpPage/SignUpPage';
import { connect } from 'react-redux';
import { AppState, initState } from './state/state';
import { NotificationPane } from './components/NotificationPane/NotificationPane';
import { App } from './views/App/App';

type props = {
  user: AppState["user"]
}

function Home(props: props) {
  if (props.user !== null && props.user !== undefined) {
    return (
      <div className="Home">
        <div className="notif-container">
          <NotificationPane />
        </div>
        <div className="home-container">
        <Router>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route exact path={'/login'} component={LoginPage} />
            <Route exact path={'/signup'} component={SignUpPage} />
            <Route path={'/app'} component={App} />
          </Switch>
        </Router>
        </div>
      </div>
    );
  }
  return (
    <div className="Home">
      <div className="notif-container">
        <NotificationPane />
      </div>
      <div className="home-container">
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

export default connect(mapStateToProps)(Home);
