import { AppContext } from "../../../HOC/AppProvider";
import styled from 'styled-components';
import { CoinDescription } from "../CoinDescription";
import { CoinGraph } from "../CoinGraph";

export const CoinInfoStyled = styled.div `
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 15px;
`

export const CoinInfo = () => {
    return (
        <AppContext.Consumer>
            {({ firstVisit, historicalData, graphPeriod, handleGraphPeriod }) => {
                if (firstVisit) return;
                return <CoinInfoStyled>
                    <CoinDescription />
                    {historicalData ?
                        <CoinGraph historicalData={historicalData} graphPeriod={graphPeriod} handleGraphPeriod={handleGraphPeriod} />
                        : <div>Loading...</div>}
                </CoinInfoStyled>
            }}
        </AppContext.Consumer>
    )
}