import { Route, Switch, useRouteMatch } from 'react-router-dom';
import TopNav from '../../components/TopNav/TopNav';
import ComposePage from './ComposePage/ComposePage';

export const App = () => {

    let { path, url } = useRouteMatch();
    return (
        <>
            <TopNav />
            <Switch>
                <Route exact path={`${path}/compose`} component={ComposePage} />
                <Route exact path={`${path}/`} component={ComposePage} />
            </Switch>
        </>
    );
}