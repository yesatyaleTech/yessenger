import { useHistory } from 'react-router'
import './LandingPage.css'

export const LandingPage = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push("/login");
    }

    return (

        <section className="container">
            
            <h1 style={{padding: '45px'}}>YESSENGER</h1>

            <h4 style={{padding: '45px'}}>Access all your Yale Entrepreneurial Society communication needs here.</h4>

            <button className="button" onClick={handleClick}>
                Login
            </button>

        </section>

    )

}