import styled, { css } from 'styled-components';
import { AppContext } from "./AppProvider";

const Header = styled.header`
    display: flex;
    align-items: center;
`;

const Logo = styled.header`
    margin-right: auto;
    font-size: 32px;
    font-weight: 600;
`;

const NavButtonElem = styled.div`
    margin-left: 30px;
    font-size: 16px;
    line-height: 1.5;
    cursor: pointer;
    ${props => props.active && css`
        color: #AB54DB;
        cursor: default;
    `}
`;

function toProperCase(str) {
    return str.toLowerCase().charAt(0).toUpperCase() + str.substr(1);
}

function NavButton({ name }) {
    return (
        <AppContext.Consumer>
            {({ page, setPage }) => (
                <NavButtonElem
                    active={page === name}
                    onClick={() => setPage(name)}
                >
                    {toProperCase(name)}
                </NavButtonElem>
            )}
        </AppContext.Consumer>
    )
}

export function AppHeader() {
    return (
        <Header>
            <Logo>Crypto</Logo>
            <NavButton name="dashboard" />
            <NavButton name="settings" />
        </Header>
    )
}