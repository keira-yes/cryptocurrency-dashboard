import { AppContext } from "../App/AppProvider";

export function Welcome() {
    return (
        <AppContext.Consumer>
            {({firstVisit}) => (
                    firstVisit ? <h1>Welcome to Cryptocurrency Dashboard! Please select your favorite coins to begin.</h1> : null
                )}
        </AppContext.Consumer>
    )
}