import styled, { css } from 'styled-components';

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

function NavButton({ name, active }) {
    return (
        <NavButtonElem active={active}>{name}</NavButtonElem>
    )
}

export function AppHeader() {
    return (
        <Header>
            <Logo>Crypto</Logo>
            <NavButton name="Dashboard" active />
            <NavButton name="Settings" />
        </Header>
    )
}