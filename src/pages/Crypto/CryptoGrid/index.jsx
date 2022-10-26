import styled from "styled-components";
import { AppContext } from "../../../HOC/AppProvider";
import { CryptoTile } from "../CryptoTile";

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
`;

function displayCoins(coinList, topSection, favorites) {
    if (topSection) {
        const favoriteArr = [];
        favorites.map(favorite => favoriteArr.push(coinList[favorite]))
        return favoriteArr;
    } else {
        return Object.values(coinList).slice(0, 100);
    }
}

export function CryptoGrid({ topSection }) {
    return (
        <AppContext.Consumer>
            {({coinList, favorites}) => (
                coinList ?
                    <CoinGridStyled>
                        {displayCoins(coinList, topSection, favorites).map(coin => (
                                <CryptoTile
                                    key={coin.Id}
                                    coin={coin}
                                    topSection={topSection}
                                />
                            )
                        )}
                    </CoinGridStyled> :
                    <div>Loading...</div>
            )}
        </AppContext.Consumer>
    )
}