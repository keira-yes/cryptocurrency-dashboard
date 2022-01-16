import { Page } from "../HOC/Page";
import { Welcome } from "./Welcome";
import { ConfirmButton } from "./ConfirmButton";
import { CoinGrid } from "./CoinGrid";

export function Settings() {
    return (
        <Page name="settings">
            <Welcome />
            <ConfirmButton />
            <CoinGrid />
        </Page>
    )
}
