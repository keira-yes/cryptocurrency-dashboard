import styled from 'styled-components';
import { AppContext } from "../App/AppProvider";

const ConfirmButtonElem = styled.button`
    margin: 20px;
    color: violet;
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