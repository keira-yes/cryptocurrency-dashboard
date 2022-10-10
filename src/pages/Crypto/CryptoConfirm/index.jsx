import styled from 'styled-components';
import { AppContext } from "../../../HOC/AppProvider";
import { color3, redBoxShadow } from '../../../HOC/Styles';

const ConfirmButtonElem = styled.button`
    margin: 20px;
    color: ${color3};
    
    &:hover {
        ${redBoxShadow};
    }
`;

export function CryptoConfirm() {
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