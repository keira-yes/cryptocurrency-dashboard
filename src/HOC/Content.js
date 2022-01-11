import {AppContext, AppProvider} from "../App/AppProvider";

export function Content({ children }) {
    return (
        <AppContext.Consumer>
            {({ coinList }) => {
                if (!coinList) return <div>Loading Coins...</div>
                return <div>{children}</div>
            }}
        </AppContext.Consumer>
    )
}
