import { AppContext } from "../components/AppProvider";

export function Page({ name, children }) {
    return (
        <AppContext.Consumer>
            {({ page }) => {
                if (page !== name) return null;
                return (
                    <div>{children}</div>
                )
            }}

        </AppContext.Consumer>
    )
}
