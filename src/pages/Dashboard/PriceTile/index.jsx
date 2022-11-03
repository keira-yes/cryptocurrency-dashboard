import styled, { css } from 'styled-components';
import { TileStyled } from "../../Crypto/CryptoTile";
import { greenBoxShadow } from "../../../HOC/Styles";
import { AppContext } from "../../../HOC/AppProvider";

export const PriceStyled = styled(TileStyled) `
    flex-wrap: wrap;
    strong {
        width: 100%;
        font-size: 30px;
    }
    ${props => props.current && css `
        ${greenBoxShadow};
        pointer-events: none;
    `}
`;

export const ChangePct = styled.span `
    color: green;
    ${props => props.red && css `
        color: red;
    `}
`

export function PriceTile({ data }) {
    const { FROMSYMBOL, IMAGEURL, CHANGEPCT24HOUR, PRICE } = data[Object.keys(data)]['USD'];

    const formattedPrice = number => {
        return +(number + '').slice(0, 8);
    }

    return (
        <AppContext.Consumer>
            {({ currentFavorite, setCurrentFavorite }) => {
                return (
                    <PriceStyled current={currentFavorite === FROMSYMBOL} onClick={() => setCurrentFavorite(FROMSYMBOL)}>
                        {FROMSYMBOL ? <div>{FROMSYMBOL}</div> : 'Symbol'}
                        <img src={`https://www.cryptocompare.com/${IMAGEURL}`} width="50" height="50" alt="Alt"/>
                        {CHANGEPCT24HOUR ? <ChangePct red={CHANGEPCT24HOUR < 0}>{formattedPrice(CHANGEPCT24HOUR)}</ChangePct> : 0}
                        {PRICE ? <strong>$ {formattedPrice(PRICE)}</strong> : <strong>$ 0</strong>}
                    </PriceStyled>
                )
            }}
        </AppContext.Consumer>
    )
}