import styled from 'styled-components';

const Header = styled.header`
    display: flex;
`;

const Logo = styled.header`
    margin-right: auto;
`;

export function AppHeader() {
    return (
        <Header>
            <Logo>Crypto</Logo>
            <div>Dashboard</div>
            <div>Settings</div>
        </Header>
    )
}