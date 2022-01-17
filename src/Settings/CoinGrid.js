import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { Tile } from "./Tile";

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
`;

function displayCoins(coinList, topSection) {
    return Object.values(coinList).slice(0, topSection ? 10 : 100);
}

export function CoinGrid({ topSection }) {
    return (
        <AppContext.Consumer>
            {({coinList}) => (
                <CoinGridStyled>
                    {displayCoins(coinList, topSection).map(coin => (
                        <Tile key={coin.Id} coin={coin} topSection={topSection}/>
                        )
                    )}
                </CoinGridStyled>
            )}
        </AppContext.Consumer>
    )
}