import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow } from '../HOC/Styles';
import {AppContext} from "../App/AppProvider";

function clickCoinHandler(topSection, coin, addCoin, removeCoin) {
    return topSection ? () => removeCoin(coin) : () => addCoin(coin);
}

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
    return (
        <AppContext.Consumer>
            {({ addCoin, removeCoin }) => {
                let TileClass = TileStyled;
                if (topSection) {
                    TileClass = DeletableTileStyled;
                }

                return (
                    <TileClass onClick={clickCoinHandler(topSection, coin.Symbol, addCoin, removeCoin)}>
                        <div>{coin.CoinName}</div>
                        <div>{coin.Symbol}</div>
                        <img src={`https://www.cryptocompare.com/${coin.ImageUrl}`} width="50" height="50" alt="Alt"/>
                        {topSection && <DeleteIcon>X</DeleteIcon>}
                    </TileClass>
                )
            }}
        </AppContext.Consumer>
    )
}