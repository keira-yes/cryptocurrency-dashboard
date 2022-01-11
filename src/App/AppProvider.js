import React from 'react';

const cc = require('cryptocompare');
cc.setApiKey('ff4d49d4aba752dfa26bd079e48552a673c19143ee2a63c491b4a8e2f413dda4')

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.initialSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        const coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }

    initialSettings = () => {
        let storeData = JSON.parse(localStorage.getItem('cryptocurrency'));
        if (!storeData) {
            return {page: 'settings', firstVisit: true}
        }
        return {};
    }

    setPage = page => this.setState({page});

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptocurrency', JSON.stringify({
            test: 'Hello'
        }));
    }

    render() {
       return (
           <AppContext.Provider value={this.state}>
               {this.props.children}
           </AppContext.Provider>
       )
    }
}
