import './App.css';
import { LandingPage } from './pages/LandingPage.component';
import { Route, Switch } from 'react-router';
import { SignInPage } from './pages/SignInPage.component';
import { SignUpPage } from './pages/SignUpPage.component';

function App() {

  return (

    <div className="App">

      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        <Route exact path={'/login'} component={SignInPage}/>
        <Route exact path={'/signup'} component={SignUpPage}/>
      </Switch>

    </div>
  );
}

export default App;
