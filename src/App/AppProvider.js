import React from 'react';

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
        }))
    }

    render() {
       return (
           <AppContext.Provider value={this.state}>
               {this.props.children}
           </AppContext.Provider>
       )
    }
}