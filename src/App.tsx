import './App.css';
import ComposePage from './views/ComposePage/ComposePage';
import { LandingPage } from './views/LandingPage/LandingPage.component';
import { Route, Switch } from 'react-router';
import { SignInPage } from './views/AuthPages/SignInPage.component';
import { SignUpPage } from './views/AuthPages/SignUpPage.component';

function App() {

  return (

    <div className="App">
        {/* <ComposePage/> */}

      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        <Route exact path={'/login'} component={SignInPage}/>
        <Route exact path={'/signup'} component={SignUpPage}/>
      </Switch>

    </div>
  );
}

export default App;
