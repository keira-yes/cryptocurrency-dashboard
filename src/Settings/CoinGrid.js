import styled from "styled-components";
import { AppContext } from "../App/AppProvider";

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;

export function CoinGrid() {
    return (
        <AppContext.Consumer>
            {({coinList}) => (
                <CoinGridStyled>
                    {Object.keys(coinList).map(coin => <div>{coin}</div>)}
                </CoinGridStyled>
            )}
        </AppContext.Consumer>
    )
}