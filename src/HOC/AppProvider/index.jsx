import React from 'react';
import moment from "moment";

const cc = require('cryptocompare');
cc.setApiKey('ff4d49d4aba752dfa26bd079e48552a673c19143ee2a63c491b4a8e2f413dda4');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;
const HISTORICAL_PRICES = 10;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            graphPeriod: 'months',
            ...this.initialSettings(),
            addCoin: this.addCoin,
            isFavorite: this.isFavorite,
            removeCoin: this.removeCoin,
            confirmFavorites: this.confirmFavorites,
            fetchPrices: this.fetchPrices,
            setCurrentFavorite: this.setCurrentFavorite,
            fetchHistoricalPrices: this.fetchHistoricalPrices,
            handleGraphPeriod: this.handleGraphPeriod
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
        this.fetchPrices();
        this.fetchHistoricalPrices();
    }

    fetchCoins = async () => {
        const coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }

    fetchPrices = async () => {
        if (this.state.firstVisit) return;
        const prices = await this.getPrices();
        this.setState({ prices });
    }

    getPrices = async () => {
        let prices = [];
        try {
            for (let i = 0; i < this.state.favorites.length; i += 1) {
                const price = await cc.priceFull(String(this.state.favorites[i]), 'USD');
                prices.push(price);
            }
        } catch (e) {
            console.warn('Fetch price error', e);
        }
        return prices;
    }

    fetchHistoricalPrices = async() => {
        if (this.state.firstVisit) return;
        const historicalPrices = await this.getHistoricalPrices();
        const historicalData = [{
            name: this.state.currentFavorite,
            data: historicalPrices.map((price, index) => [
                moment().subtract({ [this.state.graphPeriod]: HISTORICAL_PRICES - index }).valueOf(),
                price.USD
            ])
        }];
        this.setState({ historicalData });
    }

    getHistoricalPrices = async () => {
        let historicalPrices = [];
        try {
            for (let i = HISTORICAL_PRICES; i > 0; i --) {
                const historicalPrice = await cc.priceHistorical(
                    this.state.currentFavorite,
                    ['USD'],
                    moment().subtract({ [this.state.graphPeriod]: i }).toDate());
                historicalPrices.push(historicalPrice);
            }
        } catch (e) {
            console.warn('Fetch historical prices error', e);
        }
        return historicalPrices;
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
            return { firstVisit: true }
        }

        return { ...storeData };
    }

    confirmFavorites = () => {
        const currentFavorite = this.state.favorites[0];
        this.setState({
            firstVisit: false,
            currentFavorite,
            prices: null,
            historicalData: null
        }, () => {
            this.fetchPrices();
            this.fetchHistoricalPrices();
        });
        localStorage.setItem('cryptocurrency', JSON.stringify({
            favorites: this.state.favorites,
            currentFavorite
        }));
    }

    setCurrentFavorite = key => {
        this.setState({
            currentFavorite: key,
            historicalData: null
        }, this.fetchHistoricalPrices);
        localStorage.setItem('cryptocurrency', JSON.stringify({
            ...JSON.parse(localStorage.getItem('cryptocurrency')),
            currentFavorite: key
        }));
    }

    handleGraphPeriod = value => {
        this.setState({
            graphPeriod: value,
            historicalData: null
        }, this.fetchHistoricalPrices);
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}