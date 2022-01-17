import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow } from '../HOC/Styles';

export const Tile = styled.div `
    ${subtleBoxShadow};
    ${lightBlueBackground};
    padding: 15px;
`;

export const SelectedTile = styled(Tile)`
    &:hover {
        cursor: pointer;
        ${greenBoxShadow};
    }
`