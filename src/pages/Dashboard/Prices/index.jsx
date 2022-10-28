import { AppContext } from "../../../HOC/AppProvider";
import { CoinGridStyled } from "../../Crypto/CryptoGrid";
import { PriceTile } from "../PriceTile";

export const Prices = () => {
    return (
        <AppContext.Consumer>
            {({ prices }) => (
                prices ?
                    <CoinGridStyled>
                        {prices.map((price) => <PriceTile data={price} key={Object.keys(price)} />)}
                    </CoinGridStyled> :
                    <div>Loading...</div>
            )}
        </AppContext.Consumer>
    )

}