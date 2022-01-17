import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { SelectedTile } from "./Tile";

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
`;

export function CoinGrid() {
    return (
        <AppContext.Consumer>
            {({coinList}) => (
                <CoinGridStyled>
                    {Object.keys(coinList).map(coin => (
                        <SelectedTile key={coin}>{coin}</SelectedTile>
                        )
                    )}
                </CoinGridStyled>
            )}
        </AppContext.Consumer>
    )
}