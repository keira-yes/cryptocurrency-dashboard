import { AppContext } from "../components/AppProvider";

export function Welcome() {
    return (
        <AppContext.Consumer>
            {({firstVisit}) => (
                    firstVisit ? <h1>Welcome to Cryptocurrency Dashboard! Please select your favorite coins to begin.</h1> : null
                )}
        </AppContext.Consumer>
    )
}