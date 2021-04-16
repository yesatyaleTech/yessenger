import './LandingPage.css'

export const LandingPage = () => {

    return (

        <section className="container">
            
            <h1 style={{color: ''}}>YESSENGER</h1>

            <h4 style={{color: ''}}>Access all your Yale Entrepreneurial Society communication needs here.</h4>

            <button onClick={() => alert("Switch to Login Page")}>
                Login
            </button>

        </section>

    )

}