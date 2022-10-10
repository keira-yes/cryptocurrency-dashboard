import { CryptoWelcome } from "./CryptoWelcome";
import { CryptoGrid } from "./CryptoGrid";
import { CryptoConfirm } from "./CryptoConfirm";

export function Crypto() {
    return (
        <>
            <CryptoWelcome />
            <CryptoGrid topSection />
            <CryptoConfirm />
        </>
    )
}

export default Crypto;