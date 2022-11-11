import { AppContext } from "../../../HOC/AppProvider";

export const CoinDescription = () => {
    return (
        <AppContext.Consumer>
            {({ currentFavorite, coinList }) => {
                const coin = coinList[currentFavorite] ? coinList[currentFavorite] : null;
                if (!coin) return <div>Loading...</div>
                return (
                    <div>
                        <h2>{coin.CoinName}</h2>
                        <figure><img src={`https://www.cryptocompare.com/${coin.ImageUrl}`} width="150" height="150" alt="Alt"/></figure>
                    </div>
                )
            }
            }
        </AppContext.Consumer>
    )

}