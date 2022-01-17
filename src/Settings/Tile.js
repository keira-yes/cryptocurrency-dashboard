import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow } from '../HOC/Styles';

export const TileStyled = styled.div `
    display: flex;
    justify-content: space-between;
    ${subtleBoxShadow};
    ${lightBlueBackground};
    padding: 15px;
    
    &:hover {
        cursor: pointer;
        ${greenBoxShadow};
    }
`;

export function Tile({ coin }) {
    return (
        <TileStyled>
            <div>{coin.CoinName}</div>
            <div>{coin.Symbol}</div>
            <img src={`https://www.cryptocompare.com/${coin.ImageUrl}`} width="50" height="50" alt="Alt"/>
        </TileStyled>
    )
}