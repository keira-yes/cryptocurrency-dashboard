import { Page } from "../HOC/Page";
import { Welcome } from "./Welcome";
import { ConfirmButton } from "./ConfirmButton";

export function Settings() {
    return (
        <Page name="settings">
            <Welcome />
            <ConfirmButton />
        </Page>
    )
}
