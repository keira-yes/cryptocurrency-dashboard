import styled from "styled-components";
import { AppContext } from "../components/AppProvider";
import { Tile } from "./Tile";

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

export function CoinGrid({ topSection }) {
    return (
        <AppContext.Consumer>
            {({coinList, favorites}) => (
                <CoinGridStyled>
                    {displayCoins(coinList, topSection, favorites).map(coin => (
                        <Tile
                            key={coin.Id}
                            coin={coin}
                            topSection={topSection}
                        />
                        )
                    )}
                </CoinGridStyled>
            )}
        </AppContext.Consumer>
    )
}