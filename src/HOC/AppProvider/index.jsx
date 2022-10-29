import React from 'react';

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
            isFavorite: this.isFavorite,
            removeCoin: this.removeCoin,
            confirmFavorites: this.confirmFavorites,
            fetchPrices: this.fetchPrices
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
        this.fetchPrices();
        const currentFavorite = this.state.favorites[0];
        this.setState({currentFavorite});
    }

    fetchCoins = async () => {
        const coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }

    fetchPrices = async () => {
        if (this.state.firstVisit) return;
        const prices = await this.getPrices();
        this.setState({ prices });
        // console.log(prices)
    }

    getPrices = async () => {
        let prices;
        const pricesArray = [];
        try {
            prices = await cc.priceFull(this.state.favorites, 'USD');
        } catch (e) {
            console.warn('Fetch price error', e);
        }
        console.log('favorites', this.state.favorites)
        console.log('prices', prices)
        Object.keys(prices).forEach(price => {
            pricesArray.push({ [price]: prices[price] });
        });
        return pricesArray;
    }

    addCoin = key => {
        const favorites = [...this.state.favorites];
        if (favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            this.setState({ favorites });
        }
    }

    isFavorite = key => {
        return this.state.favorites.includes(key);
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
        const { favorites, currentFavorite } = storeData;
        return { favorites, currentFavorite };
    }

    confirmFavorites = () => {
        const currentFavorite = this.state.favorites[0];
        this.setState({
            firstVisit: false,
            currentFavorite
        }, () => {
            this.fetchPrices();
        });
        localStorage.setItem('cryptocurrency', JSON.stringify({
            favorites: this.state.favorites,
            currentFavorite: this.state.currentFavorite
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
