import { CryptoWelcome } from "./CryptoWelcome";
import { CryptoGrid } from "./CryptoGrid";
import { CryptoConfirm } from "./CryptoConfirm";

export function Crypto() {
    return (
        <>
            <h1>Crypto</h1>
            <CryptoWelcome />
            <CryptoGrid topSection />
            <CryptoConfirm />
            <CryptoGrid />
        </>
    )
}

export default Crypto;