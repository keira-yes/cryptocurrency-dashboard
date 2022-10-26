import React from 'react';
import {type} from "@testing-library/user-event/dist/type";

const cc = require('cryptocompare');
cc.setApiKey('ff4d49d4aba752dfa26bd079e48552a673c19143ee2a63c491b4a8e2f413dda4');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.initialSettings(),
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        const coinList = (await cc.coinList()).Data;
        this.setState({coinList});
        console.log(coinList)
    }

    addCoin = key => {
        const favorites = [...this.state.favorites];
        if (favorites.length < MAX_FAVORITES && !favorites.includes(key)) {
            favorites.push(key);
            this.setState({ favorites });
        }
    }

    removeCoin = key => {
        const favorites = [...this.state.favorites].filter(item => item !== key);
        this.setState({ favorites });
    }

    initialSettings = () => {
        let storeData = JSON.parse(localStorage.getItem('cryptocurrency'));
        if (!storeData) {
            return {firstVisit: true}
        }
        return {};
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
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
