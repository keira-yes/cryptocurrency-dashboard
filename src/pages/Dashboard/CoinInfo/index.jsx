import { AppContext } from "../../../HOC/AppProvider";
import styled from 'styled-components';
import { CoinDescription } from "../CoinDescription";

export const CoinInfoStyled = styled.div `
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 15px;
`

export const CoinInfo = () => {
    return (
        <AppContext.Consumer>
            {({  }) => (
                <CoinInfoStyled>
                    <CoinDescription />
                    <div>Graphs</div>
                </CoinInfoStyled>
            )}
        </AppContext.Consumer>
    )

}