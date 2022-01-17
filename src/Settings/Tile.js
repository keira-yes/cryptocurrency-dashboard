import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow } from '../HOC/Styles';

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

export const DeletableTileStyled = styled(TileStyled) `    
    &:hover {
        ${redBoxShadow};
    }
`;

export const DisabledTileStyled = styled(TileStyled) `    
    opacity: 0.4;
    pointer-events: none;
`;

const DeleteIcon = styled.button `
    display: none;
    ${DeletableTileStyled}:hover & {
        display: block;
        color: red;
    }
`;

export function Tile({ coin, topSection }) {
    let TileClass = TileStyled;
    if (topSection) {
        TileClass = DeletableTileStyled;
    }

    return (
        <TileClass>
            <div>{coin.CoinName}</div>
            <div>{coin.Symbol}</div>
            <img src={`https://www.cryptocompare.com/${coin.ImageUrl}`} width="50" height="50" alt="Alt"/>
            {topSection && <DeleteIcon>X</DeleteIcon>}
        </TileClass>
    )
}