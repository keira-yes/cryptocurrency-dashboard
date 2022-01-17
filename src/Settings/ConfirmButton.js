import styled from 'styled-components';
import { AppContext } from "../App/AppProvider";
import { color3, redBoxShadow } from '../HOC/Styles';

const ConfirmButtonElem = styled.button`
    margin: 20px;
    color: ${color3};
    
    &:hover {
        ${redBoxShadow};
    }
`;

export function ConfirmButton() {
    return (
        <AppContext.Consumer>
            {({confirmFavorites}) => (
                <ConfirmButtonElem onClick={confirmFavorites}>
                    Confirm Favorites
                </ConfirmButtonElem>
            )}
        </AppContext.Consumer>
    )
}